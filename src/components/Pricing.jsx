import React from 'react'

const Pricing = () => {
  const pricingTiers = [
    {
      name: 'Fixed-Price MVP',
      price: '£35K',
      duration: '8-12 weeks',
      description: 'Launch-ready product for startups validating their market',
      popular: false,
      features: [
        'Full-stack development (React + NestJS)',
        'Cloud deployment on AWS',
        'Admin dashboard & user portal',
        'Authentication & authorization',
        'Database design & optimization',
        'API development & documentation',
        '2 rounds of revisions',
        '30 days post-launch support'
      ]
    },
    {
      name: 'Development Retainer',
      price: '$4K–$8K',
      duration: 'per month',
      description: 'Your own dedicated developer working exclusively on your product',
      popular: true,
      highlight: 'One Dedicated Developer',
      features: [
        'One dedicated senior developer',
        'Full-time focus on your product',
        'Sprint planning & async standups',
        'Code reviews & quality assurance',
        'Bug fixes & feature development',
        'Performance monitoring & optimization',
        'Weekly progress reports',
        'Cancel anytime — no lock-in'
      ]
    },
    {
      name: 'Enterprise Custom',
      price: 'Custom',
      duration: 'based on scope',
      description: 'Tailored solutions for complex enterprise requirements',
      popular: false,
      features: [
        'Custom architecture & scaling strategy',
        'Microservices migration & refactoring',
        'Multi-team coordination',
        'Compliance & security audits',
        'Load testing & capacity planning',
        'White-label solutions',
        'Dedicated account manager',
        'SLA-backed uptime guarantees'
      ]
    }
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-ice-blue to-white grid-overlay">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-bold text-deep-navy mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-steel max-w-2xl mx-auto">
            No hourly ambiguity. Clear, fixed pricing that scales with your needs.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative bg-white border-2 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-blue/10 ${
                tier.popular
                  ? 'border-primary-blue shadow-lg shadow-primary-blue/10'
                  : 'border-slate/10 hover:border-primary-blue'
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-blue text-white px-4 py-1 text-xs font-mono font-semibold">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-syne font-bold text-deep-navy mb-2">
                  {tier.name}
                </h3>
                
                {/* Highlight badge for retainer */}
                {tier.highlight && (
                  <div className="inline-flex items-center gap-2 bg-success-green/10 text-success-green px-3 py-1 text-sm font-semibold mb-3 border border-success-green/20">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                    </svg>
                    {tier.highlight}
                  </div>
                )}
                
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-syne font-bold text-primary-blue">
                    {tier.price}
                  </span>
                  {tier.price !== 'Custom' && (
                    <span className="text-steel text-sm">/ {tier.duration}</span>
                  )}
                </div>
                <p className="text-steel text-sm leading-relaxed">
                  {tier.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className={`flex items-start gap-3 text-sm ${
                      feature.includes('Cancel anytime') 
                        ? 'text-success-green font-semibold' 
                        : 'text-steel'
                    }`}
                  >
                    <svg 
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        feature.includes('Cancel anytime') 
                          ? 'text-success-green' 
                          : 'text-success-green'
                      }`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#contact"
                className={`block w-full text-center py-3 font-semibold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-primary-blue text-white hover:bg-blue-700 hover:shadow-lg'
                    : 'bg-white text-primary-blue border-2 border-primary-blue hover:bg-primary-blue hover:text-white'
                }`}
              >
                {tier.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </a>
              
              {/* Cancel anytime note for retainer */}
              {tier.highlight && (
                <p className="text-center text-xs text-steel mt-3">
                  No long-term contracts required
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-steel text-sm">
            All prices exclude VAT. Custom payment schedules available.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing
