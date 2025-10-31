import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Language } from '../types';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface AnalyticsProps {
  language: Language;
  onBackToMenu: () => void;
  uiText: Record<string, string>;
  testNames: Record<string, string>;
}

const Analytics: React.FC<AnalyticsProps> = ({ language, onBackToMenu, uiText, testNames }) => {
  const [resultPatternsData, setResultPatternsData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const isDarkMode = document.documentElement.classList.contains('dark');
  const textColor = isDarkMode ? '#e2e8f0' : '#2d3748';
  const cardBgColor = isDarkMode ? '#2d3748' : '#ffffff';
  
  // Define theme colors for charts
  const chartColors = isDarkMode
    ? ['#A78BFA', '#81E6D9', '#FBD38D', '#a0aec0', '#718096', '#C4B5FD']
    : ['#4A5568', '#4FD1C5', '#F6AD55', '#718096', '#A0AEC0', '#ED8936'];


  useEffect(() => {
    // This function fetches all data from localStorage and prepares it for the charts
    const loadAnalyticsData = () => {
      try {
        // Result Patterns Data
        const historyStr = localStorage.getItem('resultHistory');
        if (historyStr) {
          const history = JSON.parse(historyStr);
          const counts: Record<string, number> = history.reduce((acc: Record<string, number>, result: string) => {
            acc[result] = (acc[result] || 0) + 1;
            return acc;
          }, {});

          if (Object.keys(counts).length > 0) {
              setResultPatternsData({
                  labels: Object.keys(counts),
                  datasets: [{
                      data: Object.values(counts),
                      backgroundColor: chartColors,
                       borderColor: cardBgColor,
                  }]
              });
          }
        }
      } catch (error) {
        console.error("Failed to load analytics data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadAnalyticsData();
  }, [language, uiText, isDarkMode, testNames, cardBgColor, chartColors]);

  const chartOptions = {
    plugins: {
      legend: {
        labels: { color: textColor, font: { family: language === 'ar' ? 'Tajawal' : 'Inter', size: 14 } }
      },
      title: {
        display: true,
        text: '', // Set dynamically
        color: textColor,
        font: { family: language === 'ar' ? 'Tajawal' : 'Inter', size: 18, weight: 'bold' }
      },
       tooltip: {
        titleFont: { family: language === 'ar' ? 'Tajawal' : 'Inter' },
        bodyFont: { family: language === 'ar' ? 'Tajawal' : 'Inter' },
      }
    },
    responsive: true,
    maintainAspectRatio: false,
  };
  
  const renderChart = (title: string, data: any, type: 'pie', noDataMessage: string) => (
    <div className="p-4 bg-light-card/80 dark:bg-dark-card/80 rounded-2xl shadow-lg backdrop-blur-sm min-h-[350px] flex flex-col">
      <h2 className="text-xl font-bold text-center mb-4 text-primary dark:text-primary-dark">{title}</h2>
      <div className="flex-grow flex items-center justify-center">
        {data ? (
          <div className="w-full h-64">
            {type === 'pie' && <Pie data={data} options={{...chartOptions, plugins: {...chartOptions.plugins, title: {...chartOptions.plugins.title, text: title, display: false}}}} />}
          </div>
        ) : (
          <p className="text-center text-light-text-secondary dark:text-dark-text-secondary italic">{noDataMessage}</p>
        )}
      </div>
    </div>
  );

  if (loading) {
    return null; // Or a loading spinner
  }

  return (
    <div className="p-4 md:p-6 animate-fade-in-deep w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary-dark">{uiText.analyticsTitle}</h1>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* Result Patterns */}
        {renderChart(uiText.resultPatternsTitle, resultPatternsData, 'pie', uiText.noResultData)}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={onBackToMenu}
          className="px-8 py-3 bg-primary dark:bg-primary-dark text-white rounded-lg shadow-md hover:bg-primary-hover dark:hover:bg-primary-dark-hover transition-all duration-300 transform hover:scale-105 active:scale-98"
        >
          {uiText.backToMainMenu}
        </button>
      </div>
       <style>{`
        @keyframes fade-in-deep {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-deep {
            animation: fade-in-deep 0.7s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Analytics;