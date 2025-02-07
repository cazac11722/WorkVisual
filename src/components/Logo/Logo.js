import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link className="flex ml-2 md:mr-24">
            <img src="https://flowbite-admin-dashboard.vercel.app/images/logo.svg" className="h-8 mr-3" alt="FlowBite Logo"></img>
            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Meta 533</span>
        </Link>
    );
}

export default Logo;