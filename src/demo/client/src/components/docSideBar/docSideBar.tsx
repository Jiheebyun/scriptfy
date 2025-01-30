// DocSideBar.tsx

import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { MenuItem } from './sideBarMockup';

import './docSideBar.scss';

interface DocSideBarProps {
    items: MenuItem[];
}

const DocSideBar: React.FC<DocSideBarProps> = ({ items }) => {
    const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});
    const {pathname} = useLocation(); // 현재 url에 해당하는 메뉴를 열어주는 기능을 추후에 추가

    const toggleSubmenu = (id: string) => {
        setOpenItems((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className="sidebar-wrapper">
            <div className="layout-sidebar">
                <nav className="sidebar-nav">
                    <ul>
                        {items.map((item) => {
                            const isItemOpen = openItems[item.idx] || false;
                            const hasChildren = item.children && item.children.length > 0;
                            return (
                                <li key={item.idx} className="menu-item">
                                    <button 
                                        className="menu-button"  
                                        onClick={() => toggleSubmenu(item.idx)}
                                        aria-expanded={isItemOpen}
                                    >
                                        {item.title}
                                        {hasChildren && (
                                            <span className={`arrow ${isItemOpen ? 'open' : ''}`}></span>
                                        )}
                                    </button>
                                    <ul className={`submenu ${isItemOpen ? 'open' : ''}`}>
                                        {item.children && item.children.map((child) => (
                                            <li key={child.idx} className="submenu-item">
                                                {child.path ? (
                                                    <Link to={child.path} className="submenu-link">
                                                        {child.title}
                                                    </Link>
                                                ) : (
                                                    <span className="submenu-text">{child.title}</span>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default DocSideBar;
