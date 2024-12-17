import React from 'react';
import IconWidget from './widget/icon_widget';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const { user, logout } = useAuth(); // AuthContext에서 유저 정보와 logout 함수 가져오기
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        logout(); // 로그아웃 실행
        navigate('/WorkVisual/login'); // 로그인 페이지로 리다이렉트
    };

    return (
        <header className="flex justify-content-between border-bottom line-h-5em">
            {/* 검색 영역 */}
            <label className="flex align-items-center justify-content-between border-right padding-x-1em w20" htmlFor='search'>
                <input type="text" id='search' className="form_controller" placeholder="검색어를 입력해주세요." />
                <IconWidget icon="search" color="#ADADAD" />
            </label>

            {/* 사용자 정보 및 로그아웃 */}
            <div className="flex align-items-center padding-x-2em">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="undefined">
                    <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
                </svg>
                <div className="border-radius"></div>
                <p className='padding-x-2em'>
                    {user?.username || 'Guest'} 님 <span>환영합니다.</span>
                </p>
                <a href="/logout" onClick={handleLogout} className='flex align-items-center'>
                    <IconWidget icon="logout" />
                    <span className='margin-left'>로그아웃</span>
                </a>
            </div>
        </header>
    );
};

export default Header;
