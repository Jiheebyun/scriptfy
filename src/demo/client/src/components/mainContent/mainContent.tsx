import React from "react";

import './mainContent.scss'

const MainContent = () => {
    return (
        <div className="section-content-wrapper">
            <div className="section-content-container">
                <h1 className="content-title">The Most Complete UI Suite for <span>React.js</span></h1>
                <p>
                    Elevate your web applications with PrimeReact's comprehensive suite of customizable, feature-rich UI components. With PrimeReact, turning your development vision into reality has never been easier.  
                </p>
                <div className="section-content-button-container">
                    <button className="get-started-btn">Get Started</button>
                    <button className="give-btn">Give a Star</button>
                </div>
            </div>
            <div className="section-example-container">

            </div>
        </div>
    )
}

export default MainContent