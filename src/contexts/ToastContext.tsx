import { AnimatePresence } from 'framer-motion';
import { useState, useCallback, useRef, ReactNode } from 'react';
import { createContext, useContext } from 'react';

import { Toast } from '@components';

import { ToastState, ToastType } from '@types';

const TOAST_REMOVE_DELAY = 2000;

interface ToastContextType {
  showToast: (
    icon: ToastType,
    message: string,
    isButton?: boolean,
    targetPath?: string
  ) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toast, setToast] = useState<ToastState | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showToast = useCallback(
    (
      icon: ToastType,
      message: string,
      isButton?: boolean,
      targetPath?: string
    ) => {
      setToast({ icon, message, isButton, targetPath });

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setToast(null);
      }, TOAST_REMOVE_DELAY);
    },
    []
  );

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <AnimatePresence>
        {toast && (
          <Toast
            icon={toast.icon}
            message={toast.message}
            isButton={toast.isButton}
            targetPath={toast.targetPath}
          />
        )}
      </AnimatePresence>
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
