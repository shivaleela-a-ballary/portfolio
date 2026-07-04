'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, GitBranch } from 'lucide-react'
import Link from 'next/link'

export default function MedLinguaPage() {
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
          <div className="text-6xl">🏥</div>
          <div>
            <h1 className="text-5xl sm:text-6xl font-space-grotesk font-bold mb-4">MedLingua AI</h1>
            <p className="text-xl text-muted-foreground">
              Breaking language barriers in healthcare through multilingual AI-powered patient-doctor communication.
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
              Healthcare systems in multilingual regions face a critical challenge: language barriers prevent effective communication between patients and doctors, leading to misdiagnosis, poor treatment outcomes, and increased healthcare costs. Current translation tools lack medical terminology expertise and context understanding.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-space-grotesk font-bold">Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              MedLingua AI is an intelligent healthcare assistant that bridges language gaps through:
            </p>
            <ul className="space-y-3">
              {[
                'Real-time multilingual conversation between patients and doctors',
                'Medical terminology expertise with context-aware translations',
                'Symptom analysis and preliminary assessment',
                'Medical record management across languages',
                'Cultural sensitivity in healthcare communication'
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
                'Python', 'React', 'Next.js', 'LLMs', 'NLP', 'Translation APIs',
                'FastAPI', 'PostgreSQL', 'WebSockets', 'Docker'
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
                'Medical domain knowledge is essential for accurate healthcare AI',
                'User trust is paramount in healthcare applications',
                'Real-time communication requires efficient backend architecture',
                'Cultural and contextual sensitivity improves healthcare outcomes',
                'Privacy and HIPAA compliance are non-negotiable requirements'
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
              This project demonstrates how AI can address real-world healthcare challenges and improve patient outcomes in diverse, multilingual communities.
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
          <Link href="/projects/ai-app-compiler" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
            Next Project <ArrowLeft className="w-5 h-5 rotate-180" />
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
