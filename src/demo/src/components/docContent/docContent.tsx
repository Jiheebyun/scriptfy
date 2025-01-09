import React, { useState } from "react";

import data from './contentMockup';
import DocContentIntro from "../docContentIntro/docContentIntro";

const DocContent = () => {
    const [mockupData, setMockupData] = useState([data])
    // docContentIntro, docContentCode, docContentComponent로 Content를 그려야함
    // 데이터로 인해서 페이지가 그려진다. 
    // URL의 라우팅을 어떻게 해야할지 고민해봐야함


    console.log(mockupData)
    // Data associated with components 
    // **SubContent** 
    // subTitle = <docContentTitle> 
    // content = <docContentParagraphe>
    // code = <docContentCode>
    // component = the corresponding component
    return (
        <div className="content-container">
            {mockupData.map((data)=> {
                console.log(data)
                return <DocContentIntro data={data}/>
            })}
            {mockupData.map(() => {
                return <></>
            })}
        </div>
    )
}

export default DocContent