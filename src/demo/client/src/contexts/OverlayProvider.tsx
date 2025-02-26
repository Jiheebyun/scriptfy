import React, { useState } from 'react';
import { OverlayContext } from './OverlayContext';
import OverlayPanel from '../components/overlayPanel/overlayPanel';

interface OverlayProviderProps {
  children: React.ReactNode;
}

export function OverlayProvider({ children }: OverlayProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [overlayContent, setOverlayContent] = useState<React.ReactNode>(null);

  const openOverlay = (content?: React.ReactNode) => {
    if (content) {
      setOverlayContent(content);
    }
    setIsOpen(true);
  };

  const closeOverlay = () => {
    setIsOpen(false);
    setOverlayContent(null);
  };

  return (
    <OverlayContext.Provider value={{ isOpen, openOverlay, closeOverlay }}>
      {children}
      {isOpen && (
        <OverlayPanel visible={isOpen} onHide={closeOverlay}>
          {overlayContent}
        </OverlayPanel>
      )}
    </OverlayContext.Provider>
  );
}
