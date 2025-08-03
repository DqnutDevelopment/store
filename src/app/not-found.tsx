"use client";

import Link from "next/link";
import motion from "@/components/util/safe-motion";


export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] relative overflow-hidden">
      {/* Animated background elements */}
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
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-red-600/10"
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

      {/* Content */}
      <motion.div
        className="z-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-600"
          initial={{ opacity: 0 }}
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
        >
          404
        </motion.h1>

        <motion.div
          className="relative mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.h2 className="text-2xl font-bold text-gray-300">
            Page Not Found
          </motion.h2>
          <motion.div
            className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-700 to-red-500"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.8, duration: 0.6 }}
          />
        </motion.div>

        <motion.p
          className="mt-6 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <Link 
            href="/" 
            className="px-6 py-3 bg-gradient-to-r from-red-700 to-red-600 text-white font-medium rounded-md hover:from-red-600 hover:to-red-500 transition-all duration-300"
          >
            Return Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}