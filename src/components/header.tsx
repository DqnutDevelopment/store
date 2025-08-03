"use client";

import Link from "next/link";
import {BsDiscord} from "react-icons/bs";
import {
    NavigationMenu, NavigationMenuContent, NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList, NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import {usePathname} from "next/navigation";
import motion from "@/components/util/safe-motion";

const services = ['FiveM', 'Minecraft'] as const;

export default function Header() {
    let path = usePathname() ?? '/';
    path = !path || path === '/' ? '/' : path;

    return (
        <header className="w-full h-60 sticky top-0 z-50 bg-black/90">
            <div className="relative mx-auto flex items-center justify-center py-8 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 w-full h-full opacity-0"
                        style={{
                            backgroundImage: 'radial-gradient(circle, #ff0000 1px, transparent 1px)',
                            backgroundSize: '30px 30px'
                        }}
                        animate={{
                            backgroundPosition: ["0px 0px", "30px 30px"]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 20,
                            ease: "linear"
                        }}
                    />

                    <div className="absolute inset-0">
                           {[...Array(5)].map((_, i) => (
                                   <motion.div
                                       key={i}
                                       className="absolute rounded-full bg-red-600/15"
                                       style={{
                                           width: `${Math.random() * 100 + 100}px`,
                                           height: `${Math.random() * 100 + 50}px`,
                                           left: `${Math.random() * 100}%`,
                                           top: `${Math.random() * 100}%`,
                                       }}
                                       animate={{
                                           y: [0, Math.random() * 30 - 15],
                                           x: [0, Math.random() * 30 - 15],
                                           scale: [1, Math.random() * 0.3 + 0.9],
                                       }}
                                       transition={{
                                           repeat: Infinity,
                                           repeatType: "reverse",
                                           duration: Math.random() * 5 + 5,
                                       }}
                                   />
                           ))}
                    </div>
                </div>

                <motion.div
                    className="flex flex-col z-10"
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
                    <motion.div className="relative">
                        <motion.h1
                            className="text-8xl font-extrabold text-transparent bg-clip-text bg-red-600"
                            initial={{opacity: 0.1}}
                            animate={{
                                opacity: [1, 0.4, 1],
                            }}
                            transition={{
                                delay: 0.2,
                                duration: 0.7,
                                opacity: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                            whileHover={{scale: 1.02}}
                        >
                            DQNUT STORE
                        </motion.h1>
                        <motion.div
                            className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-red-800 to-red-400 opacity-75"
                            initial={{width: 0}}
                            animate={{width: "100%"}}
                            transition={{delay: 0.8, duration: 0.6}}
                        />
                    </motion.div>
                    <motion.h2
                        className="mt-2 font-black text-xl text-gray-300"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 1, duration: 0.5}}
                    >
                        <motion.span
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 1.2, duration: 0.3}}
                        >Premium
                        </motion.span>
                        {" "}
                        <motion.span
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 1.4, duration: 0.3}}
                        >Gaming
                        </motion.span>
                        {" "}
                        <motion.span
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 1.6, duration: 0.3}}
                        >Resources
                        </motion.span>

                        {path && path !== "/" && (
                            <>
                                <>
                                    <motion.span initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ delay: 1.8, duration: 0.3}}>{" — "}</motion.span>

                                    <motion.span
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        transition={{delay: 2, duration: 0.3}}
                                    >
                                        {services.find(s => s.toLowerCase() === path?.split("/")?.[1])}
                                    </motion.span>
                                </>

                                { path && path?.split("/")?.length >= 2 && (
                                    <>
                                        <motion.span initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ delay: 2.2, duration: 0.3}}>{" — "}</motion.span>

                                        <motion.span
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1}}
                                            transition={{delay: 2.4, duration: 0.3}}
                                        >
                                            {path?.split("/")?.[2]?.charAt(0)?.toUpperCase() + path?.split("/")?.[2]?.substring(1)}
                                        </motion.span>
                                    </>
                                )}
                            </>
                        )}
                    </motion.h2>
                </motion.div>

                <motion.div
                    className="absolute right-5 bottom-3 flex items-center gap-3"
                    initial={{opacity: 0, x: 20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: 1.2, duration: 0.5}}
                    whileHover={{scale: 1.05}}
                >
                    <div className="flex flex-col items-end">
                        <p className="font-bold text-gray-300">Join our Discord</p>
                        <Link href={process.env.NEXT_PUBLIC_DISCORD_INVITE_URL as string} className="text-yellow-500 text-sm hover:text-yellow-400 transition-colors">Click
                            to Join</Link>
                    </div>

                    <motion.div
                        whileHover={{rotate: 15, scale: 1.1}}
                        animate={{scale: [1, 1.05, 1]}}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            scale: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }}
                    >
                        <BsDiscord size={32} className="text-indigo-500"/>
                    </motion.div>
                </motion.div>
            </div>

            <motion.nav
                className="w-full px-12 flex items-center justify-center bg-gradient-to-b from-[#0a0606] to-[#0e0a0a] border-t border-red-900/40"
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.5, duration: 0.5}}
            >
                <NavigationMenu>
                    <NavigationMenuList className="py-2 gap-6">
                        <motion.div
                            whileHover={{scale: 1.05}}
                            transition={{type: "spring", stiffness: 400}}
                            className="relative group"
                        >
                            <NavigationMenuLink href="/"
                                                className="text-red-600 hover:text-red-400 transition-colors font-medium px-2">
                                Home
                            </NavigationMenuLink>
                            <motion.div
                                className="absolute -bottom-1 left-0 h-0.5 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                                initial={{width: 0}}
                                whileHover={{width: "100%"}}
                                transition={{duration: 0.2}}
                            />
                        </motion.div>

                        <NavigationMenuItem className="relative group">
                            <motion.div
                                whileHover={{scale: 1.05}}
                                transition={{type: "spring", stiffness: 400}}
                            >
                                <NavigationMenuTrigger
                                    className="text-red-600 hover:text-red-400 transition-colors font-medium bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                                    FiveM
                                </NavigationMenuTrigger>
                            </motion.div>
                            <motion.div
                                className="absolute -bottom-1 left-0 h-0.5 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                                initial={{width: 0}}
                                whileHover={{width: "100%"}}
                                transition={{duration: 0.2}}
                            />

                            <NavigationMenuContent>
                                <motion.ul
                                    className="grid w-[300px] gap-4 bg-[#050505] border border-red-900/40 p-4 rounded-md shadow-lg"
                                    initial={{opacity: 0, y: -10}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.2}}
                                >
                                    <li>
                                        <NavigationMenuLink asChild
                                                            className="hover:bg-red-700/20 transition-all rounded-md block">
                                            <Link href="/fivem/scripts" className="group">
                                                <motion.div
                                                    className="p-3 rounded-md group-hover:translate-x-1 transition-transform"
                                                    whileHover={{x: 2}}
                                                >
                                                    <div className="font-medium text-red-600 flex items-center">
                                                        <span className="mr-2">Scripts</span>
                                                        <motion.span
                                                            initial={{opacity: 0, x: -5}}
                                                            whileHover={{opacity: 1, x: 0}}
                                                            transition={{duration: 0.2}}
                                                        >→
                                                        </motion.span>
                                                    </div>
                                                    <div className="text-gray-400 text-sm">
                                                        Browse all scripts in the library.
                                                    </div>
                                                </motion.div>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                </motion.ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem className="relative group">
                            <motion.div
                                whileHover={{scale: 1.05}}
                                transition={{type: "spring", stiffness: 400}}
                            >
                                <NavigationMenuTrigger
                                    className="text-red-600 hover:text-red-400 transition-colors font-medium bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                                    Minecraft
                                </NavigationMenuTrigger>
                            </motion.div>
                            <motion.div
                                className="absolute -bottom-1 left-0 h-0.5 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                                initial={{width: 0}}
                                whileHover={{width: "100%"}}
                                transition={{duration: 0.2}}
                            />

                            <NavigationMenuContent>
                                <motion.ul
                                    className="grid w-[300px] gap-4 bg-[#050505] border border-red-900/40 p-4 rounded-md shadow-lg"
                                    initial={{opacity: 0, y: -10}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.2}}
                                >
                                    <li>
                                        <NavigationMenuLink asChild
                                                            className="hover:bg-red-700/20 transition-all rounded-md block">
                                            <Link href="/minecraft/plugins" className="group">
                                                <motion.div
                                                    className="p-3 rounded-md group-hover:translate-x-1 transition-transform"
                                                    whileHover={{x: 2}}
                                                >
                                                    <div className="font-medium text-red-600 flex items-center">
                                                        <span className="mr-2">Plugins</span>
                                                        <motion.span
                                                            initial={{opacity: 0, x: -5}}
                                                            whileHover={{opacity: 1, x: 0}}
                                                            transition={{duration: 0.2}}
                                                        >→
                                                        </motion.span>
                                                    </div>
                                                    <div className="text-gray-400 text-sm">
                                                        Browse all plugins in the library.
                                                    </div>
                                                </motion.div>
                                            </Link>
                                        </NavigationMenuLink>

                                        <NavigationMenuLink asChild
                                                            className="hover:bg-red-700/20 transition-all rounded-md block mt-2">
                                            <Link href="/minecraft/mods" className="group">
                                                <motion.div
                                                    className="p-3 rounded-md group-hover:translate-x-1 transition-transform"
                                                    whileHover={{x: 2}}
                                                >
                                                    <div className="font-medium text-red-600 flex items-center">
                                                        <span className="mr-2">Mods</span>
                                                        <motion.span
                                                            initial={{opacity: 0, x: -5}}
                                                            whileHover={{opacity: 1, x: 0}}
                                                            transition={{duration: 0.2}}
                                                        >→
                                                        </motion.span>
                                                    </div>
                                                    <div className="text-gray-400 text-sm">
                                                        Browse all mods in the library.
                                                    </div>
                                                </motion.div>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                </motion.ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </motion.nav>
        </header>
    )
}
