// DocSideBar.tsx

import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { MenuItem } from './sideBarMockup';

interface DocSideBarProps {
    items: MenuItem[]; // items로 변경
}

// ** 컴포넌트를 더 작은 컴포넌트로 분리를 해야할지 고려해봐야함. **

const DocSideBar: React.FC<DocSideBarProps> = ({ items }) => {
    return (
        <ul className="doc-sidebar-list">
            {items.map((item, index) => (
                <MenuSection key={index} item={item} />
            ))}
        </ul>
    );
};

// 개별 MenuSection 컴포넌트(기존 DocSideBar 로직 활용)
const MenuSection: React.FC<{ item: MenuItem }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [categoryOpen, setCategoryOpen] = useState<{ [key: string]: boolean }>({});

    const hasChildren = Array.isArray(item.children) && item.children.length > 0;
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // category 별로 children 그룹핑
    const categorizedChildren: Record<string, MenuItem[]> = {};
    if (hasChildren && item.children) {
        for (const child of item.children) {
            const categoryKey = child.category || 'no-category';
            if (!categorizedChildren[categoryKey]) {
                categorizedChildren[categoryKey] = [];
            }
            categorizedChildren[categoryKey].push(child);
        }
    }

    const toggleCategory = (categoryName: string) => {
        setCategoryOpen((prev) => ({
            ...prev,
            [categoryName]: !prev[categoryName]
        }));
    };

    return (
        <li className="menu-item">
            {hasChildren ? (
                <>
                    <button className="menu-button" onClick={toggleDropdown}>
                        {item.title}
                        <span className={`arrow ${isOpen ? 'open' : ''}`}></span>
                    </button>
                    {isOpen && (
                        <ul className={`submenu ${isOpen ? 'open' : ''}`}>
                            {Object.entries(categorizedChildren).map(([category, childrenItems], catIndex) => {
                                if (category === 'no-category') {
                                    return childrenItems.map((child, childIndex) => (
                                        <li key={`${catIndex}-${childIndex}`} className="submenu-item">
                                            {child.path ? (
                                                <Link to={child.path} className="submenu-link">
                                                    {child.title}
                                                </Link>
                                            ) : (
                                                <span className="submenu-text">{child.title}</span>
                                            )}
                                        </li>
                                    ));
                                } else {
                                    const isCatOpen = categoryOpen[category] || false;
                                    return (
                                        <li key={catIndex} className="submenu-category-block">
                                            <button
                                                className="submenu-category-title"
                                                onClick={() => toggleCategory(category)}
                                            >
                                                {category}
                                                <span className={`arrow ${isCatOpen ? 'open' : ''}`}></span>
                                            </button>
                                            {isCatOpen && (
                                                <ul className="submenu-category-list">
                                                    {childrenItems.map((child, childIndex) => (
                                                        <li key={`${catIndex}-${childIndex}`} className="submenu-item">
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
                                            )}
                                        </li>
                                    );
                                }
                            })}
                        </ul>
                    )}
                </>
            ) : item.path ? (
                <Link to={item.path} className="menu-link">
                    {item.title}
                </Link>
            ) : (
                <span className="menu-text">{item.title}</span>
            )}
        </li>
    );
};

export default DocSideBar;
