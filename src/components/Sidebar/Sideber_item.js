import { Link } from "react-router-dom";
import IconWidget from "../Widget/icon_widget";

const SidebarItem = (propes) => {
    return (
        <Link to={propes.href} className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
            <IconWidget icon={propes.icon} />
            <span className="ml-3" sidebar-toggle-item="">{propes.name}</span>
        </Link>
    );
}

export default SidebarItem;