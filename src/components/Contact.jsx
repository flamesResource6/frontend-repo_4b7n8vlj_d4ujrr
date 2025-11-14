import { motion } from 'framer-motion'
import { Github, Instagram, Linkedin, MessageCircle } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration: .5 }} className="text-3xl sm:text-4xl font-bold text-gray-900">Contact</motion.h2>

        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          <motion.form initial={{ opacity:0, x:-10 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration: .5 }} onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Nama</label>
                <input className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#1A73E8]" placeholder="Nama Anda" />
              </div>
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input type="email" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#1A73E8]" placeholder="email@domain.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-gray-600">Pesan</label>
              <textarea rows={5} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#1A73E8]" placeholder="Tulis pesan..." />
            </div>
            <button className="mt-4 inline-flex items-center justify-center rounded-md bg-[#1A73E8] px-5 py-3 text-white font-semibold hover:bg-[#1666cc]">Kirim</button>
          </motion.form>

          <motion.div initial={{ opacity:0, x:10 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration: .5 }} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900">Socials</h3>
            <div className="mt-4 grid gap-3">
              <a href="#" className="flex items-center gap-3 text-gray-800 hover:text-[#1A73E8]">
                <Instagram size={18} /> Instagram
              </a>
              <a href="#" className="flex items-center gap-3 text-gray-800 hover:text-[#1A73E8]">
                <MessageCircle size={18} /> WhatsApp
              </a>
              <a href="#" className="flex items-center gap-3 text-gray-800 hover:text-[#1A73E8]">
                <Github size={18} /> GitHub
              </a>
              <a href="#" className="flex items-center gap-3 text-gray-800 hover:text-[#1A73E8]">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
