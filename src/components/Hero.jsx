import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/50 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#1A73E8]/10 px-3 py-1 text-[#1A73E8] text-xs font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-[#1A73E8]" />
            Available for freelance
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
            Hi, I’m Fyndra — <span className="text-[#1A73E8]">Web Developer</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            Membangun website cepat, modern, dan siap scale.
          </p>

          <AnimatedWords words={["Frontend", "Backend", "Full-Stack", "Freelancer"]} />

          <div className="mt-8 flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-[#1A73E8] px-5 py-3 text-white font-semibold shadow-sm hover:bg-[#1666cc] transition-colors">
              Hire Me
            </a>
            <a href="#" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 text-gray-800 font-semibold hover:bg-gray-50 transition-colors">
              Download CV
            </a>
          </div>
        </motion.div>

        <div className="hidden lg:block" />
      </div>
    </section>
  )
}

function AnimatedWords({ words }) {
  return (
    <div className="mt-6 h-8 overflow-hidden">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -32, -64, -96, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        className="flex flex-col text-[#1A73E8] text-lg font-semibold"
      >
        {words.concat(words[0]).map((w, i) => (
          <span key={i}>{w}</span>
        ))}
      </motion.div>
    </div>
  )
}
