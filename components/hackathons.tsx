'use client'

import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

const hackathons = [
  {
    name: 'Wequity Hackathon',
    icon: '💡',
    description: 'Innovation for equality',
  },
  {
    name: 'India Runs',
    icon: '🏃',
    description: 'Health and fitness challenge',
  },
  {
    name: 'Bharatiya Antariksha Hackathon',
    icon: '🛰️',
    description: 'Space technology innovation',
  },
  {
    name: 'KIT Pioneer 2026',
    icon: '🚀',
    description: 'Engineering excellence',
  },
  {
    name: 'MakeFor Belagavi',
    icon: '🏆',
    description: 'Organized by Titan & VTU',
  },
]

export function Hackathons() {
  return (
    <section id="hackathons" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="space-y-2">
            <h2 className="text-4xl sm:text-5xl font-space-grotesk font-bold">Innovation Journey</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hackathons.map((hackathon, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                whileHover={{ translateY: -8, scale: 1.02 }}
                className="group relative rounded-2xl p-6 border border-primary/20 bg-card hover:border-primary/40 hover:shadow-[0_0_20px_rgba(124,58,237,0.25)] transition-all overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 space-y-4">
                  <div className="flex items-start justify-between">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: idx * 0.2 }}
                      className="text-4xl"
                    >
                      {hackathon.icon}
                    </motion.div>
                    <Zap className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <h3 className="text-lg font-space-grotesk font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {hackathon.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {hackathon.description}
                    </p>
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
