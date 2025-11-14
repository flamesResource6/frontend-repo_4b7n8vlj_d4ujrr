import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Landing Page UMKM',
    tools: ['Next.js', 'Tailwind', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1510924014959-7e1849088bfe?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMYW5kaW5nJTIwUGFnZSUyMFVNS018ZW58MHwwfHx8MTc2MzEyNDA0N3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    demo: '#',
    code: '#',
  },
  {
    title: 'Dashboard Admin React',
    tools: ['React', 'Chart.js', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    code: '#',
  },
  {
    title: 'Website Portfolio Modern',
    tools: ['Next.js', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    code: '#',
  },
  {
    title: 'Toko Online Sederhana',
    tools: ['React', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    code: '#',
  },
  {
    title: 'Sistem Reservasi',
    tools: ['Node.js', 'Express', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    code: '#',
  },
  {
    title: 'Blog App dengan Next.js',
    tools: ['Next.js', 'MDX'],
    image: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    code: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration: .5 }} className="text-3xl sm:text-4xl font-bold text-gray-900">Projects</motion.h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div key={p.title} initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:.4, delay: idx*0.04 }} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
              <div className="aspect-video overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.tools.join(' • ')}</p>
                <div className="mt-4 flex gap-3">
                  <a href={p.demo} className="inline-flex items-center justify-center rounded-md bg-[#1A73E8] px-4 py-2 text-white text-sm font-semibold hover:bg-[#1666cc]">Live Demo</a>
                  <a href={p.code} className="inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-gray-800 text-sm font-semibold hover:bg-gray-50">Source Code</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
