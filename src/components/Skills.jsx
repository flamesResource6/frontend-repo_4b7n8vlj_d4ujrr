import { motion } from 'framer-motion'
import { Code2, Cpu, Database, Server, Github, GitBranch } from 'lucide-react'

const skills = [
  { name: 'HTML', icon: Code2 },
  { name: 'CSS', icon: Code2 },
  { name: 'JavaScript', icon: Code2 },
  { name: 'React', icon: Cpu },
  { name: 'Next.js', icon: Cpu },
  { name: 'Node.js', icon: Server },
  { name: 'Express', icon: Server },
  { name: 'Firebase / Supabase', icon: Database },
  { name: 'TailwindCSS', icon: Code2 },
  { name: 'Git & GitHub', icon: Github },
  { name: 'API Development', icon: GitBranch },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration: .5 }} className="text-3xl sm:text-4xl font-bold text-gray-900">
          Skills
        </motion.h2>

        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map(({ name, icon: Icon }, idx) => (
            <motion.div key={name} initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:.4, delay: idx * 0.03 }} className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-[#1A73E8]/10 p-2 text-[#1A73E8]">
                  <Icon size={20} />
                </div>
                <div className="font-semibold text-gray-900">{name}</div>
              </div>
              <div className="mt-3 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#1A73E8] rounded-full" style={{ width: `${70 + (idx%5)*5}%` }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
