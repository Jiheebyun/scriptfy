import React, { useState } from "react";

import data from './contentMockup';
import DocContentIntro from "../docContentIntro/docContentIntro";
import DocContentTilte from "../docContentTitle/docContentTitle";
import DocContentParagraphe from "../docContentParagraphe/docContentParagraphe";
import DocContentCode from "../docContentCode/docContentCode";
import DocContentComponent from "../docContentComponent/docContentComponent";

const DocContent = () => {
    const [mockupData, setMockupData] = useState([data])
    const sortedSubContents = mockupData[0].subContents
    ? [...mockupData[0].subContents].sort(
        (a, b) => parseInt(a.index, 10) - parseInt(b.index, 10)
      )
    : [];
    console.log(sortedSubContents)

    // docContentIntro, docContentCode, docContentComponent로 Content를 그려야함
    // 데이터로 인해서 페이지가 그려진다. 
    // URL의 라우팅을 어떻게 해야할지 고민해봐야함


    // Data associated with components 
    // **SubContent** 
    // subTitle = <docContentTitle> 
    // content = <docContentParagraphe>
    // code = <docContentCode>
    // component = the corresponding component

    


    return (
        <div className="content-container">
            {mockupData.map((data)=> {
                console.log("INTRO")
                console.log(data)
                return <DocContentIntro data={data}/>
            })}
            {sortedSubContents.map((subContent) => {
                console.log("SUBCONTENTS")
                console.log(subContent)
                return <>
                    {subContent?.subTitle && <DocContentTilte subTitle={subContent.subTitle}/>}
                    {subContent?.content && <DocContentParagraphe content={subContent.content}/>}
                    {subContent?.code && <DocContentCode code={subContent.code}/>}
                    {/* {subContent?.component && <DocContentComponent component={subContent.component}/>} */}
                </>
            })}
        </div>
    )
}

export default DocContent