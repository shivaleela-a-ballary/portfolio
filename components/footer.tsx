'use client'

import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-primary/10 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-space-grotesk font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Shivaleela Ballary
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                AI Engineer & Software Developer building intelligent solutions. Passionate about innovation, learning, and creating impact.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-space-grotesk font-semibold text-foreground uppercase tracking-wider">
                Quick Links
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Home', href: '#home' },
                  { label: 'About', href: '#about' },
                  { label: 'Skills', href: '#skills' },
                  { label: 'Projects', href: '#projects' },
                  { label: 'Experience', href: '#experience' },
                  { label: 'Contact', href: '#contact' },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0" />

          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              Designed & Developed by <span className="text-primary font-semibold">Shivaleela Ballary</span>
            </p>
            <p>
              Built with curiosity, coffee, and countless commits
            </p>
            <p>© {currentYear}</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
