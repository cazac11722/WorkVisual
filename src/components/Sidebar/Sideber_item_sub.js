import { Link } from "react-router-dom";
import IconWidget from "../Widget/icon_widget";
import { useState } from "react";

const SidebarItemSub = ({ href, icon, name, count, textShow, list = [] }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen((prev) => !prev);
    }  


    return (
        <div className="">
            <button type="button" onClick={toggleOpen} className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                <IconWidget icon={icon} className="fill-black" />
                <span className={`flex-1 ml-3 text-left whitespace-nowrap ${textShow ? 'hidden' : ''}`}>{name}</span>
                <IconWidget icon={'ArrowDown'} className={`fill-black transition ${textShow ? 'hidden' : ''} ${isOpen ? 'rotate-180' : ''} ${ list.length <= 0 ? "hidden" : ""}`} />
            </button>
            <div className={`overflow-hidden ${isOpen ? 'h-auto' : 'h-0'}`}>
                {list.map((e, i) => (
                    <Link to={e.href} key={`menu_sub_${i}`} className="flex items-center p-2 pl-8 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
                        <span className={`ml-3 ${textShow ? 'hidden' : ''}`}  >{e.title}</span>
                        {count > 0 ? <span className="flex items-center justify-center ml-auto w-7 h-7 text-xs text-white bg-red-500 rounded-full ">{e.count}</span> : ''}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default SidebarItemSub;