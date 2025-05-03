"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Layers, Palette, Smartphone, Cpu, Database } from "lucide-react"

const skills = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "Frontend Development",
    description: "Building responsive and performant web applications with React, Next.js, and modern JavaScript.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Layers className="h-8 w-8" />,
    title: "3D & Interactive",
    description: "Creating immersive 3D experiences with Three.js, WebGL, and Spline for next-level user engagement.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "UI/UX Design",
    description:
      "Designing intuitive interfaces with Figma and implementing them with precision and attention to detail.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Responsive Design",
    description: "Ensuring applications work flawlessly across all devices with mobile-first approach.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "Performance Optimization",
    description: "Optimizing web applications for speed and efficiency with modern techniques and tools.",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Backend Integration",
    description: "Connecting frontend applications to backend services and APIs for full-stack solutions.",
    color: "from-red-500 to-orange-500",
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">My technical toolkit and areas of specialization</p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition-all hover:border-gray-700 hover:bg-gray-800/50"
            >
              <div className={`mb-4 inline-flex rounded-lg bg-gradient-to-r ${skill.color} p-3`}>{skill.icon}</div>
              <h3 className="mb-2 text-xl font-bold">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
