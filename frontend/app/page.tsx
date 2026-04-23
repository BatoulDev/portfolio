'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative min-h-[90vh] flex items-center px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="soft-blob -top-20 -left-40" />
        <div className="soft-blob -bottom-40 -right-40" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="label-uppercase mb-4">Welcome to my world</p>
            <h1 className="font-display text-display-lg font-semibold text-on-surface mb-6">
              Full-Stack <br />
              <span className="text-gradient">Developer</span>
            </h1>
            <p className="text-body-lg text-on-surface/70 mb-8 max-w-lg">
              I build modern, scalable web applications with a focus on clean design and performance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/projects" className="btn-primary">
                View Projects
              </Link>
              <Link href="/contact" className="btn-tertiary">
                Get in Touch
              </Link>
            </div>
          </motion.div>

<motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-[270px] md:max-w-[340px] aspect-[3/4] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-container/30 to-primary-fixed-dim/20 rounded-[22px]" />
              <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-surface-container-lowest shadow-sm">
                <Image
                  src="/batoulpic.png"
                  alt="Batoul Abedelrahman"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-section-lg bg-surface-container-low px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="label-uppercase mb-4">What I do</p>
            <h2 className="font-display text-display-md font-semibold text-on-surface">
              Building Digital <span className="text-gradient">Masterpieces</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Full-Stack Development',
                description: 'End-to-end solutions using modern frameworks like Next.js, React, and Node.js.',
                icon: '💻'
              },
              {
                title: 'Workflow Automation',
                description: 'I build automation workflows using modern tools to streamline tasks and improve efficiency.',
                icon: '⚙️'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-on-surface/70">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-lg px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="label-uppercase mb-4">About me</p>
              <h2 className="font-display text-display-md font-semibold text-on-surface mb-6">
                Crafting with <span className="text-gradient">Passion</span> and <span className="text-gradient">Purpose</span>
              </h2>
              <p className="text-body-lg text-on-surface/70 mb-6">
                I am a full-stack developer focused on building real-world applications and continuously improving my skills. I enjoy creating clean, efficient solutions and exploring automation and modern web technologies.
              </p>
              <Link href="/about" className="btn-tertiary">
                Learn More
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: 'Hands-On Experience', value: 'Building real-world applications and gaining practical development experience.' },
                { label: 'Fast Learner', value: 'Quickly adapting to new technologies and continuously improving skills.' },
                { label: 'Problem-Solving Mindset', value: 'Approaching challenges with logical thinking and efficient solutions.' },
                { label: 'Clean and Scalable Code', value: 'Writing maintainable, structured, and scalable code for modern applications.' }
              ].map((stat, index) => (
                <div key={index} className="bg-surface-container-lowest rounded-xl p-6 text-center ghost-border">
                  <p className="font-display text-lg font-bold text-primary mb-2">{stat.label}</p>
                  <p className="text-sm text-on-surface/60">{stat.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-section-lg bg-surface-container-low px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="label-uppercase mb-4">Let us work together</p>
            <h2 className="font-display text-display-md font-semibold text-on-surface mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-body-lg text-on-surface/70 mb-8 max-w-2xl mx-auto">
              I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Link href="/contact" className="btn-primary">
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}