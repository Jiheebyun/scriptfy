import React, { useContext, useEffect, useState } from "react";
import { OverlayContext } from "../../contexts/OverlayContext";
import { FaGithub } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import './topNavBar.scss';

export const TopNavBar = () => {
    const { isOpen, openOverlay, closeOverlay } = useContext(OverlayContext);
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

    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
          if (isOpen && e.key === 'Escape') {
            closeOverlay();
          }
        }

        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, [isOpen, closeOverlay]);

    const searchHandler = () => {
        console.log("SEARCH!");
        openOverlay(
            <h1>Hello, It is a overlay for the search !</h1>
        );
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
                            <li onClick={(e)=>{searchHandler()}}>
                                <IoSearch/>
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
