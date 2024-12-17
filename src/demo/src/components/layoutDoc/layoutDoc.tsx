import React from "react";

import './layoutDoc.scss'
import DocSideBar from "../docSideBar/docSideBar";
import { menuData } from "../docSideBar/sideBarMockup" // 백앤드 구현시 삭제



const LayoutDoc = () => {

    console.log('layoutDoc')
    console.log(menuData)
    return (
        <section className="doc-layout">
            <div className="sidebar left">
                {/* 왼쪽 사이드바 */}
                <DocSideBar items={menuData}></DocSideBar>
            </div>
            <div className="doc-content">
                {/* 메인 콘텐츠 */}
            </div>
            <div className="sidebar right">
                {/* 오른쪽 사이드바 */}
            </div>
        </section>
    )
}


export default LayoutDoc