'use client'

import { motion } from 'framer-motion'

export function About() {
  const highlights = [
    { label: 'CGPA', value: '8.5' },
    { label: '500+ LeetCode', value: 'Problems' },
    { label: 'AI Developer', value: 'Focus' },
    { label: 'Hackathon', value: 'Enthusiast' },
    { label: 'Open Source', value: 'Learner' },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="space-y-2">
            <h2 className="text-4xl sm:text-5xl font-space-grotesk font-bold">About Me</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>

          <div className="glass glow-border p-8 sm:p-12 rounded-2xl space-y-6">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              I&apos;m a Computer Science Engineering student passionate about Artificial Intelligence, Machine Learning, and building products that make technology more useful and accessible.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              I enjoy transforming ideas into real applications, participating in hackathons, and continuously learning through hands-on development.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Currently exploring LLMs, AI systems, Full Stack Development, and Quantum Computing.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 pt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ translateY: -4 }}
                  className="glass glow-border p-4 rounded-lg text-center space-y-1"
                >
                  <p className="text-lg sm:text-xl font-space-grotesk font-bold text-primary">{item.value}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
