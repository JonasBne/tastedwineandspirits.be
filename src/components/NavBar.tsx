import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { motion } from "framer-motion";

const navMotion = {
    visible: {
        opacity: 1,
        transition: "beforeChildren",
        staggerChildren: 0.15,
    },
    hidden: {
        opacity: 0,
    }
}

const itemMotion = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
}

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
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/tastings">Tastings</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
                )
            }

            {
                isMobile ? (
                    <div className="space-y-1.5 cursor-pointer z-50" onClick={() => setShowMenu(prev => !prev)}>
                    <motion.span animate={{ rotateZ: showMenu ? 45 : 0, y: showMenu ? 8 : 0 }} className="block h-0.5 w-8 bg-black"></motion.span>
                    <motion.span animate={{ width: showMenu ? 0 : 24 }} className="block h-0.5 w-6 bg-black"></motion.span>
                    <motion.span animate={{ rotateZ: showMenu ? -45 : 0, y: showMenu ? -8 : 0, width: showMenu ? 32 : 16 }} className="block h-0.5 w-4 bg-black"></motion.span>
                </div>
                ) : <div>Links here</div>
            }
            {
                isMobile && showMenu && (
                    <motion.div animate={{ opacity: 1, x: 0}} initial={{ opacity: 0, x: 25}} className="fixed flex bg-white bottom-0 left-0 w-full h-screen items-center justify-center">
                        <div className="flex flex-col gap-24 text-2xl">
                            <a href="/">Home</a>
                            <a href="/tastings">Tastings</a>
                            <a href="/contact">Contact</a>
                        </div>
                    </motion.div>
                )
            }
        </nav>
    )
}

export default NavBar;