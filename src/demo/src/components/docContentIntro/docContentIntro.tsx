import React, { useState } from "react";


import './docContentIntro.scss'


const DocContentIntro = ({data}) => {
    console.log(`Intro`)
    console.log(data)
    data.title
    return(
        <>
            <div className="doc-intro">
                <h1>{data.title}</h1>
                <p>{data.content}</p>
            </div>
        </>
    )
}

export default DocContentIntro