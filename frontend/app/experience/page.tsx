'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Full-Stack Developer Intern',
    company: 'TechTalk',
    date: 'Present',
    description: 'Currently working on real-world applications and gaining hands-on experience in full-stack development.'
  },
  {
    title: 'Full-Stack Developer Intern',
    company: 'XpertBot',
    date: 'Aug 2025 – Sep 2025',
    description: 'Worked on building scalable full-stack features and improving application performance.'
  },
  {
    title: 'Frontend Developer Intern',
    company: 'Click Round Technologies',
    date: 'Apr 2025 – Jun 2025',
    description: 'Built dynamic web features and strengthened my ability to design responsive and user-friendly interfaces.'
  }
]

export default function Experience() {
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
            <p className="label-uppercase mb-4">Journey</p>
            <h1 className="font-display text-display-md font-semibold text-on-surface mb-6">
              Experience
            </h1>
            <p className="text-body-lg text-on-surface/70 max-w-2xl mx-auto">
              Where I have worked and what I have built.
            </p>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-4 md:gap-8 pb-12 last:pb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  {index < experiences.length - 1 && (
                    <div className="w-px h-full bg-primary/20 mt-2" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="card">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="font-display text-lg font-semibold text-on-surface">
                        {exp.title}
                      </h3>
                      <span className="text-sm text-on-surface/50">
                        {exp.date}
                      </span>
                    </div>
                    <p className="text-primary font-medium mb-3">
                      {exp.company}
                    </p>
                    <p className="text-on-surface/70">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}