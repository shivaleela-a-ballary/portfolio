'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, GitBranch } from 'lucide-react'
import Link from 'next/link'

export default function AIAppCompilerPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link href="/projects" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8">
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 mb-16"
        >
          <div className="text-6xl">⚙️</div>
          <div>
            <h1 className="text-5xl sm:text-6xl font-space-grotesk font-bold mb-4">AI App Compiler</h1>
            <p className="text-xl text-muted-foreground">
              Transform natural language prompts into complete, deployable applications with full-stack architecture.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-wrap gap-4 mb-16"
        >
          <a href="https://github.com/shivaleela-a-ballary" target="_blank" rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary font-medium transition-all">
            <GitBranch className="w-5 h-5" />
            View Code
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-12 mb-16"
        >
          <section className="space-y-4">
            <h2 className="text-3xl font-space-grotesk font-bold">Problem Statement</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Software development is time-consuming and requires significant technical expertise. Developers spend countless hours writing boilerplate code, setting up project structures, configuring databases, and deploying applications. Non-technical users cannot build custom applications without hiring developers.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The AI App Compiler bridges this gap by enabling anyone to describe their application requirements in plain English and receive a fully functional, deployment-ready application.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-space-grotesk font-bold">Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The AI App Compiler uses advanced LLMs with prompt engineering to:
            </p>
            <ul className="space-y-3">
              {[
                'Parse natural language specifications into structured requirements',
                'Generate optimized frontend code with modern UI frameworks',
                'Create backend APIs with proper data models and validation',
                'Set up databases with appropriate schema design',
                'Configure authentication and authorization systems',
                'Generate Docker configurations for containerization',
                'Provide deployment instructions for multiple platforms',
                'Include comprehensive documentation and README files'
              ].map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-space-grotesk font-bold">Technology Stack</h2>
            <div className="flex flex-wrap gap-3">
              {[
                'Python', 'LLMs', 'Prompt Engineering', 'React', 'Next.js', 'Node.js',
                'Express', 'PostgreSQL', 'Docker', 'Git'
              ].map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-space-grotesk font-bold">Key Learnings</h2>
            <ul className="space-y-3">
              {[
                'Prompt engineering is crucial for generating quality code',
                'Code generation requires careful handling of edge cases',
                'Developer experience is as important as functionality',
                'Iterative refinement improves output quality significantly',
                'Testing and validation are essential for reliability'
              ].map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-space-grotesk font-bold">Impact</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This project demonstrates the transformative potential of AI in software development, democratizing app creation and accelerating the development process from weeks to minutes.
            </p>
          </section>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pt-12 border-t border-white/10 flex justify-between items-center"
        >
          <Link href="/projects" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
            <ArrowLeft className="w-5 h-5" />
            All Projects
          </Link>
          <Link href="/projects/safecity" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
            Next Project <ArrowLeft className="w-5 h-5 rotate-180" />
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
