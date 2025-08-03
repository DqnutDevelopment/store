"use client";

import { motion } from "framer-motion";
import SafeMotion from './util/safe-motion';

export default function Background() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Dark gradient background with very subtle red tint */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0101] via-[#0a0707] to-[#0c0a0a]" />

            {/* Animated dot pattern */}
            <motion.div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: 'radial-gradient(circle, #ff0000 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
                animate={{
                    backgroundPosition: ["0px 0px", "40px 40px"]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 30,
                    ease: "linear"
                }}
            />

            {/* Floating elements */}
            <div className="absolute inset-0">
                {[...Array(10)].map((_, i) => (
                    <SafeMotion.div
                        key={i}
                        className="absolute rounded-full bg-red-600/5"
                        style={{
                            width: `${Math.random() * 200 + 100}px`,
                            height: `${Math.random() * 200 + 100}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, Math.random() * 50 - 25],
                            x: [0, Math.random() * 50 - 25],
                            scale: [1, Math.random() * 0.3 + 0.9],
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: Math.random() * 10 + 10,
                        }}
                    />
                ))}
            </div>

            {/* Subtle vignette effect */}
            <div className="absolute inset-0 opacity-30" style={{
                background: 'radial-gradient(circle, transparent 0%, black 100%)'
            }} />
        </div>
    );
}
