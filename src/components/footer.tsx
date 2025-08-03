"use client";

import motion from "@/components/util/safe-motion";

export default function Footer() {
    return (
        <footer className="w-full bg-gradient-to-t from-[#080a0b] to-[#0d0e10] shadow-lg mt-auto">
            <div className="relative mx-auto flex flex-col items-center justify-center py-6 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 w-full h-full opacity-5"
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
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute rounded-full bg-red-600/10"
                                style={{
                                    width: `${Math.random() * 80 + 80}px`,
                                    height: `${Math.random() * 80 + 40}px`,
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    y: [0, Math.random() * 20 - 10],
                                    x: [0, Math.random() * 20 - 10],
                                    scale: [1, Math.random() * 0.2 + 0.9],
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
                    className="flex flex-col items-center z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div className="relative">
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.7 }}
                        >
                            <p className="text-gray-300 font-medium">
                                <span className="text-red-600">©</span> 2025, <span className="text-yellow-500">IDqnutLikeIt</span>
                            </p>
                            <p className="text-gray-400 text-sm">All Rights Reserved</p>
                        </motion.div>
                        <motion.div
                            className="absolute -top-2 left-0 w-full h-1 bg-gradient-to-r from-red-700 to-red-500"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </footer>
    );
}
