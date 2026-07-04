'use client'

import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const certifications = [
  'Python',
  'Advanced Machine Learning',
  'Computer Vision',
  'DBMS',
]

export function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="space-y-2">
            <h2 className="text-4xl sm:text-5xl font-space-grotesk font-bold">Certifications</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, translateY: -4 }}
                className="glass glow-border p-6 rounded-2xl flex flex-col items-center gap-3 text-center cursor-default"
              >
                <Award className="w-8 h-8 text-blue-400" />
                <p className="text-foreground font-semibold">
                  {cert}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
