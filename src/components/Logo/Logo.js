import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to={'/WorkVisual'} className="flex justify-center ml-10 md:mr-14">
            <img src="https://flowbite-admin-dashboard.vercel.app/images/logo.svg" className="h-8 mr-3" alt="FlowBite Logo"></img>
            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">리빙쇼핑물</span>
        </Link>
    );
}

export default Logo;