import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { MenuItem } from './menuData'; // 경로는 실제 파일 구조에 맞게 변경

import './docSideBar.scss'

interface DocSideBarProps {
    item: MenuItem;
}

const DocSideBar: React.FC<DocSideBarProps> = ({ item }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [categoryOpen, setCategoryOpen] = useState<{ [key: string]: boolean }>({});

    const hasChildren = Array.isArray(item.children) && item.children.length > 0;

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // category 별로 children을 그룹핑
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
        <div>
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
                                        // 카테고리가 없는 메뉴는 바로 표시
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
                                        // 카테고리가 있는 경우 해당 카테고리명 클릭 시 토글
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
        </div>
    );
};

export default DocSideBar;
