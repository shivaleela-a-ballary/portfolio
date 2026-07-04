'use client'

import { motion } from 'framer-motion'

const skillsData = {
  'Programming Languages': ['Python', 'C++', 'Java', 'JavaScript', 'HTML', 'CSS', 'SQL'],
  'AI & Machine Learning': ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'LLMs', 'RAG', 'Prompt Engineering'],
  'Frameworks & Libraries': ['React', 'Next.js', 'Node.js', 'Express', 'TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'OpenCV', 'Three.js'],
  'Tools & Platforms': ['Git', 'GitHub', 'Docker', 'Azure DevOps', 'GitHub Actions', 'Firebase', 'Figma', 'VS Code'],
}

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="space-y-2">
            <h2 className="text-4xl sm:text-5xl font-space-grotesk font-bold">Skills & Expertise</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skillsData).map((category, idx) => (
              <motion.div
                key={category[0]}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group relative rounded-2xl p-8 border border-primary/20 bg-card hover:border-primary/40 transition-all overflow-hidden"
              >
                {/* Glow background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 space-y-5">
                  <h3 className="text-xl font-space-grotesk font-bold text-foreground">
                    {category[0]}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category[1].map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.08, translateY: -3 }}
                        className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium hover:bg-primary/20 hover:border-primary/40 transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
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
