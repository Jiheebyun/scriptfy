import React from "react";

import './mainPage.scss'
import { TopNavBar } from "../../components/topNavBar/topNavBar";
import { TopNewsBar } from "../../components/topNewsBar/topNewsBar";
import { MainSection } from "../../components/mainSection/mainSection";
// import { BottomSection } from "../../../components/bottomSection/bottomSection";

export const MainPage = () => {


    return (
        <div className="mainFrame">
            <div className="main-container">
                <TopNewsBar/>
                <TopNavBar/>
                {/* section place */}
                <MainSection/>
                <section></section>
            </div>
        </div>
    ) 
}


// 1200이하 