import React, { useState } from 'react'

const FinalCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setStatus('success')
      setFormData({ name: '', email: '', company: '', message: '' })
    } catch (error) {
      console.error('Error sending message:', error)
      setStatus('error')
      setErrorMessage(error.message || 'Something went wrong. Please try again.')
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const resetForm = () => {
    setStatus('idle')
    setErrorMessage('')
  }

  // Success Animation Component
  const SuccessMessage = () => (
    <div className="bg-slate/50 p-8 border border-primary-blue/20 flex flex-col items-center justify-center min-h-[480px] relative overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-blue/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-success-green/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      {/* Success icon with animation */}
      <div className="relative z-10 mb-6">
        <div className="w-24 h-24 bg-gradient-to-br from-success-green to-emerald-500 rounded-full flex items-center justify-center animate-bounce-in shadow-lg shadow-success-green/30">
          <svg 
            className="w-12 h-12 text-white animate-check-draw" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={3} 
              d="M5 13l4 4L19 7"
              className="check-path"
            />
          </svg>
        </div>
        
        {/* Sparkle effects */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-sparkle"></div>
        <div className="absolute -bottom-1 -left-3 w-3 h-3 bg-primary-blue rounded-full animate-sparkle" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute top-1/2 -right-4 w-2 h-2 bg-success-green rounded-full animate-sparkle" style={{ animationDelay: '0.6s' }}></div>
      </div>
      
      {/* Success text */}
      <div className="relative z-10 text-center animate-fade-in-up">
        <h3 className="text-2xl font-syne font-bold text-white mb-3">
          Message Sent Successfully!
        </h3>
        <div className="space-y-2 mb-6">
          <p className="text-steel text-lg">
            Thanks for reaching out!
          </p>
          <div className="flex items-center justify-center gap-2 text-primary-blue">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-semibold">We'll respond within 24 hours</span>
          </div>
        </div>
        
        {/* Animated progress bar showing 24h commitment */}
        <div className="w-full max-w-xs mx-auto mb-6">
          <div className="h-2 bg-deep-navy/50 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary-blue to-success-green rounded-full animate-progress-fill"></div>
          </div>
          <p className="text-xs text-steel mt-2">Your inquiry is now in our queue</p>
        </div>
        
        <button
          onClick={resetForm}
          className="bg-primary-blue/10 text-primary-blue px-6 py-3 font-semibold border border-primary-blue/30 hover:bg-primary-blue hover:text-white transition-all duration-300"
        >
          Send Another Message
        </button>
      </div>
    </div>
  )

  // Error Message Component
  const ErrorMessage = () => (
    <div className="bg-slate/50 p-8 border border-red-500/30 flex flex-col items-center justify-center min-h-[480px]">
      <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-6 border-2 border-red-500/30">
        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <h3 className="text-xl font-syne font-bold text-white mb-2">Oops! Something went wrong</h3>
      <p className="text-steel text-center mb-6 max-w-sm">
        {errorMessage || 'We couldn\'t send your message. Please try again or email us directly.'}
      </p>
      <div className="flex gap-4">
        <button
          onClick={resetForm}
          className="bg-primary-blue text-white px-6 py-3 font-semibold hover:bg-blue-700 transition-all duration-300"
        >
          Try Again
        </button>
        <a
          href="mailto:hello@buildstack.dev"
          className="border border-steel/30 text-steel px-6 py-3 font-semibold hover:border-primary-blue hover:text-primary-blue transition-all duration-300"
        >
          Email Us Directly
        </a>
      </div>
    </div>
  )

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-deep-navy text-white relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-overlay opacity-20"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - CTA Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-bold mb-6">
              Ready to Build Your{' '}
              <span className="text-primary-blue">SaaS Product?</span>
            </h2>
            <p className="text-lg text-steel mb-8 leading-relaxed">
              Let's discuss your project. We'll analyze your requirements, provide technical recommendations, and create a roadmap to launch.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-blue/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-syne font-bold text-white mb-1">Email Us</h3>
                  <a href="mailto:hello@buildstack.dev" className="text-steel hover:text-primary-blue transition-colors">
                    hello@buildstack.dev
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-blue/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-syne font-bold text-white mb-1">Schedule a Call</h3>
                  <p className="text-steel">
                    Free 30-minute consultation
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-blue/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-syne font-bold text-white mb-1">Response Time</h3>
                  <p className="text-steel">
                    Within 24 hours on business days
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form or Success/Error State */}
          {status === 'success' ? (
            <SuccessMessage />
          ) : status === 'error' ? (
            <ErrorMessage />
          ) : (
            <div className="bg-slate/50 p-8 border border-primary-blue/20">
              <h3 className="text-2xl font-syne font-bold mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 bg-deep-navy border border-steel/30 text-white focus:border-primary-blue focus:outline-none transition-colors disabled:opacity-50"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 bg-deep-navy border border-steel/30 text-white focus:border-primary-blue focus:outline-none transition-colors disabled:opacity-50"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 bg-deep-navy border border-steel/30 text-white focus:border-primary-blue focus:outline-none transition-colors disabled:opacity-50"
                    placeholder="Your Company Ltd"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    rows={4}
                    className="w-full px-4 py-3 bg-deep-navy border border-steel/30 text-white focus:border-primary-blue focus:outline-none transition-colors resize-none disabled:opacity-50"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-primary-blue text-white px-6 py-4 font-semibold transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-primary-blue/30 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes progress-fill {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        
        @keyframes check-draw {
          0% {
            stroke-dashoffset: 50;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out 0.3s forwards;
          opacity: 0;
        }
        
        .animate-sparkle {
          animation: sparkle 1.5s ease-in-out infinite;
        }
        
        .animate-progress-fill {
          animation: progress-fill 1.5s ease-out 0.5s forwards;
          width: 0%;
        }
        
        .check-path {
          stroke-dasharray: 50;
          stroke-dashoffset: 50;
          animation: check-draw 0.5s ease-out 0.3s forwards;
        }
      `}</style>
    </section>
  )
}

export default FinalCTA
