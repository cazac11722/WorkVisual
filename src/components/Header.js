import React from 'react';
import IconWidget from './widget/icon_widget';


const Header = () => {
    return (
        <header className="flex justify-content-between  border-bottom line-h-5em">
            <label className="flex align-items-center justify-content-between border-right padding-x-1em w20" htmlFor='search'>
                <input type="text" id='search' className="form_controller"  placeholder="검색어를 입력해주세요." />
                <IconWidget icon="search" color="#ADADAD" />
            </label>
            <div className="flex align-items-center padding-x-2em">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                    fill="undefined">
                    <path
                        d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
                </svg>
                <div className="border-radius"></div>
                <p className='padding-x-2em'>admin 님 <span>환영합니다.</span></p>
                <a href="" className='flex align-items-center'>
                    <IconWidget icon="logout" />
                    <span className='margin-left'>로그아웃</span>
                </a>
            </div>
        </header>
    );
}


export default Header;