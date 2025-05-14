import React from "react";

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
    layoutColor = '#dcdcdc',

}: any) => {
    // Todo: How many Kanbanboard you want to create
    //       kanbanBoard : [{title :  ,key: },{title : , key: },{title : , key: }] 
    //       kanbanCard  : [{title :  , belongTo: KanbanBoardkey,  }]

    
    // kanban background color를 지정할수 있어야함
    // 
    const style: React.CSSProperties = {
        '--layout-bg-color': layoutColor, 

    } as React.CSSProperties;       


    
    return ( 
        <div className="sf-kanban-layout"
            style={style}    
        >
            <div className="sf-kanban-container">
                <div className="sf-kanban-board-container">
                    <div className="kanban-board-line">

                    </div>
                    <div className="kanban-board-content">
                        <div className="kanban-board-title">

                        </div>
                        <div className="kanban-board-options">

                        </div>
                    </div>
                </div>

                <div className="sf-kanban-card-container">

                </div>
            </div>
        </div>

    )
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