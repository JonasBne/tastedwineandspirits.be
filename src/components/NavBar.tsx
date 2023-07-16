import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { appRoutes, externalLinks } from "../config/url.const";
import Logo from "/assets/logos/tasted.svg";
import InstagramIcon from '/assets/icons/instagram.svg';
import FacebookIcon from '/assets/icons/facebook.svg';
import classNames from "classnames";

const defaultListItemStyles =
    "text-gray-800 font-light mx-2 text-sm md:text-lg md:mx-4";
const activeListItemStyles = "text-gray-800 border-b-[1px] border-gray-800";

const NavBar = () => {
    const pathName = typeof window === 'undefined' ? appRoutes.base : window.location.pathname;
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
        <nav className="bg-gray-100 flex items-center justify-between md:bg-white">
            <a href={appRoutes.base}>
                <img alt="Tasted logo" src={Logo} className="h-14 lg:h-20" />
            </a>


            <ul className="hidden lg:flex lg:gap-x-12 lg:items-center list-none">
            <li className={classNames(defaultListItemStyles, pathName === appRoutes.base && activeListItemStyles, 'invisible md:visible' )}>
                <a href={appRoutes.base}>Home</a>
            </li>
            <li className={classNames(defaultListItemStyles, pathName.includes(appRoutes.tastings.base) && activeListItemStyles, 'invisible md:visible' )}>
                <a href={appRoutes.tastings.base}>Tastings</a>
            </li>
            <li className={classNames(defaultListItemStyles, (pathName.includes(appRoutes.contact) || pathName.includes(appRoutes.success)) && activeListItemStyles, 'invisible md:visible' )}>
                <a href={appRoutes.contact}>Contact</a>
            </li>
            <li>
                <a href={externalLinks.instagram}>
                <img alt="Instagram icon" src={InstagramIcon} />
                </a>
            </li>
            <li>
                <a href={externalLinks.facebook}>
                <img alt="Facebook icon" src={FacebookIcon} />
                </a>
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
                    <div className="flex flex-col items-center justify-evenly h-full">
                        <div className="flex flex-col items-center justify-center gap-24 text-3xl font-semibold">
                            <a className="text-slate-800" href={appRoutes.base}>Home</a>
                            <a className="text-slate-800" href={appRoutes.tastings.base}>Tastings</a>
                            <a className="text-slate-800" href={appRoutes.contact}>Contact</a>
                        </div>
                        <div className="flex items-center gap-x-8">
                            <a href={externalLinks.instagram}>
                            <img alt="Instagram icon" src={InstagramIcon} />
                            </a>
                            <a href={externalLinks.facebook}>
                            <img alt="Facebook" src={FacebookIcon} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            )
        }
        </nav>
    )
}

export default NavBar;