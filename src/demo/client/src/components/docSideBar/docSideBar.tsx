// DocSideBar.tsx

import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';

import './docSideBar.scss';

interface DocSideBarProps {
    items: MenuData[];
}

interface MenuChild {
    label: string;
    url: string;
    _id: string;
}
  
interface MenuData {
    _id: string; 
    component_id: string;
    menuTitle: string;
    path: string;
    children: MenuChild[];
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
                            const isItemOpen = openItems[item._id] || false;
                            const hasChildren = item.children && item.children.length > 0;
                            return (
                                <li key={item._id} className="menu-item">
                                    <button 
                                        className="menu-button"  
                                        onClick={() => toggleSubmenu(item._id)}
                                        aria-expanded={isItemOpen}
                                    >
                                        {item.menuTitle}
                                        {hasChildren && (
                                            <span className={`arrow ${isItemOpen ? 'open' : ''}`}></span>
                                        )}
                                    </button>
                                    <ul className={`submenu ${isItemOpen ? 'open' : ''}`}>
                                        {item.children && item.children.map((child) => (
                                            <li key={child._id} className="submenu-item">
                                                {child.url ? (
                                                    <Link to={child.url} className="submenu-link">
                                                        {child.label}
                                                    </Link>
                                                ) : (
                                                    <span className="submenu-text">{child.label}</span>
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
