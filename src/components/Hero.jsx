import React from 'react'

const Hero = () => {
  const stats = [
    { value: '72hrs', label: 'To First Commit' },
    { value: '$144K+', label: 'Saved Per Engineer/Year' },
    { value: '0', label: 'Hiring Risk' },
  ]

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-ice-blue to-white grid-overlay">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white border border-primary-blue/20 mb-8 animate-fadeIn">
            <span className="text-sm font-mono font-semibold text-primary-blue tracking-wide">
              TRUSTED BY 50+ FUNDED STARTUPS
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-syne font-extrabold text-deep-navy mb-6 leading-tight animate-slideUp">
            Stop Bleeding $200K/Year{' '}
            <span className="text-primary-blue">On Engineers Who Quit.</span>
          </h1>

          {/* Subhead */}
          <p className="text-lg sm:text-xl lg:text-2xl text-steel leading-relaxed mb-10 max-w-3xl mx-auto animate-slideUp" style={{ animationDelay: '0.1s' }}>
            Get a battle-tested senior engineer shipping production code in 72 hours. No 6-month hiring cycles. No equity negotiations. No Upwork disasters. <strong className="text-deep-navy">Cancel anytime with zero penalty.</strong>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <a
              href="#pricing"
              className="group px-8 py-4 bg-primary-blue text-white font-semibold text-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:shadow-primary-blue/30 hover:-translate-y-1"
              aria-label="View pricing plans"
            >
              <span className="flex items-center justify-center gap-2">
                Get Your Engineer — From $4K/mo
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-primary-blue border-2 border-primary-blue font-semibold text-lg transition-all duration-300 hover:bg-primary-blue hover:text-white hover:shadow-xl hover:shadow-primary-blue/20 hover:-translate-y-1"
              aria-label="Book a call"
            >
              Book a Free Strategy Call
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 border border-primary-blue/10 hover:border-primary-blue/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-blue/10 animate-slideUp"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="text-4xl font-syne font-bold text-primary-blue mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-steel uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
