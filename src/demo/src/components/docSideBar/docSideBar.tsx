import React, {useState} from "react";

import { Link } from 'react-router-dom';


const DocSideBar = ({item}: any) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const hasChildren = item.children && item.children.length > 0;
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    return(
        <div>
            <li className="menu-item">
                {hasChildren ? (
                    <>
                    <button className="menu-button" onClick={toggleDropdown}>
                        {item.title}
                        <span className={`arrow ${isOpen ? 'open' : ''}`}></span>
                    </button>
                    <ul className={`submenu ${isOpen ? 'open' : ''}`}>
                        {item.children!.map((child: any, index : any) => (
                        <li key={index} className="submenu-item">
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
    )
}


export default DocSideBar
