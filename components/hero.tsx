'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, GitBranch, Users, Mail } from 'lucide-react'

const roles = [
  'AI Engineer',
  'Machine Learning Enthusiast',
  'Hackathon Builder',
  'Open Source Learner',
]

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)
    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, roleIndex])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <section id="home" className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
        >
          {/* Left Content */}
          <div className="space-y-10">
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl sm:text-7xl font-space-grotesk font-bold leading-tight">
                <span className="block text-foreground">Shivaleela</span>
                <span className="block text-foreground">Ballary</span>
              </h1>
              <div className="h-12 flex items-center">
                <p className="text-2xl sm:text-3xl font-space-grotesk font-bold text-primary">
                  {displayedText}
                  <motion.span animate={{ opacity: [0, 1] }} transition={{ duration: 0.5, repeat: Infinity }}>
                    |
                  </motion.span>
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Turning ambitious ideas into intelligent software.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-space-grotesk font-semibold transition-all flex items-center justify-center gap-2 w-fit"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-3 pt-6">
              <motion.a
                href="https://github.com/shivaleela-a-ballary"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 rounded-lg border border-primary/20 text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all"
              >
                <GitBranch className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/shivaleela-ballary-b8b3b6325"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 rounded-lg border border-primary/20 text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all"
              >
                <Users className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:bsleela8@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 rounded-lg border border-primary/20 text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Content - Animated Neural Network */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex relative h-96 items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 1, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full h-full rounded-3xl border border-primary/20 bg-primary/5 overflow-hidden flex items-center justify-center"
            >
              <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#7C3AED', stopOpacity: 0.5 }} />
                    <stop offset="100%" style={{ stopColor: '#8B5CF6', stopOpacity: 0.2 }} />
                  </linearGradient>
                </defs>
                <circle cx="200" cy="100" r="8" fill="#7C3AED" opacity="0.8" />
                <circle cx="100" cy="200" r="8" fill="#8B5CF6" opacity="0.8" />
                <circle cx="300" cy="200" r="8" fill="#8B5CF6" opacity="0.8" />
                <circle cx="200" cy="300" r="8" fill="#7C3AED" opacity="0.8" />
                <line x1="200" y1="100" x2="100" y2="200" stroke="url(#grad1)" strokeWidth="1" opacity="0.5" />
                <line x1="200" y1="100" x2="300" y2="200" stroke="url(#grad1)" strokeWidth="1" opacity="0.5" />
                <line x1="100" y1="200" x2="200" y2="300" stroke="url(#grad1)" strokeWidth="1" opacity="0.5" />
                <line x1="300" y1="200" x2="200" y2="300" stroke="url(#grad1)" strokeWidth="1" opacity="0.5" />
                <circle cx="150" cy="150" r="6" fill="#A78BFA" opacity="0.6" />
                <circle cx="250" cy="150" r="6" fill="#A78BFA" opacity="0.6" />
                <circle cx="200" cy="200" r="6" fill="#C4B5FD" opacity="0.6" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
