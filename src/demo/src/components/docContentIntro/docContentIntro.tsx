import React, { useState } from "react";



const DocContentIntro = () => {
    const [title, setTitle] = useState('Calendar');
    const [content, setContetnt] = useState('Calendar, also known as DatePicker, is a form component to work with dates.');
    
    return(
        <div className="doc-intro">
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}