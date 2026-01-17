import React from 'react'

const Pricing = () => {
  const retainerTiers = [
    {
      name: 'Half-Time',
      price: '$4,000',
      duration: '/month',
      hours: '20 hrs/week',
      ideal: 'Early-stage startups & side projects',
      description: 'The "test the waters" option. Get a senior engineer in your codebase 20 hours/week. Ship features consistently without burning runway.',
      features: [
        'Senior engineer (5+ yrs, vetted top 3%)',
        '20 hours/week, guaranteed timezone overlap',
        'Slack access — response within 4 hours',
        'Weekly strategy calls included',
        'Full PR reviews & documentation',
        'Bug fixes + feature development',
      ],
      cta: 'Lock In Your Spot',
      savings: 'vs. $10K/mo for a US contractor'
    },
    {
      name: 'Full-Time',
      price: '$8,000',
      duration: '/month',
      hours: '40 hrs/week',
      ideal: 'Funded startups shipping fast',
      description: 'Your new technical co-founder (minus the equity). A full-time senior engineer attending standups, owning features, and shipping daily.',
      popular: true,
      features: [
        'Senior engineer (5+ yrs, vetted top 3%)',
        '40 hours/week, full team integration',
        'Daily standups & real-time Slack',
        'Sprint planning & architecture decisions',
        'Full ownership of feature cycles',
        'Code reviews & junior mentorship',
      ],
      cta: 'Claim Your Engineer',
      savings: 'vs. $20K/mo for a US senior hire'
    },
    {
      name: 'Scale',
      price: 'Custom',
      duration: '',
      hours: '3-30 Engineers',
      ideal: 'Series A+ building entire teams',
      description: 'Build your entire engineering org in weeks, not years. 3 to 30 engineers on demand. One invoice. Zero recruitment headaches.',
      features: [
        'Dedicated pod (3+ engineers + tech lead)',
        'Custom stack & timezone matching',
        'Embedded architects & engineering managers',
        'Weekly sprint planning & retrospectives',
        'Scale up/down monthly — no commitments',
        'Direct Slack channel with leadership',
      ],
      cta: 'Design Your Team',
      savings: 'vs. 6+ months recruiting internally'
    }
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-ice-blue to-white grid-overlay">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-bold text-deep-navy mb-4">
            The "No-Brainer" Engineering Offer
          </h2>
          <p className="text-lg text-steel max-w-2xl mx-auto">
            Here's the deal: You get a senior engineer shipping code in 72 hours.<br />
            <strong className="text-deep-navy">If they're not a fit, you pay nothing. Cancel anytime. Zero risk.</strong>
          </p>
        </div>

        {/* Savings callout */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-success-green/10 text-success-green px-4 py-2 text-sm font-semibold border border-success-green/20">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Clients save $144K+ per engineer per year vs. US hires
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {retainerTiers.map((tier, index) => (
            <article
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
                    BEST VALUE — MOST CHOSEN
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-syne font-bold text-deep-navy">
                    {tier.name}
                  </h3>
                  <span className="text-xs font-mono text-steel bg-slate/5 px-2 py-1">
                    {tier.hours}
                  </span>
                </div>
                
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-syne font-bold text-primary-blue">
                    {tier.price}
                  </span>
                  <span className="text-steel text-sm">{tier.duration}</span>
                </div>
                
                <p className="text-steel text-sm leading-relaxed">
                  {tier.description}
                </p>
              </div>

              {/* Ideal for */}
              <div className="mb-6 pb-6 border-b border-slate/10">
                <span className="text-xs font-semibold text-steel uppercase tracking-wide">Best for:</span>
                <span className="text-sm text-deep-navy ml-2">{tier.ideal}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-3 text-sm text-steel"
                  >
                    <svg 
                      className="w-5 h-5 mt-0.5 flex-shrink-0 text-success-green" 
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
                {tier.cta}
              </a>
              
              <p className="text-center text-xs text-success-green font-medium mt-3">
                72-hour first commit guarantee
              </p>
              {tier.savings && (
                <p className="text-center text-xs text-steel mt-2 italic">
                  {tier.savings}
                </p>
              )}
            </article>
          ))}
        </div>

        {/* Risk Reversal */}
        <div className="text-center bg-white border border-primary-blue/20 p-8 max-w-2xl mx-auto">
          <h3 className="text-xl font-syne font-bold text-deep-navy mb-4">
            The BuildStack Guarantee
          </h3>
          <p className="text-steel mb-4">
            If your engineer doesn't ship their first commit within 72 hours — or you're not 100% satisfied with their work in the first week — <strong className="text-deep-navy">you don't pay a cent.</strong>
          </p>
          <p className="text-sm text-steel">
            No contracts. No minimums. Cancel anytime with 7 days notice. <br />
            <span className="text-primary-blue font-semibold">We've never had a client ask for a refund.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing
