import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Experience } from '@/components/experience'
import { Hackathons } from '@/components/hackathons'
import { Certifications } from '@/components/certifications'
import { GithubStats } from '@/components/github-stats'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { AnimatedBackground } from '@/components/background'

export default function Home() {
  return (
    <main className="bg-background text-foreground relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Hackathons />
        <Certifications />
        <GithubStats />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
