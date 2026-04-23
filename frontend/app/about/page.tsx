'use client'

import { motion } from 'framer-motion'

export default function About() {
  const skills = {
    Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    'Backend & Databases': ['Node.js', 'REST APIs', 'PostgreSQL', 'MongoDB', 'MySQL'],
    Tools: ['Git', 'GitHub', 'Postman']
  }

  const philosophy = [
    {
      title: 'Clean Architecture',
      description: 'Building software that is not just functional, but maintainable and scalable for the long term.'
    },
    {
      title: 'User-First Design',
      description: 'Every line of code serves the user. If it does not improve the experience, it does not exist.'
    },
    {
      title: 'Continuous Learning',
      description: 'Technology evolves rapidly. I stay current with best practices and emerging technologies.'
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      <section className="py-section-lg px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24"
          >
            <div>
              <p className="label-uppercase mb-4">About Me</p>
              <h1 className="font-display text-display-md font-semibold text-on-surface mb-6">
                About <span className="text-gradient">Me</span>
              </h1>
              <p className="text-body-lg text-on-surface/70 mb-6">
                I am a full-stack developer specializing in building scalable and well-structured web applications. I focus on developing efficient backend systems, designing reliable APIs, and delivering maintainable solutions using modern technologies.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'Backend Systems', desc: 'Building structured and efficient server-side logic and architectures.' },
                { title: 'API Development', desc: 'Designing and integrating reliable and scalable APIs.' },
                { title: 'Problem Solving', desc: 'Analyzing challenges and delivering effective technical solutions.' },
                { title: 'Scalable Solutions', desc: 'Developing applications with performance and scalability in mind.' }
              ].map((item) => (
                <div key={item.title} className="bg-surface-container-lowest rounded-xl p-6 text-center ghost-border">
                  <p className="font-display text-lg font-semibold text-primary mb-2">{item.title}</p>
                  <p className="text-sm text-on-surface/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <p className="label-uppercase mb-4">Skills and Technologies</p>
            <h2 className="font-display text-display-md font-semibold text-on-surface mb-8">
              Tech Stack
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, items]) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="bg-surface-container-lowest rounded-xl p-6 ghost-border"
                >
                  <h3 className="font-display text-lg font-semibold text-primary mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span key={skill} className="bg-surface-container-low rounded-full px-4 py-2 text-sm text-on-surface">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="label-uppercase mb-4">My Philosophy</p>
            <h2 className="font-display text-display-md font-semibold text-on-surface mb-8">
              The Approach
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {philosophy.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="card"
                >
                  <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-on-surface/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}