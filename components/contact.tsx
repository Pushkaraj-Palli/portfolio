"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, Github, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
    
    // Clear success message when user starts typing again
    if (submitSuccess) setSubmitSuccess(false)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Construct the Gmail URL with the form data
      const to = "pallipushkaraj@gmail.com";
      const subject = `Portfolio Contact from ${formState.name}`;
      const body = `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`;
      
      // Gmail compose URL format
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open Gmail in a new tab
      window.open(gmailUrl, '_blank');
      
      // Reset form
      setFormState({ name: "", email: "", message: "" });
      
      // Show success message
      setSubmitSuccess(true);
    } catch (error) {
      console.error("Error opening Gmail:", error);
      alert("There was an error opening Gmail. Please try sending an email directly to pallipushkaraj@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  }

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
    <section id="contact" className="py-24 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-12 md:grid-cols-2"
        >
          <div>
            <motion.h2 variants={itemVariants} className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </motion.h2>

            <motion.p variants={itemVariants} className="mb-8 text-lg text-gray-300">
              Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you. Fill out
              the form or reach out through any of the channels below.
            </motion.p>

            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full bg-purple-900/30 p-2">
                  <Mail className="h-5 w-5 text-purple-300" />
                </div>
                <span className="text-gray-300">pallipushkaraj@gmail.com</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="mb-4 text-xl font-bold">Connect With Me</h3>
              <div className="flex gap-4">
                <Button 
                  size="icon" 
                  variant="outline" 
                  className="rounded-full"
                  onClick={() => window.open("https://github.com/Pushkaraj-Palli", "_blank")}
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button 
                  size="icon" 
                  variant="outline" 
                  className="rounded-full"
                  onClick={() => window.open("https://www.linkedin.com/in/pushkaraj-palli-748296269/", "_blank")}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button 
                  size="icon" 
                  variant="outline" 
                  className="rounded-full"
                  onClick={() => window.open("https://x.com/PushkarajPalli?t=Qp5QvpOJWq6EYmSfNucClw&s=08", "_blank")}
                >
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button 
                  size="icon" 
                  variant="outline" 
                  className="rounded-full"
                  onClick={() => window.open("https://www.instagram.com/pushkaraj_palli?igsh=b2w3bzFyMTRodHB3", "_blank")}
                >
                  <Instagram className="h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-gray-900/50 border-gray-800 focus:border-purple-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="bg-gray-900/50 border-gray-800 focus:border-purple-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                  className="min-h-[150px] bg-gray-900/50 border-gray-800 focus:border-purple-500"
                />
              </div>

              {submitSuccess && (
                <div className="text-green-500 text-sm mt-2">
                  Gmail compose window opened in a new tab! Please complete and send your message there.
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                {isSubmitting ? "Opening Gmail..." : "Send Message"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
