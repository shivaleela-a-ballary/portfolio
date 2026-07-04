'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    slug: 'ai-hallucination-mitigation',
    title: 'AI Hallucination Mitigation System',
    description: 'LLM reliability platform using RAG, FAISS vector search, and validation pipelines to ensure factual accuracy.',
    emoji: '🧠',
    categories: ['AI', 'Machine Learning'],
  },
  {
    slug: 'medlingua-ai',
    title: 'MedLingua AI',
    description: 'Multilingual healthcare assistant breaking language barriers between patients and doctors with NLP.',
    emoji: '🏥',
    categories: ['AI', 'Web Development'],
  },
  {
    slug: 'ai-app-compiler',
    title: 'AI App Compiler',
    description: 'Convert natural language prompts into complete applications with full architecture and deployment.',
    emoji: '⚙️',
    categories: ['AI', 'Full Stack'],
  },
  {
    slug: 'safecity',
    title: 'SafeCity',
    description: 'Smart women safety platform with emergency SOS, AI guidance, and location-based features.',
    emoji: '🛡️',
    categories: ['Web Development', 'Full Stack'],
  },
  {
    slug: 'sunfix',
    title: 'SunFix',
    description: 'Cloud-based solar infrastructure management with technician allocation and GPS tracking.',
    emoji: '☀️',
    categories: ['Full Stack', 'Web Development'],
  },
  {
    slug: 'quantum-computing',
    title: 'Quantum Computing Experiments',
    description: 'Quantum circuit simulations demonstrating Bell states and quantum computing concepts.',
    emoji: '⚛️',
    categories: ['Research', 'Machine Learning'],
  },
]

const categories = ['All', 'AI', 'Machine Learning', 'Web Development', 'Full Stack', 'Research']

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.categories.includes(activeCategory))

  return (
    <main className="min-h-screen bg-background pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 mb-12"
        >
          <h1 className="text-5xl sm:text-6xl font-space-grotesk font-bold">Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A collection of AI, machine learning, and full-stack projects that showcase my technical abilities and creative problem-solving.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-white/5 border border-white/10 text-foreground hover:border-primary/50'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20"
        >
          {filtered.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
            >
              <Link href={`/projects/${project.slug}`}>
                <motion.div
                  whileHover={{ translateY: -8 }}
                  className="group relative h-full p-8 rounded-3xl border border-white/8 bg-card/40 hover:bg-card/60 backdrop-blur-sm transition-all overflow-hidden"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10 space-y-4">
                    <div className="text-5xl">{project.emoji}</div>
                    <div>
                      <h3 className="text-2xl font-space-grotesk font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.categories.map((cat) => (
                        <span key={cat} className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary">
                          {cat}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-primary font-medium pt-4 group-hover:gap-3 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  )
}
