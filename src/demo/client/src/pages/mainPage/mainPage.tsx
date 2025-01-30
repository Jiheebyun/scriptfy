import React from "react";

import './mainPage.scss'
import { TopNavBar } from "../../components/topNavBar/topNavBar";
import { TopNewsBar } from "../../components/topNewsBar/topNewsBar";
import  LayoutContent  from "../../components/layoutContent/layoutContent";
import Footer from "../../components/footer/footer";


// import { BottomSection } from "../../../components/bottomSection/bottomSection";

const MainPage = () => {

    return (
        <div className="mainFrame">
            <div className="main-container">
                <TopNewsBar/>
                <TopNavBar/>
                <LayoutContent/>
                <Footer/>
            </div>
        </div>
    ) 
}

export default MainPage

// 1200이하 