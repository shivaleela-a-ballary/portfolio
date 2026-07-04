'use client'

import { motion } from 'framer-motion'
import { GitBranch, Sparkles } from 'lucide-react'

export function GithubStats() {
  const projects = [
    { emoji: '🧠', title: 'AI Hallucination Mitigation', description: 'Improving trustworthy AI responses.' },
    { emoji: '🌍', title: 'MedLingua AI', description: 'Making healthcare multilingual.' },
    { emoji: '⚡', title: 'AI App Compiler', description: 'Building applications directly from prompts.' },
  ]

  const exploring = ['LLMs', 'RAG', 'Computer Vision', 'Quantum Computing']

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="space-y-2">
            <h2 className="text-4xl sm:text-5xl font-space-grotesk font-bold">Building Right Now</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>

          {/* Active Projects */}
          <div className="space-y-4">
            <h3 className="text-lg font-space-grotesk font-semibold text-foreground">Active Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  whileHover={{ translateY: -4 }}
                  className="group p-6 rounded-2xl border border-white/8 bg-card/40 hover:bg-card/60 backdrop-blur-sm transition-all"
                >
                  <div className="text-4xl mb-3">{project.emoji}</div>
                  <h4 className="text-lg font-space-grotesk font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Exploring */}
          <div className="space-y-4">
            <h3 className="text-lg font-space-grotesk font-semibold text-foreground flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Actively Exploring
            </h3>
            <div className="flex flex-wrap gap-3">
              {exploring.map((tech) => (
                <motion.div
                  key={tech}
                  whileHover={{ scale: 1.05, translateY: -2 }}
                  className="px-4 py-2 rounded-full border border-white/8 bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-all"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center pt-4"
          >
            <motion.a
              href="https://github.com/shivaleela-a-ballary"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-space-grotesk font-semibold transition-all"
            >
              <GitBranch className="w-5 h-5" />
              Visit GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
