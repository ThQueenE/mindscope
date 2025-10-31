import React, { useEffect } from 'react';

interface ToastNotificationProps {
  message: string;
  onClose: () => void;
  type?: 'success' | 'error';
}

const ToastNotification: React.FC<ToastNotificationProps> = ({ message, onClose, type = 'error' }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000); // Auto-dismiss after 4 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  const baseClasses = "fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-sm p-4 rounded-lg shadow-lg text-white flex items-center justify-between animate-slide-down-fade";
  const typeClasses = {
    error: 'bg-danger',
    success: 'bg-primary dark:bg-primary-dark',
  };

  return (
    <div className={`${baseClasses} ${typeClasses[type]}`}>
      <span>{message}</span>
      <button onClick={onClose} className="text-xl font-bold opacity-70 hover:opacity-100 transition-opacity ltr:ml-2 rtl:mr-2">&times;</button>
      <style>{`
        @keyframes slide-down-fade {
          from { opacity: 0; transform: translate(-50%, -20px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        .animate-slide-down-fade {
          animation: slide-down-fade 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>
    </div>
  );
};

export default ToastNotification;