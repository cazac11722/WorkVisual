import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IconWidget from './icon_widget';

const MenuSubLink = (props) => {

    const menuArr = props.MenuData ? props.MenuData : [];

    const [isActive, setIsActive] = useState(false); // 상태로 `nav_sub`의 활성 상태 관리

    const toggleActive = () => {
        setIsActive(!isActive); // 클릭 시 활성화 상태 토글
    };

    return (
        <li className={`active_menu ${isActive ? "active" : ""}`}>
            <div className={`nav justify-content-between`} onClick={toggleActive}>
                <div className="flex align-items-center " >
                    <IconWidget icon={props.MenuIcon} color="#fff" />
                    <span className="text_href margin-left-1em">{props.MenuName}</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
                    <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                </svg>
            </div>
            <ul className={`nav_sub ${isActive ? "active" : ""}`}>
                {
                    menuArr.map((e, idx) => (
                        (
                            <li key={idx}>
                                <Link to={e.href}>{e.name}</Link>
                            </li>
                        )))
                }
            </ul>
        </li>
    );
};

export default MenuSubLink;
