'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-surface-container-low py-10 px-6 md:px-12 lg:px-24 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="font-display text-2xl font-bold text-primary">
              Batoul Abedelrahman
            </Link>
            <p className="text-sm text-on-surface/60 mt-1">
              Full-Stack Developer
            </p>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-on-surface mb-3">Navigation</h4>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-on-surface/70 hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/projects" className="text-sm text-on-surface/70 hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="text-sm text-on-surface/70 hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-on-surface mb-3">Connect</h4>
            <div className="flex flex-col gap-2">
              <a 
                href="https://github.com/BatoulDev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-on-surface/70 hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-on-surface/70 hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:batoul@example.com"
                className="text-sm text-on-surface/70 hover:text-primary transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[rgba(29,28,21,0.1)] flex justify-center">
          <p className="text-xs text-on-surface/50">
            © {new Date().getFullYear()} Batoul Abedelrahman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}