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
    const [open, setOpen] = useState(false);

    const toggleSidebar = () => {
        setOpen((prev) => !prev);
    }

    return (
        <div className="sidebar-wrapper">
            <div className={`layout-sidebar ${open ? 'open' : ''}`}>
                <nav className="sidebar-nav">
                    <ul>
                        <li><Link to="#link1">Link 1</Link></li>
                        <li><Link to="#link2">Link 2</Link></li>
                        <li><Link to="#link3">Link 3</Link></li>
                        <li><Link to="#link4">Link 4</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};



export default DocSideBar;
