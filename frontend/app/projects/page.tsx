'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    name: 'AI Market Analysis Bot',
    repo: 'ai-market-analysis-bot',
    description: 'AI-powered bot for analyzing market trends and generating insights using advanced natural language processing and data analysis techniques.',
    technologies: ['JavaScript', 'AI', 'NLP', 'APIs'],
    url: 'https://github.com/BatoulDev/ai-market-analysis-bot'
  },
  {
    name: 'RAG Search System',
    repo: 'rag-search-from-pdf-n8n',
    description: 'Retrieval-Augmented Generation system enabling intelligent search across PDF documents with context-aware responses.',
    technologies: ['JavaScript', 'RAG', 'NLP', 'n8n'],
    url: 'https://github.com/BatoulDev/rag-search-from-pdf-n8n'
  },
  {
    name: 'AI Invoice Automation System',
    repo: 'Professional-Invoice-System',
    description: 'AI-powered invoice automation system that processes invoices from multiple formats (PDF, images, text, voice) via Telegram. Extracts structured data using AI, validates user input, and stores finalized records in Google Sheets for streamlined financial workflows.',
    technologies: ['JavaScript', 'AI', 'NLP', 'Automation'],
    url: 'https://github.com/BatoulDev/Professional-Invoice-System'
  },
  {
    name: 'E-Commerce Platform',
    repo: 'babibeauty',
    description: 'Full-stack e-commerce platform with product browsing, authentication, shopping cart, and order management features.',
    technologies: ['Laravel', 'React', 'MySQL', 'REST APIs'],
    url: 'https://github.com/BatoulDev/babibeauty'
  }
]

export default function Projects() {
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
            <p className="label-uppercase mb-4">My Work</p>
            <h1 className="font-display text-display-md font-semibold text-on-surface mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-body-lg text-on-surface/70 max-w-2xl mx-auto">
              Projects showcasing skills in full-stack development, AI integration, and workflow automation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.a
                key={project.repo}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card group block"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-xl font-semibold text-on-surface group-hover:text-primary transition-colors pr-4">
                    {project.name}
                  </h3>
                  <svg className="w-5 h-5 text-on-surface/40 group-hover:text-primary transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>

                <p className="text-on-surface/70 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-surface-container-low rounded-full px-3 py-1 text-xs text-on-surface"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}