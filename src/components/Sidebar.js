import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Menulink from "./widget/menu_link_widget.js";
import MenuSubLink from './widget/menu_sub_link_widget.js';
import { useAuth } from '../contexts/AuthContext.js';

const Sidebar = () => {
  const { user } = useAuth();

  const location = useLocation(); // 현재 URL 정보를 가져옴

  // 각 메뉴의 URL 매칭을 확인하는 함수
  const isActive = (path) => location.pathname === path;

  const [AdminDataTest, setAdminDataTest] = useState([
    { "name": "a", "href": "/WorkVisual/a" },
    { "name": "b", "href": "/WorkVisual/b" },
  ]);

  const handleGet = async () => {

    try {
      const response = await fetch(`https://cazac11722.pythonanywhere.com/api/task/user/${user.id}/tasks/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        let result = await response.json();
        result = await result.map(e => ({
          name: e.title,
          href: `/WorkVisual/project/${e.id}`
        }))
        setAdminDataTest(result);
      }
    } catch (err) {
    }
  };

  useEffect(() => {
    handleGet();

  }, [user.id]);


  const AdminData = [
    { "name": "직원 관리", "href": "/WorkVisual/employee-management" },
    { "name": "프로젝트 관리", "href": "/WorkVisual/project-management" },
    { "name": "통계 및 분석", "href": "/WorkVisual/statistics-management" },
  ]

  return (
    <div className="row w300px bg-main padding-to-5em">
      <Link to="/WorkVisual/project-create" className="bg-sub btn h4em">
        <button type="button" className="bg-sub btn"><span className="text_href margin-right-1em">새 업무 추가</span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg></button>
      </Link>
      <nav className="row padding-y-2em">
        <ul>
          <Menulink MenuIcon="Dashboard" MenuActvie={isActive('/WorkVisual/') ? true : false} MenuName="대시보기" MenuHref="/WorkVisual/" />
          <MenuSubLink MenuIcon="Project" MenuName="내 프로젝트" MenuData={AdminDataTest} />
          {
            user.id === 1 ? (
              <MenuSubLink MenuIcon="user" MenuName="팀 활동" MenuData={AdminData} />
            ) : null
          }
          <Menulink MenuIcon="Comments" MenuName="코멘트 및 피드백" MenuHref="#" />
          <Menulink MenuIcon="Commuting" MenuActvie={isActive('/WorkVisual/commute-view') ? true : false} MenuName="출퇴근 및 기타관리" MenuHref="/WorkVisual/commute-view" />
          <Menulink MenuIcon="ActivityLog" MenuActvie={isActive('/WorkVisual/activity-log') ? true : false} MenuName="활동로그" MenuHref="/WorkVisual/activity-log" />
        </ul>
      </nav>
      <button className="bg-sub btn w70 margin-auto h4em">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
          fill="#FFFFFF">
          <path
            d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
        </svg>
        <span className="text_href margin-left-1em">출근하기</span>
      </button>
    </div>
  );
};

export default Sidebar;
