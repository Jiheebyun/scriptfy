import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import './layoutContent.scss'


const LayoutContent: React.FC = () => {


    return (
        <section className="section-layout">
            <div className="section-container">
                <Outlet/>
            </div>
        </section>
    )
}

export default LayoutContent;