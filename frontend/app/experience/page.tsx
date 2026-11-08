'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'UI/UX Consultant & AI Automation Engineer',
    company: 'Majlisync',
    date: 'Present',
    description: 'Providing UI/UX consulting and identifying automation opportunities within existing business processes. Involved in designing workflows and contributing to AI automation initiatives, coordinating around technical requirements and approved workflows.'
  },
  {
    title: 'Full-Stack Developer Intern',
    company: 'TechTalks · Internship · Remote',
    date: 'May 2026 – Jul 2026',
    projects: [
      {
        name: 'CERES — Nutrition & Meal Planning Platform',
        bullets: [
          'Collaborated within an Agile team on a full-stack nutrition and meal-planning platform.',
          'Worked with Next.js, React, TypeScript, Tailwind CSS, and MongoDB.',
          'Contributed to features involving recipe management, nutrition tracking, and weekly meal planning.'
        ],
        linkLabel: 'View CERES Live Demo',
        linkHref: 'https://mceres.vercel.app/'
      },
      {
        name: 'TeamUp Hub — Student Collaboration Platform',
        bullets: [
          'Led the development effort as Team Leader within a six-member team.',
          'Contributed to frontend functionality, backend integration, and user experience.',
          'Worked on a platform supporting project collaboration, shared workspaces, and team management.'
        ],
        linkLabel: 'View TeamUp Hub',
        linkHref: 'https://teamuphub.vercel.app/'
      }
    ]
  },
  {
    title: 'Full-Stack Developer Intern',
    company: 'XpertBot',
    date: 'Aug 2025 – Sep 2025',
    description: 'Built a full-stack e-commerce website using React and Laravel.'
  },
  {
    title: 'Full-Stack Developer Intern',
    company: 'Click Round Technologies',
    date: 'Apr 2025 – Jun 2025',
    description: 'Worked across the stack: developing frontend interfaces and PHP backend functionality, using AJAX for dynamic data updates, and integrating the frontend with the backend.'
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
                    {exp.description && (
                      <p className="text-on-surface/70">
                        {exp.description}
                      </p>
                    )}
                    {exp.projects && (
                      <div className="space-y-6">
                        {exp.projects.map((project) => (
                          <div key={project.name}>
                            <h4 className="font-semibold text-on-surface mb-2">
                              {project.name}
                            </h4>
                            <ul className="list-disc pl-5 space-y-1 text-on-surface/70">
                              {project.bullets.map((bullet) => (
                                <li key={bullet}>{bullet}</li>
                              ))}
                            </ul>
                            <a
                              href={project.linkHref}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block mt-2 text-primary font-medium hover:underline"
                            >
                              {project.linkLabel} →
                            </a>
                          </div>
                        ))}
                      </div>
                    )}
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