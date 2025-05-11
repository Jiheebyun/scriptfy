import React from "react";


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
// kanbanCard: [{} ,{} ,{}, {}, {}, {}, {}]
export const KanbanBoard = () => {
    // Todo: How many Kanbanboard you want to create
    //       kanbanBoard : [{title :  ,key: },{title : , key: },{title : , key: }] 
    //       kanbanCard  : [{title :  , belongTo: KanbanBoardkey,  }]


    // 

    return ( 
        <></>
    )
}

