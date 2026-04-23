'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/mreroepe', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json'
        }
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

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
            <p className="label-uppercase mb-4">Get in Touch</p>
            <h1 className="font-display text-display-md font-semibold text-on-surface mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-body-lg text-on-surface/70 max-w-2xl mx-auto">
             Have a project in mind or looking to collaborate? I’d be happy to connect. Fill out the form below and I’ll get back to you as soon as possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="label-uppercase mb-2 block">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input-field"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="label-uppercase mb-2 block">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input-field"
                  placeholder="you@email.com"
                  required
                />
              </div>

              <div>
                <label className="label-uppercase mb-2 block">Message</label>
                <textarea
                  name="message"
                  className="input-field min-h-[200px]"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-primary w-full disabled:opacity-50"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-center">
                  Message sent successfully! I will get back to you soon.
                </div>
              )}

              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-center">
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}