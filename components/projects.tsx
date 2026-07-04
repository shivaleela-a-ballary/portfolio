'use client'

import { motion } from 'framer-motion'
import { ExternalLink, GitBranch, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    slug: 'ai-hallucination-mitigation',
    title: 'AI Hallucination Mitigation System',
    description: 'LLM reliability platform using RAG, FAISS vector search, and validation pipelines to ensure factual accuracy and reduce hallucinations.',
    tech: ['Python', 'RAG', 'FAISS', 'LLMs', 'Machine Learning'],
    github: 'https://github.com/shivaleela-a-ballary',
    image: '🧠',
  },
  {
    slug: 'medlingua-ai',
    title: 'MedLingua AI',
    description: 'Multilingual healthcare assistant breaking language barriers between patients and doctors with NLP and LLM-powered translation.',
    tech: ['Python', 'React', 'Next.js', 'LLMs', 'NLP'],
    github: 'https://github.com/shivaleela-a-ballary',
    image: '🏥',
  },
  {
    slug: 'ai-app-compiler',
    title: 'AI App Compiler',
    description: 'Convert natural language prompts into complete applications with full frontend, backend, APIs, and deployment-ready architecture.',
    tech: ['Python', 'React', 'Node.js', 'LLMs', 'Prompt Engineering'],
    github: 'https://github.com/shivaleela-a-ballary',
    image: '⚙️',
  },
  {
    slug: 'safecity',
    title: 'SafeCity',
    description: 'Smart women safety platform with emergency SOS, AI-powered guidance, location sharing, and community safety resources.',
    tech: ['React', 'Firebase', 'Node.js', 'Maps API', 'AI'],
    github: 'https://github.com/shivaleela-a-ballary',
    image: '🛡️',
  },
  {
    slug: 'sunfix',
    title: 'SunFix',
    description: 'Cloud-based solar infrastructure management with technician allocation, GPS tracking, and complaint resolution workflows.',
    tech: ['Node.js', 'Express', 'Firebase', 'React'],
    github: 'https://github.com/shivaleela-a-ballary',
    image: '☀️',
  },
  {
    slug: 'quantum-computing',
    title: 'Quantum Computing Experiments',
    description: 'Quantum circuit simulations demonstrating Bell states, quantum gates, superposition, and quantum computing educational concepts.',
    tech: ['Python', 'Qiskit', 'Quantum'],
    github: 'https://github.com/shivaleela-a-ballary',
    image: '⚛️',
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="space-y-2">
            <h2 className="text-4xl sm:text-5xl font-space-grotesk font-bold">Selected Projects</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative h-full rounded-3xl overflow-hidden border border-primary/20 bg-card hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.25)] flex flex-col"
                >
                  {/* Image Section */}
                  <div className="relative h-48 sm:h-56 bg-gradient-to-br from-primary/20 via-background to-secondary/20 overflow-hidden flex items-center justify-center border-b border-primary/10">
                    <motion.div
                      animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      className="text-7xl opacity-60"
                    >
                      {project.image}
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-6 sm:p-8 space-y-4 flex flex-col">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-space-grotesk font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 py-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 pt-4 mt-auto">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-all"
                      >
                        <GitBranch className="w-4 h-4" />
                        GitHub
                      </motion.a>
                      <motion.div
                        asChild
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          href={`/projects/${project.slug}`}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary/20 hover:bg-primary/30 text-primary text-sm font-medium transition-all"
                        >
                          <ArrowRight className="w-4 h-4" />
                          Read More
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
