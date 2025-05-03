"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ArrowRight, Github, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const projects = [

  {
    id: 1,
    title: "StarBrain AI",
    description:
      "StarBrain AI An intelligent chatbot built with Gemini API and React.js. Designed for seamless interaction and smart responses, StarBrain AI delivers an engaging user experience with cutting-edge conversational AI.",
    image: "https://github.com/user-attachments/assets/94b40481-f317-40db-8b69-7982cd703bbe",
    tags: ["Next.js", "Gemini Api", "Express.js", "Tailwind CSS"],
    github: "https://github.com/Pushkaraj-Palli/StarBrain-AI",
  },

  {
    id: 2,
    title: "CompileHub",
    description:
      "CompileHub Your All-in-One Online Compiler! Write, compile, and run C, C++, Java, Python, and JavaScript effortlessly! Built with React.js, Node.js, Express.js, and MongoDB, CompileHub offers blazing-fast execution, real-time error handling, and a sleek, intuitive UI. Code. Compile. Run. Repeat.",
    image: "https://github.com/user-attachments/assets/00ed004b-1c29-4983-b776-f12ad36165f4",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Pushkaraj-Palli/Compile-Hub",
  },

  {
    id: 3,
    title: "BrushCraft",
    description:
      "BrushCraft: Your digital canvas powered by React! Unleash creativity with vibrant tools, seamless performance, and a world of colors. Sketch, design, and share your masterpieces effortlessly. Create magic with every brushstroke!",
    image: "https://github.com/user-attachments/assets/080a67ff-6ecb-43f3-9db1-b2530a6583f0",
    tags: ["React.js", "Node.js"],
    github: "https://github.com/Pushkaraj-Palli/BrushCraft",
  },
]

export default function Projects() {
  const [activeProject, setActiveProject] = useState(projects[0])
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
    <section id="projects" className="py-24 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16 text-center"
        >
          <motion.h2 variants={itemVariants} className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="mx-auto max-w-2xl text-lg text-gray-300">
            A selection of my recent work, showcasing interactive experiences and digital solutions.
          </motion.p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div variants={itemVariants} className="relative h-[500px] overflow-hidden rounded-xl bg-gray-900/70">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="h-full w-full"
              >
                <Image
                  src={activeProject.image || "/placeholder.svg"}
                  alt={activeProject.title}
                  fill
                  className="object-contain transition-transform duration-500 hover:scale-105 cursor-pointer"
                  onClick={() => window.open(activeProject.image, '_blank')}
                />
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          size="icon" 
                          variant="outline" 
                          className="rounded-full bg-black/50 backdrop-blur-sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(activeProject.image, '_blank');
                          }}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View full image</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          size="icon" 
                          variant="outline" 
                          className="rounded-full bg-black/50 backdrop-blur-sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(activeProject.github, '_blank');
                          }}
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View GitHub repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <div className="flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="mb-4 text-2xl font-bold">{activeProject.title}</h3>
                <p className="mb-6 text-gray-300">{activeProject.description}</p>
                <div className="mb-8 flex flex-wrap gap-2">
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-purple-900/30 px-3 py-1 text-xs font-medium text-purple-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="grid grid-cols-3 gap-3">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className={`cursor-pointer transition-all ${
                    activeProject.id === project.id
                      ? "border-purple-500 bg-purple-900/20"
                      : "bg-gray-900/50 hover:bg-gray-800/50"
                  }`}
                  onClick={() => setActiveProject(project)}
                >
                  <CardContent className="flex items-center justify-center p-4">
                    <span className="text-sm font-medium">{project.id}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button 
              className="mt-8 w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              onClick={() => window.open("https://github.com/Pushkaraj-Palli?tab=repositories", "_blank")}
            >
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
