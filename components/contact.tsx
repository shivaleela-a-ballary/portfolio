'use client'

import { motion } from 'framer-motion'
import { Mail, Users, GitBranch } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="space-y-2">
            <h2 className="text-4xl sm:text-5xl font-space-grotesk font-bold">Let&apos;s Build Something Amazing</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>

          <div className="max-w-2xl">
            {/* Contact Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether it&apos;s an exciting project, hackathon, internship, research opportunity, or simply a conversation about AI and technology—I&apos;d love to connect.
              </p>

              {/* Contact Links */}
              <div className="space-y-3">
                <motion.a
                  href="mailto:bsleela8@gmail.com"
                  whileHover={{ x: 4 }}
                  className="glass glow-border p-4 rounded-lg flex items-center gap-4 group hover:scale-105 transition-transform"
                >
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-semibold">bsleela8@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/shivaleela-ballary-b8b3b6325"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="glass glow-border p-4 rounded-lg flex items-center gap-4 group hover:scale-105 transition-transform"
                >
                  <Users className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="text-foreground font-semibold">shivaleela-ballary</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://github.com/shivaleela-a-ballary"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="glass glow-border p-4 rounded-lg flex items-center gap-4 group hover:scale-105 transition-transform"
                >
                  <GitBranch className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p className="text-foreground font-semibold">shivaleela-a-ballary</p>
                  </div>
                </motion.a>
              </div>
            </motion.div>


          </div>
        </motion.div>
      </div>
    </section>
  )
}
