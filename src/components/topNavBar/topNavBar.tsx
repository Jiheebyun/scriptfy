import React from "react";

import './topNavBar.scss'



export const TopNavBar = () => {
    const imagePath = process.env.REACT_APP_IMAGE_PATH;

    console.log(imagePath)
    return (
        <div className="top-nav-bar">
            <div className="layout-top-bar">
                <div className="top-menu">
                    <div className="logo-container">
                        <img src={`${imagePath}logo.png`} alt="logo"></img>
                    </div>
                    <div className="icons-container">

                    </div>
                </div>
            </div>
        </div>
    )
}