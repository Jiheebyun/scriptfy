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
        <li className="menu-item">

        </li>
    );
};



export default DocSideBar;
