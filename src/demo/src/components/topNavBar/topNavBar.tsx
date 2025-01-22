import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import './topNavBar.scss';

export const TopNavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const imagePath = import.meta.env.VITE_IMAGE_PATH;
    
    useEffect(() => {
        const handleScroll = () => {
            // scrollY는 현재 문서의 세로 스크롤 위치(px)
            if (window.scrollY >= 35) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // cleanup: 컴포넌트 언마운트 시 이벤트 제거
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const searchHandler = () => {
        console.log("SEARCH!")
    }

    return (
        <div className="top-nav-bar">
            {/* isScrolled 상태에 따라 layout-top-bar에 .scrolled 클래스를 토글 */}
            <div className={`layout-top-bar ${isScrolled ? "layout-top-bar--scrolled" : ""}`}>
                <div className="top-menu">
                    <div className="logo-container">
                        <img src={`${imagePath}logo.png`} alt="logo"></img>
                    </div>
                    <div className="icons-container">
                        <ul>
                            <li>
                                <IoSearch onClick={(e)=>{searchHandler()}}/>
                            </li>
                            <li>
                                <a
                                  href="https://github.com/Jiheebyun"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <FaGithub/>
                                </a>
                            </li>
                            <li>
                                <FaRegUser/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};
