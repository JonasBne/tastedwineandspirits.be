import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { motion } from "framer-motion";
import { appRoutes } from "../config/url.const";

const NavBar = () => {
    const isMobile = useMediaQuery("(max-width: 1024px)");
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="flex items-center justify-between">
            <div>Logo</div>

            {
                !isMobile && (
                    <ul className="flex gap-x-12 list-none">
                    <li>
                        <a href={appRoutes.base}>Home</a>
                    </li>
                    <li>
                        <a href={appRoutes.tastings}>Tastings</a>
                    </li>
                    <li>
                        <a href={appRoutes.contact}>Contact</a>
                    </li>
                </ul>
                )
            }

            {
                isMobile && (
                    <div className="space-y-1.5 cursor-pointer z-50" onClick={() => setShowMenu(prev => !prev)}>
                    <motion.span animate={{ rotateZ: showMenu ? 45 : 0, y: showMenu ? 8 : 0 }} className="block h-0.5 w-8 bg-black"></motion.span>
                    <motion.span animate={{ width: showMenu ? 0 : 24 }} className="block h-0.5 w-6 bg-black"></motion.span>
                    <motion.span animate={{ rotateZ: showMenu ? -45 : 0, y: showMenu ? -8 : 0, width: showMenu ? 32 : 16 }} className="block h-0.5 w-4 bg-black"></motion.span>
                </div>
                )
            }
            {
                isMobile && showMenu && (
                    <motion.div animate={{ opacity: 1, x: 0}} initial={{ opacity: 0, x: 25}} className="fixed flex bg-white bottom-0 left-0 w-full h-screen items-center justify-center">
                        <div className="flex flex-col gap-24 text-2xl">
                            <a href={appRoutes.base}>Home</a>
                            <a href={appRoutes.tastings}>Tastings</a>
                            <a href={appRoutes.contact}>Contact</a>
                        </div>
                    </motion.div>
                )
            }
        </nav>
    )
}

export default NavBar;