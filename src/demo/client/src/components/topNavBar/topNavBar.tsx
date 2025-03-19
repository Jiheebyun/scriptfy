import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
            <div style={{
                    height: "auto", 
                    minWidth: "35%", 
                    background: "white",
                    borderRadius: "5px", 
                    margin: "10px", 
                    padding: '20px', 
                    display: "flex", 
                    justifyContent: 'flexStart', 
                    alignItems:'center', 
                    flexDirection: "column"
                }}
            >
                
                <div style={{display: "flex", justifyContent:"flexStart"}}>
                    <h2 style={styles.h2}>
                        <span className="entypo-login" style={styles.loginIcon}>
                        <IoSearch/>
                        </span>
                        Search
                    </h2>
                    <i className="pi pi-search"></i>
                </div>
                <form action="" style={styles.form}>
                    {/*input */}
                    <input
                        type="text"
                        className="user"
                        placeholder="Search"
                        style={styles.input}
                        // :focus, ::placeholder 등을 직접 인라인으로는 적용 불가
                        // 필요 시 onFocus, onBlur 등 JS 이벤트로 동적으로 변경
                    />
                </form>
                <div className="DocSearch-container">
                    <i className="pi pi-spin pi-cog" style={{ fontSize: '2rem' }}></i>
                </div>
                <h1 style={{color: "gray"}}>Hello, It is a overlay for the search !</h1>
            </div>
        );
    }

    return (
        <div className="top-nav-bar">
            {/* isScrolled 상태에 따라 layout-top-bar에 .scrolled 클래스를 토글 */}
            <div className={`layout-top-bar ${isScrolled ? "layout-top-bar--scrolled" : ""}`}>
                <div className="top-menu">
                    <div className="logo-container">
                        <Link to="/"><img src={`${imagePath}logo.png`} alt="logo"></img></Link>
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


const styles = {
    form: {
        position: 'relative',
        width: '100%',
        height: 'auto',
    },
    input: {
        padding: '16px',
        borderRadius: '7px',
        border: '1px solid #ddd',
        background: 'rgba(255,255,255,.2)',
        display: 'block',
        margin: '20px 0px',
        width: '100%',
        color: '#888888',
        fontSize: '18px',
        height: '54px',
    },
};