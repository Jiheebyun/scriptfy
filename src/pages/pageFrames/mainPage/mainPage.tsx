import React from "react";

import './mainPage.scss'
import { BottomSection } from "../../components/bottomSection/bottomSection";
import { TopNavBar } from "../../components/topNavBar/topNavBar";



export const MainPage = () => {


    return (
        <div className="mainFrame">
            <div>
                {/*  navbar place */}
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