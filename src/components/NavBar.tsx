import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { appRoutes } from "../config/url.const";
import Logo from "/assets/logos/tasted.svg";

const NavBar = () => {
    const [initialRenderComplete, setInitialRenderComplete] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    // this is a setup to avoid hydration errors thrown by react
    // which occurs when the server pre-renders a desktop layout and the client
    // renders a mobile layout
    useEffect(() => {
        setInitialRenderComplete(true);
    }, [])

    if (!initialRenderComplete) {
        return null;
    }

    return (
        <nav className="bg-gray-100 flex items-center justify-between">
            <a href={appRoutes.base}>
                <img alt="Tasted logo" src={Logo} className="h-10" />
            </a>


            <ul className="hidden lg:flex lg:gap-x-12 list-none">
            <li>
                <a className="text-slate-800" href={appRoutes.base}>Home</a>
            </li>
            <li>
                <a className="text-slate-800" href={appRoutes.tastings.base}>Tastings</a>
            </li>
            <li>
                <a className="text-slate-800" href={appRoutes.contact}>Contact</a>
            </li>
        </ul>



        <div className="space-y-1.5 cursor-pointer z-50 lg:hidden" onClick={() => setShowMenu(prev => !prev)}>
            <motion.span animate={{ rotateZ: showMenu ? 45 : 0, y: showMenu ? 8 : 0 }} className="block h-0.5 w-8 bg-gray-800"></motion.span>
            <motion.span animate={{ width: showMenu ? 0 : 24 }} className="block h-0.5 w-6 bg-gray-800"></motion.span>
            <motion.span animate={{ rotateZ: showMenu ? -45 : 0, y: showMenu ? -8 : 0, width: showMenu ? 32 : 16 }} className="block h-0.5 w-4 bg-gray-800"></motion.span>
        </div>

        {
            showMenu && (
                <motion.div animate={{ opacity: 1, x: 0}} initial={{ opacity: 0, x: 25}} className="fixed flex bg-white bottom-0 left-0 w-full h-screen items-center justify-center lg:hidden">
                    <div className="flex flex-col items-center justify-center gap-24 text-3xl font-semibold">
                        <a className="text-slate-800" href={appRoutes.base}>Home</a>
                        <a className="text-slate-800" href={appRoutes.tastings.base}>Tastings</a>
                        <a className="text-slate-800" href={appRoutes.contact}>Contact</a>
                    </div>
                </motion.div>
            )
        }
        </nav>
    )
}

export default NavBar;