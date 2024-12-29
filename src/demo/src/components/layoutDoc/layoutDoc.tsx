import React from "react";
import { Outlet } from "react-router-dom";

import './layoutDoc.scss'
import DocSideBar from "../docSideBar/docSideBar";
import DocContent from "../docContent/docContent";
import { menuData } from "../docSideBar/sideBarMockup" // 백앤드 구현시 삭제



const LayoutDoc = () => {

    console.log('layoutDoc')
    console.log(menuData)
    return (
        <section className="doc-layout">
            <div className="sidebar-left">
                {/* 왼쪽 사이드바 */}
                <DocSideBar items={menuData}></DocSideBar>
            </div>
            <div className="doc-content">
                {/* 메인 콘텐츠 */}
                <Outlet></Outlet>
            </div>
            <div className="sidebar-right">
                {/* 오른쪽 사이드바 */}
            </div>
        </section>
    )
}


export default LayoutDoc