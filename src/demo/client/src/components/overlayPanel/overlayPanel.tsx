import React, { useRef, useEffect } from "react";
import './overlayPanel.scss';

interface OverlayPanelProps {
  visible: boolean;
  onHide: () => void;
  children: React.ReactNode;
}

const OverlayPanel: React.FC<OverlayPanelProps> = ({ visible, onHide, children }) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  // 바깥(overlayRef 밖) 클릭 시 오버레이 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (overlayRef.current && !overlayRef.current.contains(e.target as Node)) {
        onHide?.();
      }
    };

    if (visible) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visible, onHide]);

  // visible이 false면 렌더링 X
  if (!visible) return null;

  return (
    <div className="overlay-layout">
      <div className="overlay-content" ref={overlayRef}>
        {children}
      </div>
    </div>
  );
};

export default OverlayPanel;
