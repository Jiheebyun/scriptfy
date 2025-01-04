import React, { useState } from "react";

import DocContentCode from "../docContentCode/docContentCode";

import './docContentIntro.scss'

const DocContentIntro = () => {
    const [title, setTitle] = useState('Calendar');
    const [content, setContetnt] = useState('Calendar, also known as DatePicker, is a form component to work with dates.');
    const a = Array(65).fill(null)
    console.log()
    return(
        <>
            {a.map((a)=>{
                return (
                    <div className="doc-intro">
                        <h1>{title}</h1>
                        <p>{content}</p>
                        <DocContentCode/>
                    </div>
                )
            })}
        </>
    )
}

export default DocContentIntro