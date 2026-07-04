'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, GitBranch } from 'lucide-react'
import Link from 'next/link'

export default function AIHallucinationPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link href="/projects" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8">
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 mb-16"
        >
          <div className="text-6xl">🧠</div>
          <div>
            <h1 className="text-5xl sm:text-6xl font-space-grotesk font-bold mb-4">AI Hallucination Mitigation System</h1>
            <p className="text-xl text-muted-foreground">
              Building trustworthy AI systems that reduce hallucinations through advanced RAG techniques and validation pipelines.
            </p>
          </div>
        </motion.div>

        {/* Quick Links */}
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

        {/* Project Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-12 mb-16"
        >
          {/* Problem Statement */}
          <section className="space-y-4">
            <h2 className="text-3xl font-space-grotesk font-bold">Problem Statement</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Large Language Models (LLMs) are incredibly powerful but suffer from a critical flaw: they can generate plausible-sounding but entirely false information, a phenomenon called "hallucination." This is particularly problematic in domains like healthcare, finance, and education where accuracy is paramount.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Existing LLM applications lack built-in mechanisms to verify factual accuracy and maintain source attribution, making them unreliable for production use cases.
            </p>
          </section>

          {/* Solution */}
          <section className="space-y-4">
            <h2 className="text-3xl font-space-grotesk font-bold">Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I developed a Retrieval-Augmented Generation (RAG) system that grounds LLM responses in verified external knowledge sources. The system:
            </p>
            <ul className="space-y-3">
              {[
                'Retrieves relevant documents from FAISS vector database',
                'Passes retrieved context to the LLM for grounded generation',
                'Validates responses against source material',
                'Implements confidence scoring for response quality',
                'Provides transparent source attribution'
              ].map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Tech Stack */}
          <section className="space-y-4">
            <h2 className="text-3xl font-space-grotesk font-bold">Technology Stack</h2>
            <div className="flex flex-wrap gap-3">
              {[
                'Python', 'LangChain', 'RAG', 'FAISS', 'Vector Search',
                'LLMs', 'NLP', 'Machine Learning', 'FastAPI'
              ].map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Key Learnings */}
          <section className="space-y-4">
            <h2 className="text-3xl font-space-grotesk font-bold">Key Learnings</h2>
            <ul className="space-y-3">
              {[
                'RAG is more effective than fine-tuning for maintaining factual accuracy',
                'Vector database performance is critical for real-time retrieval',
                'Confidence scoring helps users understand response reliability',
                'Source attribution builds trust in AI systems',
                'Iterative validation improves response quality significantly'
              ].map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Future Improvements */}
          <section className="space-y-4">
            <h2 className="text-3xl font-space-grotesk font-bold">Future Improvements</h2>
            <ul className="space-y-2">
              {[
                'Multi-source verification with conflicting information handling',
                'Real-time knowledge base updates',
                'Domain-specific fine-tuning for specialized applications',
                'Advanced reasoning over multiple documents',
                'Integration with external fact-checking APIs'
              ].map((point, idx) => (
                <li key={idx} className="text-muted-foreground">• {point}</li>
              ))}
            </ul>
          </section>
        </motion.div>

        {/* Navigation */}
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
          <Link href="/projects/medlingua-ai" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
            Next Project <ArrowLeft className="w-5 h-5 rotate-180" />
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
