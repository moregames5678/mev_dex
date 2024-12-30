'use client';

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useClickOutside } from '@/hooks';
import { cn } from '@/lib';

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
};

export const Modal: React.FC<ModalProps> = ({ isOpen, children, onClose }) => {
  const ref = useClickOutside(onClose);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = '';
      setMounted(false);
    };
  }, [isOpen]);

  if (!isOpen || !mounted) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className={cn(
        'fixed inset-0 !z-[999999] flex items-center justify-center bg-[#1B1C1E] bg-opacity-70 backdrop-blur-md duration-200',
        {
          'animate-in fade-in-0': isOpen,
          'animate-out fade-out-0': !isOpen,
        },
      )}
    >
      <div
        ref={ref}
        className={cn('duration-200', {
          'animate-in fade-in-0 zoom-out-95': isOpen,
          'animate-out fade-out-0 zoom-out-95': !isOpen,
        })}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
};
