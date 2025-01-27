import React, { useState } from 'react';
import { OverlayContext } from './OverlayContext';
import OverlayPanel from '@/components/overlayPanel/overlayPanel'; // 실제 오버레이 UI

interface OverlayProviderProps {
  children: React.ReactNode;
}

export function OverlayProvider({ children }: OverlayProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);

  return (
    <OverlayContext.Provider value={{ isOpen, openOverlay, closeOverlay }}>
      {children}
      {isOpen && <OverlayPanel onClose={closeOverlay} />}
    </OverlayContext.Provider>
  );
}
