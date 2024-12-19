// DocSideBar.tsx

import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { MenuItem } from './sideBarMockup';

import './docSideBar.scss'

interface DocSideBarProps {
    items: MenuItem[]; // items로 변경
}

// ** 컴포넌트를 더 작은 컴포넌트로 분리를 해야할지 고려해봐야함. **

const DocSideBar: React.FC<DocSideBarProps> = ({ items }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSubmenu = () => {
        setIsOpen(prev => !prev);
    };

    console.log("On SideBar")
    console.log(items)

    return (
        <div className="sidebar-wrapper">
            <div className={`layout-sidebar ${isOpen ? 'open' : ''}`}>
                <nav className="sidebar-nav">
                    <ul>
                        {items.map((item) => {
                            return(
                                <li>
                                    <button className="menu-button" onClick={toggleSubmenu}>
                                        {item.title}
                                        <span className={`arrow ${isOpen ? 'open' : ''}`}></span>
                                    </button>
                                </li>
                                // <li className="menu-button"><Link to="#link1">{item.title}</Link></li>
                            )                        
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    );
};



export default DocSideBar;
