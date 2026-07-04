'use client'

import { motion } from 'framer-motion'

const journey = [
  {
    year: '2023',
    title: 'Started Computer Science Engineering',
    description: 'Began my engineering journey with fundamentals in CS',
  },
  {
    year: '2024',
    title: 'Strengthened Programming and DSA Skills',
    description: 'Deep dive into algorithms, data structures, and competitive programming',
  },
  {
    year: '2025',
    title: 'Built AI and Full Stack Projects',
    description: 'Created intelligent applications combining ML, AI, and modern web development',
  },
  {
    year: '2025',
    title: 'Participated in National Hackathons',
    description: 'Participated in multiple hackathons across India',
  },
  {
    year: '2026',
    title: 'Developing Intelligent AI Systems',
    description: 'Building advanced AI systems, agents, and LLM applications',
  },
  {
    year: 'Present',
    title: 'Exploring LLMs, RAG, Computer Vision & Quantum',
    description: 'Pushing boundaries in AI research and emerging technologies',
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="space-y-2">
            <h2 className="text-4xl sm:text-5xl font-space-grotesk font-bold">Journey</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative space-y-8 md:space-y-12">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary/0" />

            {/* Timeline items */}
            {journey.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={`relative flex items-start gap-8 md:gap-0 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="relative flex items-center">
                  <motion.div
                    whileInView={{ scale: [0.8, 1.2, 1] }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10"
                  >
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`flex-1 md:w-1/2 ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ translateY: -4 }}
                    className="group p-6 rounded-2xl border border-primary/20 bg-card hover:border-primary/40 hover:shadow-[0_0_20px_rgba(124,58,237,0.15)] transition-all"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <p className="text-sm font-space-grotesk font-bold text-primary">
                        {item.year}
                      </p>
                    </div>
                    <h3 className="text-lg sm:text-xl font-space-grotesk font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
