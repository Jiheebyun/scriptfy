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
export const KanbanBoard = () => {
    // Todo: How many Kanbanboard you want to create
    //       kanbanBoard : [{title :  ,key: },{title : , key: },{title : , key: }] 
    //       kanbanCard  : [{title :  , belongTo: KanbanBoardkey,  }]

    
    // kanban background color를 지정할수 있어야함
    // 

    return ( 
        <div className="sf-kanban-board-layout">
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
    )
}

