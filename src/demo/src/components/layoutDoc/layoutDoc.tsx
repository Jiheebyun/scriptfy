import React from "react";

import './layoutDoc.scss'



const LayoutDoc = () => {

    return (
        <section className="doc-layout">
            <div className="sidebar left">
                {/* 왼쪽 사이드바 */}
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