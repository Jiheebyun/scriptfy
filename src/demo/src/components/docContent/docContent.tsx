import React, { useState } from "react";

import data from './contentMockup';

const DocContent = () => {
    const [mockupData, setMockupData] = useState(data)
    // docContentIntro, docContentCode, docContentComponent로 Content를 그려야함
    // 데이터로 인해서 페이지가 그려진다. 
    // URL의 라우팅을 어떻게 해야할지 고민해봐야함


    console.log(mockupData)
    

    return (
        <div className="temp">
            <h1>Title: Basic Setting</h1>
            <p>awefawef</p>
        </div>
    )
}

export default DocContent