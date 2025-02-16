import React from "react";

import './docContentParagraphe.scss'


const DocContentParagraphe = ({content}: any) => {
    console.log(content)
    return (
        <>
            <p className="doc-paragraphe">{content}</p>
        </>
    )
}

export default DocContentParagraphe