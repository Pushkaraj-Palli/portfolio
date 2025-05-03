"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import Spline from "@splinetool/react-spline"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const splineRef = useRef(null)

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 3D Background with Spline */}
      <div className="absolute inset-0 z-0">
        <Spline
          ref={splineRef}
          scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
          className="h-full w-full"
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.h1
            className="mb-6 text-5xl font-bold leading-tight tracking-tighter md:text-7xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Pushkaraj Palli</span>
            <br />
            Mern-Stack Developer
          </motion.h1>

          <motion.p
            className="mb-8 text-xl text-gray-300 md:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            I develop high-performance web applications that seamlessly integrate design, functionality, and modern technology.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg hover:from-purple-700 hover:to-pink-700"
            >
              View My Work
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <ArrowDown className="h-8 w-8 text-gray-400" />
      </motion.div>
    </section>
  )
}
