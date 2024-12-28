import React, { useState } from "react";



const DocContentIntro = () => {
    const [title, setTitle] = useState('Calendar');
    const [content, setContetnt] = useState('Calendar, also known as DatePicker, is a form component to work with dates.');
    const a = Array(65).fill(null)
    console.log()
    return(
        <div className="doc-intro">
            <h1>{title}</h1>
            <p>{content}</p>
            {
            a.map((d) => {
                return (
                    <>
                        <h1>{title}</h1>
                        <p>{content}</p>
                    </>
                )
            })}
        </div>
    )
}

export default DocContentIntro