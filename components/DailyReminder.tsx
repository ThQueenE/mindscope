import React, { useState, useEffect } from 'react';
import { LocalNotifications } from '@capacitor/local-notifications';
import { Language } from '../types';

interface DailyReminderProps {
  language: Language;
  uiText: {
    reminderTitle: string;
    reminderDescription: string;
    reminderTimeLabel: string;
    permissionDenied: string;
  };
  notificationText: string;
}

const DailyReminder: React.FC<DailyReminderProps> = ({ language, uiText, notificationText }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [reminderTime, setReminderTime] = useState('09:00'); // Default time
  const [isCapacitorAvailable, setIsCapacitorAvailable] = useState(false);

  // Check for Capacitor availability on mount
  useEffect(() => {
    // LocalNotifications plugin might not be available in a standard web browser
    if (typeof LocalNotifications !== 'undefined') {
      setIsCapacitorAvailable(true);
    }
  }, []);

  // Load settings from localStorage on mount
  useEffect(() => {
    if (!isCapacitorAvailable) return;
    try {
      const savedSettings = localStorage.getItem('dailyReminderSettings');
      if (savedSettings) {
        const { enabled, time } = JSON.parse(savedSettings);
        setIsEnabled(enabled);
        setReminderTime(time);
      }
    } catch (error) {
      console.error('Failed to load reminder settings from localStorage:', error);
    }
  }, [isCapacitorAvailable]);

  // Effect to handle scheduling/canceling notifications whenever settings change
  useEffect(() => {
    if (!isCapacitorAvailable) return;

    // Async function to manage the notification scheduling logic
    const manageNotifications = async () => {
      try {
        // Always clear existing scheduled notifications before setting a new one
        const pending = await LocalNotifications.getPending();
        if (pending.notifications.length > 0) {
          await LocalNotifications.cancel(pending);
        }

        if (isEnabled) {
          // Check for permissions first
          let permissions = await LocalNotifications.checkPermissions();
          if (permissions.display !== 'granted') {
            // If not granted, request permissions
            permissions = await LocalNotifications.requestPermissions();
          }

          if (permissions.display === 'granted') {
            // If permission is granted, schedule the notification
            const [hour, minute] = reminderTime.split(':').map(Number);
            await LocalNotifications.schedule({
              notifications: [
                {
                  title: 'MindScope',
                  body: notificationText,
                  id: 1, // A static ID for our single daily reminder
                  schedule: {
                    on: { hour, minute },
                    repeats: true, // This makes it a daily notification
                  },
                  smallIcon: 'ic_stat_name', // Ensure you have this icon in android/app/src/main/res/drawable
                },
              ],
            });
          } else {
            // If permission is denied, revert the toggle and inform the user
            setIsEnabled(false);
            alert(uiText.permissionDenied);
          }
        }
        
        // Save the current state (enabled/disabled and time) to localStorage
        localStorage.setItem('dailyReminderSettings', JSON.stringify({ enabled: isEnabled, time: reminderTime }));

      } catch (error) {
        console.error('Error managing Capacitor Local Notifications:', error);
        // If an error occurs (e.g., plugin fails), disable the feature to prevent inconsistent state
        setIsEnabled(false);
      }
    };

    manageNotifications();
  }, [isEnabled, reminderTime, notificationText, uiText.permissionDenied, isCapacitorAvailable]);

  // Don't render the component if the Capacitor plugin is not available
  if (!isCapacitorAvailable) {
    return null;
  }

  return (
    <div className="mt-8 w-full max-w-lg p-6 bg-primary/10 dark:bg-primary-dark/10 rounded-lg shadow-md text-light-text dark:text-dark-text">
      <div className="flex justify-between items-start">
        <div className="ltr:pr-4 rtl:pl-4">
          <h3 className="text-xl font-bold text-primary dark:text-primary-dark">{uiText.reminderTitle}</h3>
          <p className="mt-1 text-sm text-light-text-secondary dark:text-dark-text-secondary">{uiText.reminderDescription}</p>
        </div>
        {/* Custom Toggle Switch */}
        <button
          onClick={() => setIsEnabled(!isEnabled)}
          role="switch"
          aria-checked={isEnabled}
          className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark dark:focus:ring-offset-dark-bg ${isEnabled ? 'bg-primary dark:bg-primary-dark' : 'bg-gray-300 dark:bg-slate-600'}`}
        >
          <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out ${isEnabled ? 'ltr:translate-x-6 rtl:-translate-x-6' : 'ltr:translate-x-1 rtl:-translate-x-1'}`} />
        </button>
      </div>
      
      {isEnabled && (
        <div className="mt-4 pt-4 border-t border-gray-300/50 dark:border-slate-600/50 animate-fade-in-fast">
          <label htmlFor="reminderTime" className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">
            {uiText.reminderTimeLabel}
          </label>
          <input
            type="time"
            id="reminderTime"
            value={reminderTime}
            onChange={(e) => setReminderTime(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-light-card/80 dark:bg-dark-card/80 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-dark focus:border-primary-dark sm:text-sm"
          />
        </div>
      )}
      <style>{`
        @keyframes fade-in-fast {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-fast {
          animation: fade-in-fast 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default DailyReminder;
