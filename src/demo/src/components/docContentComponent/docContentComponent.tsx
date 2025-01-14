import React from "react";


import './docContentComponent.scss';

const DocContentComponent = ({component}) => {


    const testStyle = { // Test Style
        border: "1px solid black",
        borderRadius: '10px',
        padding: '1rem',
        radius: '10px'
    };
    console.log(component)

    return (
        <>
        <div className="component-layout">
            {/* Test Button */}
            <button style={testStyle}></button>
        </div>
        </>
    )
}


export default DocContentComponent;
