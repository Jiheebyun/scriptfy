import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import useFetch from "src/hooks/useFetch";

import './layoutDoc.scss'
import DocSideBar from "../docSideBar/docSideBar";
import DocContent from "../docContent/docContent";
import { menuData } from "../docSideBar/sideBarMockup" // 백앤드 구현시 삭제


interface Menu {
  _id: string;
  menuTitle: string;
  path: string;
}


const LayoutDoc = () => {
  // 스크롤 위치를 저장할 state
  const [scrollY, setScrollY] = useState<number>(0);
  const { data: menus, loading, error } = useFetch<Menu[]>('/api/menu');

  if (loading) {
    return <div> loading </div>
  } 

  if (error) {
    return <div> 에러 페이지 </div>
  }

  useEffect(() => {
    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


    return (
        <section className="doc-layout">
            <div className="sidebar-left">
                {/* 왼쪽 사이드바 */}
                <DocSideBar items={menus}></DocSideBar>
            </div>
            <div className="doc-content">
                {/* 메인 콘텐츠 */}
                <Outlet></Outlet>
            </div>
            <div className="sidebar-right">
                {/* 오른쪽 사이드바 */}
            </div>
        </section>
    )
}


export default LayoutDoc