import React from "react";

import './mainPage.scss'
import { BottomSection } from "../../../components/bottomSection/bottomSection";
import { TopNavBar } from "../../../components/topNavBar/topNavBar";
import { TopNewsBar } from "../../../components/topNewsBar/topNewsBar";



export const MainPage = () => {


    return (
        <div className="mainFrame">
            <div className="main-container">
                <TopNewsBar></TopNewsBar>
                <TopNavBar></TopNavBar>
                {/* section place */}
                <section> </section>
                {/* bottom section place */}
                <section></section>
            </div>
        </div>
    ) 
}


// 1200이하 