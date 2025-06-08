import React from "react";
import { useState, useRef } from "react";
import { BsArrowDown } from "react-icons/bs";
import { GoPlusCircle } from "react-icons/go";

import "./kanbanBoard.scss"


export interface KanbanProps {
    items: string[];
    onChange?: (next: string[]) => void;
}


// Mockup Props
// kanbanWidth
// kanbanHeight
// kanbanBoard: [ 
//     {title: In Progress, key: progress, color: red}, 
//     {title: On Hold, key: hold , color: blue}, 
//     {title: waiting for Details, key: details, color: purple} 
// ]
// kanbanCard: [{title: this is test 1, belongTo: progress, color: yellow } , { title: this is test2, belongTo: progress } ,
// {}, {}, {}, {}, {}]
export const KanbanBoard = ({
    layoutColor = '#dadada',
    data = {
        progress: [
            { id: 'c1', title: 'Login UI' },
            { id: 'c2', title: 'Auth flow' },
            { id: 'c3', title: 'Dashboard' },
        ],
        hold: [{ id: 'c4', title: 'API Spec' }],
        details: [],
    },

}: any) => {
    // Todo: How many Kanbanboard you want to create
    //       kanbanBoard : [{title :  ,key: },{title : , key: },{title : , key: }] 
    //       kanbanCard  : [{title :  , belongTo: KanbanBoardkey,  }]

    
    // kanban background color를 지정할수 있어야함
    // 
    const style: React.CSSProperties = {
        '--layout-bg-color': layoutColor, 

    } as React.CSSProperties;       


    // TODO - 보드 데이터와 카드 데이터를 나눠야함. 
    // TODO - 보드 css 작업
    // TODO - 카드 컴포넌트를 분리
    const [boards, setBoards] = useState(data);

    /** 현재 드롭 예정 위치 { boardId, index } */
    const overRef = useRef(null);
    const [indicator, setIndicator] = useState(null);

    // 공통 헬퍼 고스트 데이터 생성
    const setDropPosition = (boardId, index) => {
        overRef.current = { boardId, index };
        setIndicator({ boardId, index });
    };
    console.log('overRef')
    console.log(overRef)
    // 드래그 이벤트 
    const handleDragStart = (e, boardId, cardId) => {
        e.dataTransfer.setData('text/plain', JSON.stringify({ boardId, cardId }));
        e.dataTransfer.effectAllowed = 'move';
    };

    // 카드 위 – 절반 기준 앞/뒤 삽입 결정
    const handleCardDragOver = (e, boardId, idx) => {
        e.preventDefault();
        e.stopPropagation();
        const rect = e.currentTarget.getBoundingClientRect();
        const ratio = (e.clientY - rect.top) / rect.height;
        setDropPosition(boardId, ratio < 0.5 ? idx : idx + 1);
    };

    // 인디케이터 위
    const handleIndicatorDragOver = (e, boardId, idx) => {
        e.preventDefault();
        e.stopPropagation();
        setDropPosition(boardId, idx);
    };

    // 보드 빈 공간(맨끝) – 자식 요소 위 이벤트 무시
    const handleBoardDragOver = (e, boardId, len) => {
        if (e.currentTarget !== e.target) return;
        e.preventDefault();
        setDropPosition(boardId, len);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const from = JSON.parse(e.dataTransfer.getData('text/plain'));
        const to = overRef.current;
        if (!to) return;

        setBoards((prev) => {
            const next = { ...prev };

            if (from.boardId === to.boardId) {
                // 같은 보드 내부 재정렬
                const list = [...next[from.boardId]];
                const fromIdx = list.findIndex((c) => c.id === from.cardId);
                const [card] = list.splice(fromIdx, 1);
                let insertIdx = to.index;
                if (fromIdx < insertIdx) insertIdx -= 1; // 아래로 이동 보정
                list.splice(insertIdx, 0, card);
                next[from.boardId] = list;
            } else {
                // 다른 보드로 이동
                const fromList = [...next[from.boardId]];
                const toList = [...next[to.boardId]];
                const fromIdx = fromList.findIndex((c) => c.id === from.cardId);
                const [card] = fromList.splice(fromIdx, 1);
                toList.splice(to.index, 0, card);
                next[from.boardId] = fromList;
                next[to.boardId] = toList;
            }
            return next;
        });

        overRef.current = null;
        setIndicator(null);
    };

    const renderBoardContent = (boardId, cards) => {
        if (cards.length === 0) {
            return <div className="no-data-card-container">No Data</div>
        }
        const nodes = [];
        for (let i = 0; i <= cards.length; i += 1) {
            const active = indicator && indicator.boardId === boardId && indicator.index === i;
            nodes.push(
                <div
                    key={`${boardId}-ind-${i}`}
                    className={`drop-indicator${active ? ' active' : ''}`}
                    onDragOver={(e) => handleIndicatorDragOver(e, boardId, i)}
                />
            );
            if (i < cards.length) {
                const card = cards[i];
                nodes.push(
                    <div
                        key={card.id}
                        className="sf-kanban-card-container"
                        draggable
                        onDragStart={(e) => handleDragStart(e, boardId, card.id)}
                        onDragOver={(e) => handleCardDragOver(e, boardId, i)}
                    >
                        {card.title}
                    </div>
                );
            }
        }
        return nodes;
    };


    return (
        <div className="sf-kanban-layout" onDrop={handleDrop}>
            {Object.entries(boards).map(([boardId, cards]) => (
                <div
                    key={boardId}
                    className="sf-kanban-container"
                    onDragOver={(e) => handleBoardDragOver(e, boardId, cards.length)}
                >
                    <div className="sf-kanban-board-container">
                        <div className="kanban-board-top-line" />
                        <div className="kanban-board-content">
                            <div className="kanban-board-title"><p>{boardId}</p></div>
                            <div className="kanban-board-detail">
                                <div className="kanban-board-countlist">
                                    <div className="count-with-icon">
                                        <BsArrowDown className="kanban-board-down-arrow"/>
                                        <span>{cards.length}</span>
                                    </div>
                                    <div className="">  Title</div>
                                </div>
                                <div className="banban-board-features">
                                    <GoPlusCircle className="kanban-board-create-arrow"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {renderBoardContent(boardId, cards)}
                </div>
            ))}
        </div>
    );
}

// Todo:
// 칸반의 맨 뒤에있는 배경색을 바꿀수 있는가?
// 칸반 보드의 색을 변경할수 있는가?
// 여러개의 칸반 보드가 있을 경우, 화면이 줄어들때, 칸반 보드가 아래로 내려가 여려개의 행을 만들수 있는가? 
// 각 칸반 보드 타이틀을 설정할수 있는가 
// 각 칸반 보드에서 옵션으로 카드의 리스트의 개수를 출력해주는가 
// 칸반 카드가 많아지면 스크롤을 할수 있는가
// 칸반 카드가 없을경우, "No data available" 같은 리스트가 없다는 표시를 출력해 주는가? 
// 카반 카드가 다른 칸반 보드로 드래드를 통해서 이동할수 있는가?