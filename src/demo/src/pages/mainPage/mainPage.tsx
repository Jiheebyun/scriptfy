import React from "react";
import { Outlet } from "react-router-dom";
import './mainPage.scss'
import { TopNavBar } from "../../components/topNavBar/topNavBar";
import { TopNewsBar } from "../../components/topNewsBar/topNewsBar";
import { MainSection } from "../../components/mainSection/mainSection";
import  LayoutContent  from "../../components/layoutContent/layoutContent";


// import { BottomSection } from "../../../components/bottomSection/bottomSection";

const MainPage = () => {

    return (
        <div className="mainFrame">
            <div className="main-container">
                <TopNewsBar/>
                <TopNavBar/>
                {/* section place */}
                <LayoutContent/>
                <section></section>
            </div>
        </div>
    ) 
}

export default MainPage

// 1200이하 