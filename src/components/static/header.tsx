"use client";

import Link from "next/link";
import {BsDiscord} from "react-icons/bs";
import {
    NavigationMenu, NavigationMenuContent, NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList, NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import {usePathname} from "next/navigation";

const services = ['FiveM', 'Minecraft'] as const;

// Static version of the Header component without animations
export default function StaticHeader() {
    let path = usePathname() ?? '/';
    path = !path || path === '/' ? '/' : path;

    return (
        <header className="w-full h-60 sticky top-0 z-50 bg-black/90">
            <div className="relative mx-auto flex items-center justify-center py-8 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div
                        className="absolute top-0 left-0 w-full h-full opacity-0"
                        style={{
                            backgroundImage: 'radial-gradient(circle, #ff0000 1px, transparent 1px)',
                            backgroundSize: '30px 30px'
                        }}
                    />

                    <div className="absolute inset-0">
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute rounded-full bg-red-600/15"
                                style={{
                                    width: `${0.9 * 100 + 100}px`,
                                    height: `${0.4 * 100 + 50}px`,
                                    left: `${0.2 * 100}%`,
                                    top: `${0.7 * 100}%`,
                                }}
                            />
                        ))}
                    </div>
                </div>

                <div
                    className="flex flex-col z-10"
                >
                    <div className="relative">
                        <h1
                            className="text-8xl font-extrabold text-transparent bg-clip-text bg-red-600"
                        >
                            DQNUT STORE
                        </h1>
                        <div
                            className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-red-800 to-red-400 opacity-75"
                        />
                    </div>
                    <h2
                        className="mt-2 font-black text-xl text-gray-300"
                    >
                        <span>Premium</span>{" "}
                        <span>Gaming</span>{" "}
                        <span>Resources</span>

                        {path && path !== "/" && (
                            <>
                                <>
                                    <span>{" — "}</span>
                                    <span>
                                        {services.find(s => s.toLowerCase() === path?.split("/")?.[1])}
                                    </span>
                                </>

                                { path && path?.split("/")?.length >= 2 && (
                                    <>
                                        <span>{" — "}</span>
                                        <span>
                                            {path?.split("/")?.[2]?.charAt(0)?.toUpperCase() + path?.split("/")?.[2]?.substring(1)}
                                        </span>
                                    </>
                                )}
                            </>
                        )}
                    </h2>
                </div>

                <div
                    className="absolute right-5 bottom-3 flex items-center gap-3"
                >
                    <div className="flex flex-col items-end">
                        <p className="font-bold text-gray-300">Join our Discord</p>
                        <Link href={process.env.NEXT_PUBLIC_DISCORD_INVITE_URL as string} className="text-yellow-500 text-sm hover:text-yellow-400 transition-colors">Click
                            to Join</Link>
                    </div>

                    <div>
                        <BsDiscord size={32} className="text-indigo-500"/>
                    </div>
                </div>
            </div>

            <nav
                className="w-full px-12 flex items-center justify-center bg-gradient-to-b from-[#0a0606] to-[#0e0a0a] border-t border-red-900/40"
            >
                <NavigationMenu>
                    <NavigationMenuList className="py-2 gap-6">
                        <div
                            className="relative group"
                        >
                            <NavigationMenuLink href="/"
                                                className="text-red-600 hover:text-red-400 transition-colors font-medium px-2">
                                Home
                            </NavigationMenuLink>
                            <div
                                className="absolute -bottom-1 left-0 h-0.5 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                            />
                        </div>

                        <NavigationMenuItem className="relative group">
                            <div>
                                <NavigationMenuTrigger
                                    className="text-red-600 hover:text-red-400 transition-colors font-medium bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                                    FiveM
                                </NavigationMenuTrigger>
                            </div>
                            <div
                                className="absolute -bottom-1 left-0 h-0.5 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                            />

                            <NavigationMenuContent>
                                <ul
                                    className="grid w-[300px] gap-4 bg-[#050505] border border-red-900/40 p-4 rounded-md shadow-lg"
                                >
                                    <li>
                                        <NavigationMenuLink asChild
                                                            className="hover:bg-red-700/20 transition-all rounded-md block">
                                            <Link href="/fivem/scripts" className="group">
                                                <div
                                                    className="p-3 rounded-md group-hover:translate-x-1 transition-transform"
                                                >
                                                    <div className="font-medium text-red-600 flex items-center">
                                                        <span className="mr-2">Scripts</span>
                                                        <span>→</span>
                                                    </div>
                                                    <div className="text-gray-400 text-sm">
                                                        Browse all scripts in the library.
                                                    </div>
                                                </div>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem className="relative group">
                            <div>
                                <NavigationMenuTrigger
                                    className="text-red-600 hover:text-red-400 transition-colors font-medium bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                                    Minecraft
                                </NavigationMenuTrigger>
                            </div>
                            <div
                                className="absolute -bottom-1 left-0 h-0.5 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                            />

                            <NavigationMenuContent>
                                <ul
                                    className="grid w-[300px] gap-4 bg-[#050505] border border-red-900/40 p-4 rounded-md shadow-lg"
                                >
                                    <li>
                                        <NavigationMenuLink asChild
                                                            className="hover:bg-red-700/20 transition-all rounded-md block">
                                            <Link href="/minecraft/plugins" className="group">
                                                <div
                                                    className="p-3 rounded-md group-hover:translate-x-1 transition-transform"
                                                >
                                                    <div className="font-medium text-red-600 flex items-center">
                                                        <span className="mr-2">Plugins</span>
                                                        <span>→</span>
                                                    </div>
                                                    <div className="text-gray-400 text-sm">
                                                        Browse all plugins in the library.
                                                    </div>
                                                </div>
                                            </Link>
                                        </NavigationMenuLink>

                                        <NavigationMenuLink asChild
                                                            className="hover:bg-red-700/20 transition-all rounded-md block mt-2">
                                            <Link href="/minecraft/mods" className="group">
                                                <div
                                                    className="p-3 rounded-md group-hover:translate-x-1 transition-transform"
                                                >
                                                    <div className="font-medium text-red-600 flex items-center">
                                                        <span className="mr-2">Mods</span>
                                                        <span>→</span>
                                                    </div>
                                                    <div className="text-gray-400 text-sm">
                                                        Browse all mods in the library.
                                                    </div>
                                                </div>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </nav>
        </header>
    )
}
