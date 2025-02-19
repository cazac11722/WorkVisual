import { Link } from "react-router-dom";
import IconWidget from "../Widget/icon_widget";

const SidebarItem = ({href, icon, name, count, textShow}) => {
    return (
        <Link to={href} className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
            <IconWidget icon={icon} className="fill-black" />
            <span className={`ml-3 ${textShow ? 'hidden' : ''}`}  >{name}</span>
            {count > 0 ? <span className="flex items-center justify-center ml-auto w-7 h-7 text-xs text-white bg-red-500 rounded-full ">20</span> : ''}
        </Link>
    );
}

export default SidebarItem;