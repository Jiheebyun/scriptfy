import React, { useRef, useEffect } from "react";

import './overlayPanel.scss';

const OverlayPanel = ({ visible, onHide, children }) => {
  const overlayRef = useRef(null);

  // 바깥 클릭 시 오버레이 닫기
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (overlayRef.current && !overlayRef.current.contains(e.target)) {
//         onHide && onHide();
//       }
//     };
//     if (visible) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [visible, onHide]);

  // visible이 false면 렌더링하지 않음
//   if (!visible) return null;

  return (
    <div className="overlay-layout" ref={overlayRef}>
      {children}
    </div>
  );
}

export default OverlayPanel;
