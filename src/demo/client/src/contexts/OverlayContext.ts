import { createContext } from 'react';

interface IOverlayContext {
    isOpen: boolean;
    openOverlay: (content?: React.ReactNode) => void;
    closeOverlay: () => void;
}

// 기본값(더미)은 꼭 필요하진 않지만, 타입 맞추기 위해 기본 형태 기재
export const OverlayContext = createContext<IOverlayContext>({
    isOpen: false,
    openOverlay: () => {},
    closeOverlay: () => {},
});
