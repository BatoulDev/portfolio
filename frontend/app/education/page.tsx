'use client'

import { motion } from 'framer-motion'

const education = [
  {
    title: "Master's in Information Systems",
    university: 'Lebanese University',
    description: 'Focused on advanced systems design, CI/CD practices, scalable architectures, and modern software development workflows.',
    status: 'Present'
  },
  {
    title: "Bachelor's in Information Technology",
    university: 'Lebanese University',
    description: 'Built a strong foundation in programming, system design, and problem-solving.',
    status: 'Completed'
  }
]

export default function Education() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-section-lg px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="label-uppercase mb-4">Background</p>
            <h1 className="font-display text-display-md font-semibold text-on-surface mb-6">
              Education
            </h1>
            <p className="text-body-lg text-on-surface/70 max-w-2xl mx-auto">
              Academic journey and continuous learning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={edu.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    edu.status === 'Present' 
                      ? 'bg-primary text-white' 
                      : 'bg-surface-container-low text-on-surface/70'
                  }`}>
                    {edu.status}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-on-surface mb-2">
                  {edu.title}
                </h3>
                <p className="text-primary font-medium mb-3">
                  {edu.university}
                </p>
                <p className="text-on-surface/70">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}