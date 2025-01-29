import React, { useContext, useEffect, useState } from "react";
import { OverlayContext } from "../../contexts/OverlayContext";
import { FaGithub } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import './topNavBar.scss';
import { color } from "@uiw/react-codemirror";

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
            <div style={{height: "auto", minWidth: "35%", background: "white", borderRadius: "5px", margin: "10px", padding: '20px', display: "flex", justifyContent: 'center', alignItems:'center', flexDirection: "column"}}>
                <form action="" style={styles.form}>
                    <h2 style={styles.h2}>
                        <span className="entypo-login" style={styles.loginIcon}>
                        <i className="fa fa-sign-in" />
                        </span>
                        Search
                    </h2>

                    {/* user 아이콘 */}
                    <span className="entypo-user inputUserIcon" style={styles.inputUserIcon}>
                        <i className="fa fa-user" />
                    </span>

                    {/* username input */}
                    <input
                        type="text"
                        className="user"
                        placeholder="Search"
                        style={styles.input}
                        // :focus, ::placeholder 등을 직접 인라인으로는 적용 불가
                        // 필요 시 onFocus, onBlur 등 JS 이벤트로 동적으로 변경
                    />

                    </form>
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


const styles = {
    form: {
      position: 'relative',
      width: '100%',
      height: 'auto',
    },
    input: {
      padding: '16px',
      borderRadius: '7px',
      border: '1px solid #efefef1f2',
      background: 'rgba(255,255,255,.2)',
      display: 'block',
      margin: '10px',
      width: '100%',
      color: 'white',
      fontSize: '18px',
      height: '54px',
    },
    button: {
      float: 'right',
      height: '121px',
      width: '50px',
      border: '0px',
      background: '#e74c3c',
      borderRadius: '7px',
      padding: '10px',
      color: 'white',
      fontSize: '22px',
      cursor: 'pointer', // 보통 버튼에 커서 표시
    },
    inputUserIcon: {
      position: 'absolute',
      top: '68px',
      right: '80px',
      color: 'white',
    },
    inputPassIcon: {
      position: 'absolute',
      top: '136px',
      right: '80px',
      color: 'white',
    },
    h2: {
      // h2 기본 스타일
      fontSize: '1.5rem', 
      // 필요 시 추가 스타일 ...
    },
    loginIcon: {
      // span.entypo-login에 해당
      marginRight: '6px', 
      // 원하는 스타일 추가 ...
    },
  };