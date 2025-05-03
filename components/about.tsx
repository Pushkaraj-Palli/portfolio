"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-12 md:grid-cols-2"
        >
          <motion.div 
            variants={itemVariants} 
            className="relative h-[500px] overflow-hidden rounded-xl bg-gray-900/30 flex items-center justify-center border border-purple-500/30 shadow-lg shadow-purple-500/20"
          >
            <Image 
              src="/programming.gif" 
              alt="Programming Animation" 
              fill 
              className="object-contain" 
              priority 
            />
          </motion.div>

          <div className="flex flex-col justify-center">
            <motion.h2 variants={itemVariants} className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                About Me
              </span>
            </motion.h2>

            <motion.p variants={itemVariants} className="mb-4 text-lg text-gray-300 text-justify">
            I'm Pushkaraj Palli, a dedicated MERN stack developer with a passion for building modern, responsive, and scalable web applications. Proficient in MongoDB, Express.js, React.js, and Node.js, I focus on crafting full-stack solutions that offer seamless user experiences and efficient backend performance. My approach combines clean code practices with a keen eye for design, ensuring that functionality and aesthetics go hand in hand.
            </motion.p>

            <motion.p variants={itemVariants} className="mb-6 text-lg text-gray-300 text-justify">
            Beyond technical skills, I'm driven by curiosity and a commitment to continuous learning. I enjoy exploring emerging web technologies, solving real-world problems through code, and collaborating with cross-functional teams. Whether it's developing interactive user interfaces or optimizing complex systems, I strive to create impactful digital solutions that bridge creativity and technology.


            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <span className="rounded-full bg-purple-900/30 px-4 py-2 text-sm font-medium text-purple-300">
                Next.js
              </span>
              <span className="rounded-full bg-purple-900/30 px-4 py-2 text-sm font-medium text-purple-300">React.js</span>
              <span className="rounded-full bg-purple-900/30 px-4 py-2 text-sm font-medium text-purple-300">
                Express.js
              </span>
              <span className="rounded-full bg-purple-900/30 px-4 py-2 text-sm font-medium text-purple-300">
                  MongoDB
              </span>
              <span className="rounded-full bg-purple-900/30 px-4 py-2 text-sm font-medium text-purple-300">
                TypeScript
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
