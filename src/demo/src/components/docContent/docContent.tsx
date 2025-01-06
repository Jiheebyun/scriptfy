import React, { useState } from "react";

import data from './contentMockup';

const DocContent = () => {
    const [mockupData, setMockupData] = useState(data)
    // 해당 컴포넌트의 기능 
    // 해당 하는 내용의  title UI 
    // 컴포넌트의 import  설명 UI
    // Basic 기능 설명 UI

    // 같은 기능의 부수적인 기능이 결합된 기능 설명 UI

    console.log(mockupData)
    

    return (
        <div className="temp">
            <h1>Title: Basic Setting</h1>
            <p>awefawef</p>
        </div>
    )
}

export default DocContent