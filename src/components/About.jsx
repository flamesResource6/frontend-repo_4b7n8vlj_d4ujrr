import { motion } from 'framer-motion'

export default function About() {
  const highlights = [
    { label: '2+ Tahun pengalaman' },
    { label: '15+ Project selesai' },
    { label: 'Spesialis landing page & web bisnis' },
  ]

  const skills = [
    'Frontend', 'Backend', 'Database', 'Deployment'
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration: .6 }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Tentang <span className="text-[#1A73E8]">Fyndra</span></h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Saya seorang Web Developer yang fokus pada performa, aksesibilitas, dan pengalaman pengguna. Saya membantu bisnis membangun website yang cepat, modern, dan mudah dikembangkan ke depannya.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700 font-medium">{s}</span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity:0, x:20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration: .6 }} className="grid sm:grid-cols-3 gap-4">
            {highlights.map((h) => (
              <div key={h.label} className="rounded-xl border border-gray-200 p-5 bg-white shadow-sm">
                <p className="text-sm text-gray-500">Highlight</p>
                <p className="mt-2 font-semibold text-gray-900">{h.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
