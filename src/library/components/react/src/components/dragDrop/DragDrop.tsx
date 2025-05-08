// SfDragDrop.tsx
import React from 'react';
import { SortableList, type SortableProps } from './subComponents/SortableList';
import { KanbanBoard,  type KanbanProps  } from './subComponents/KanbanBoard';
import { FreeCanvas,   type FreeProps    } from './subComponents/FreeCanvas';
import { FileUpload,   type UploadProps  } from './subComponents/FileUpload';

// Sortable List : todo list같은 순서 바뀌는 순서가 바뀌는
// Kanban style : 여러 컬럼(그룹) 간의 드래그 이동
// Free Positioning : 캔버스 아무 곳에나 배치 x y 좌표 기반(노드를 원하는 위치에 배치)
// File upload : 드래드로 파일을 업로드 할수 있는 기능 

// type: shortableList, kanban, freePosition, fileUpload,


const BaseDragDrop: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div className="sf-dragdrop">{children}</div>
);

/* 네임스페이스 객체 생성 */
export const SfDragDrop = Object.assign(BaseDragDrop, {
  Sortable: SortableList,
  Kanban:   KanbanBoard,
  Free:     FreeCanvas,
  Upload:   FileUpload,
});

/* 타입 보강 (선택) */
export namespace SfDragDrop {
  export type SortableProps = SortableProps;
  export type KanbanProps   = KanbanProps;
  export type FreeProps     = FreeProps;
  export type UploadProps   = UploadProps;
}

export default SfDragDrop;
