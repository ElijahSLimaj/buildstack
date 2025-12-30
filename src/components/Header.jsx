import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Pricing', href: '#pricing' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="28" width="24" height="3" fill="#0066FF" opacity="0.4"/>
              <rect x="6" y="22" width="28" height="3" fill="#0066FF" opacity="0.6"/>
              <rect x="4" y="16" width="32" height="3" fill="#0066FF" opacity="0.8"/>
              <rect x="2" y="10" width="36" height="3" fill="#0066FF"/>
              <rect x="18.5" y="13" width="3" height="18" fill="#0066FF" opacity="0.3"/>
            </svg>
            <div className="flex items-baseline">
              <span className="font-mono text-xl font-semibold text-primary-blue tracking-tight">BUILD</span>
              <span className="font-mono text-xl font-semibold text-deep-navy tracking-tight">STACK</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-steel hover:text-primary-blue transition-colors duration-300 font-medium text-sm"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-primary-blue text-white px-6 py-2.5 font-semibold text-sm transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-primary-blue/30"
            >
              Start Your Project
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-deep-navy"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-steel hover:text-primary-blue transition-colors duration-300 font-medium py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-primary-blue text-white px-6 py-3 font-semibold text-center transition-all duration-300 hover:bg-blue-700"
              >
                Start Your Project
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
