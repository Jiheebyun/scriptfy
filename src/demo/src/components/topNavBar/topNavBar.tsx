import React from "react";

import './topNavBar.scss'
import { FaGithub } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

export const TopNavBar = () => {
    const imagePath = import.meta.env.VITE_IMAGE_PATH;

    console.log(imagePath)
    return (
        <div className="top-nav-bar">
            <div className="layout-top-bar">
                <div className="top-menu">
                    <div className="logo-container">
                        <img src={`${imagePath}logo.png`} alt="logo"></img>
                    </div>
                    <div className="icons-container">
                        <ul>
                            <li>
                                <IoSearch href=""/>
                            </li>
                            <li>
                                <a href="https://github.com/Jiheebyun" target="_blank" rel="noopener noreferrer">
                                <FaGithub/>
                                </a>
                            </li>
                            <li>
                                <FaRegUser className=""/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}