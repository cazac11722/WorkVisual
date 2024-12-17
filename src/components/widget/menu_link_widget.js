import React from 'react';
import { Link } from 'react-router-dom';
import IconWidget from './icon_widget';

const Menulink = (props) => {
    return (
        <li>
            <Link to={props.MenuHref} className={props.MenuActvie ? "nav active" : "nav"} >
                <IconWidget icon={props.MenuIcon} color="#fff" />
                <span className="text_href margin-left-1em">{props.MenuName}</span>
            </Link>
        </li>
    );
};

export default Menulink;