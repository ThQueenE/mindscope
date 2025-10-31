import React, { useState, useMemo } from 'react';
import { JourneyHistory, JourneyEvent, Language } from '../types';

interface YourJourneyProps {
  history: JourneyHistory;
  onBackToMenu: () => void;
  language: Language;
  uiText: Record<string, string>;
}

const YourJourney: React.FC<YourJourneyProps> = ({ history, onBackToMenu, language, uiText }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const eventsByDate = useMemo(() => {
    return history.reduce((acc, event) => {
      const dateKey = event.date;
      if (!acc[dateKey]) {
        acc[dateKey] = [];
      }
      acc[dateKey].push(event);
      return acc;
    }, {} as Record<string, JourneyEvent[]>);
  }, [history]);

  const selectedDayEvents = selectedDate ? eventsByDate[selectedDate] || [] : [];

  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const startDay = startOfMonth.getDay();
  const daysInMonth = endOfMonth.getDate();

  const days = Array.from({ length: startDay }, (_, i) => <div key={`empty-${i}`} className="p-2"></div>);
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const dateKey = date.toISOString().split('T')[0];
    const hasEvent = eventsByDate[dateKey];
    const isToday = new Date().toISOString().split('T')[0] === dateKey;
    const isSelected = selectedDate === dateKey;

    days.push(
      <div
        key={day}
        onClick={() => hasEvent && setSelectedDate(dateKey)}
        className={`p-2 text-center rounded-lg transition-colors duration-200 ${hasEvent ? 'cursor-pointer hover:bg-primary/20 dark:hover:bg-primary-dark/20' : ''} ${isSelected ? 'bg-primary/30 dark:bg-primary-dark/30' : ''}`}
      >
        <span className={`relative w-8 h-8 flex items-center justify-center rounded-full mx-auto ${isToday ? 'bg-accent-cool dark:bg-accent-cool-dark text-white' : ''}`}>
          {day}
          {hasEvent && <div className="absolute bottom-0 w-2 h-2 bg-primary dark:bg-primary-dark rounded-full"></div>}
        </span>
      </div>
    );
  }

  const changeMonth = (offset: number) => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + offset, 1));
  };
  
  const monthName = currentDate.toLocaleString(language, { month: 'long', year: 'numeric' });
  const weekdays = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(2023, 0, language === 'ar' ? 1 + i : 2 + i); // Start on Sunday (EN) or Saturday (AR)
    return d.toLocaleString(language, { weekday: 'short' });
  });

  return (
    <div className="p-4 md:p-6 animate-fade-in-deep w-full max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary-dark">{uiText.viewYourJourney}</h1>
      </div>

      <div className="bg-light-card dark:bg-dark-card rounded-2xl shadow-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => changeMonth(-1)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">&lt;</button>
          <h2 className="text-xl font-bold text-primary dark:text-primary-dark">{monthName}</h2>
          <button onClick={() => changeMonth(1)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">&gt;</button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-xs text-center text-light-text-secondary dark:text-dark-text-secondary">
            {weekdays.map(day => <div key={day} className="font-bold">{day}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-1 mt-2">
          {days}
        </div>
      </div>

      {selectedDate && (
        <div className="mt-6 p-4 bg-light-card dark:bg-dark-card rounded-2xl shadow-lg animate-fade-in-up">
            <h3 className="text-lg font-bold text-center mb-3 text-primary dark:text-primary-dark">
                {new Date(selectedDate + 'T12:00:00Z').toLocaleDateString(language, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </h3>
            <ul className="space-y-2">
                {selectedDayEvents.map((event, index) => (
                    <li key={index} className="p-3 bg-primary/5 dark:bg-primary-dark/10 rounded-lg">
                        <p className="font-semibold">{event.description}</p>
                    </li>
                ))}
            </ul>
        </div>
      )}

      <div className="text-center mt-8">
        <button
          onClick={onBackToMenu}
          className="px-8 py-3 bg-primary dark:bg-primary-dark text-white rounded-lg shadow-md hover:bg-primary-hover dark:hover:bg-primary-dark-hover transition-all duration-300 transform hover:scale-105 active:scale-98"
        >
          {uiText.backToMainMenu}
        </button>
      </div>
    </div>
  );
};

export default YourJourney;
