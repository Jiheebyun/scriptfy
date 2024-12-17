// DocSideBar.tsx

import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { MenuItem } from './sideBarMockup';

interface DocSideBarProps {
    items: MenuItem[]; // items로 변경
}

// ** 컴포넌트를 더 작은 컴포넌트로 분리를 해야할지 고려해봐야함. **

const DocSideBar: React.FC<DocSideBarProps> = ({ items }) => {
    const [open, setOpen] = useState(false);

    const toggleSidebar = () => {
        setOpen((prev) => !prev);
    }

    return (
        <div className="sidebar-wrapper">
            <div className={`layout-sidebar ${open ? 'open' : ''}`}>
                <nav className="sidebar-nav">
                    <ul>
                        <li><a href="#link1">Link 1</a></li>
                        <li><a href="#link2">Link 2</a></li>
                        <li><a href="#link3">Link 3</a></li>
                        <li><a href="#link4">Link 4</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};



export default DocSideBar;
