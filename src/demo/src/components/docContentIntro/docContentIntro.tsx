import React, { useEffect, useState } from "react";


import './docContentIntro.scss'


const DocContentIntro = ({data}) => {
    console.log(`Intro`)
    console.log(data.title)
    // useEffect(() => { // data가 존재하는지 확인하고, 존재하지 않으면  ErrorPage

    // }, []),
    return(
        <>
            <div className="doc-intro">
                <h1>{data && data.title}</h1>
                <p>{data && data.content}</p>
            </div>
        </>
    )
}

export default DocContentIntro