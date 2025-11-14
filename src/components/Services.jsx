import { motion } from 'framer-motion'
import { Laptop, Layout, Palette, Wrench } from 'lucide-react'

const services = [
  { title: 'Web Development', icon: Laptop, desc: 'Website kencang, SEO-friendly, dan scalable.' },
  { title: 'Landing Page Business', icon: Layout, desc: 'Konversi tinggi dengan desain modern.' },
  { title: 'UI/UX Design Basic', icon: Palette, desc: 'Desain yang clean dan mudah digunakan.' },
  { title: 'Maintenance Website', icon: Wrench, desc: 'Support & perawatan berkala.' },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration: .5 }} className="text-3xl sm:text-4xl font-bold text-gray-900">Services</motion.h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map(({ title, icon: Icon, desc }, idx) => (
            <motion.div key={title} initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:.4, delay: idx*0.05 }} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="rounded-lg bg-[#1A73E8]/10 p-3 text-[#1A73E8] w-fit">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
