import React from 'react'

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'InspireFlow',
      industry: 'MarTech',
      description: 'Built an AI-powered webinar platform from scratch. Now processing $2.4M+ in revenue with 250+ active hosts.',
      metrics: [
        { label: 'Revenue Processed', value: '$2.4M+' },
        { label: 'Active Hosts', value: '250+' },
        { label: 'Conversion Rate', value: '23%' }
      ],
      tags: ['React', 'Node.js', 'Stripe', 'OpenAI'],
      link: 'https://inspire-flow-rouge.vercel.app/',
      highlight: 'Built in 10 weeks'
    },
    {
      title: 'QuickBase AI',
      industry: 'AI / SaaS',
      description: 'Created an AI support agent that reduced client support tickets by 80%. 500+ companies onboarded in 6 months.',
      metrics: [
        { label: 'Companies', value: '500+' },
        { label: 'Ticket Reduction', value: '80%' },
        { label: 'Setup Time', value: '5 min' }
      ],
      tags: ['Next.js', 'OpenAI', 'Stripe', 'PostgreSQL'],
      link: 'https://quick-base-ai.vercel.app/',
      highlight: '0 to 500 users in 6mo'
    },
    {
      title: 'VettedSports',
      industry: 'Media / FinTech',
      description: 'Launched a premium sports investment publication. 45%+ open rates (3x industry average). 50K+ weekly reach.',
      metrics: [
        { label: 'Subscribers', value: '1000s' },
        { label: 'Weekly Reach', value: '50K+' },
        { label: 'Open Rate', value: '45%+' }
      ],
      tags: ['React', 'Beehiiv', 'Analytics', 'CMS'],
      link: 'https://www.vettedsports.com/',
      highlight: '3x industry open rates'
    }
  ]

  return (
    <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-bold text-deep-navy mb-4">
            Real Products. Real Revenue. Real Fast.
          </h2>
          <p className="text-lg text-steel max-w-2xl mx-auto">
            We've helped 50+ startups ship products that actually make money. <br />
            <strong className="text-deep-navy">$8M+ in client revenue generated. Here's the proof.</strong>
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <article
              key={index}
              className="group bg-white border border-slate/10 overflow-hidden transition-all duration-300 hover:border-primary-blue hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-blue/10"
            >
              <a
                href={study.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                aria-label={`View case study: ${study.title}`}
              >
              {/* Header */}
              <div className="p-6 bg-gradient-to-br from-ice-blue to-white border-b border-slate/10">
                <div className="flex items-center justify-between mb-3">
                  <div className="inline-block px-3 py-1 bg-primary-blue/10 text-primary-blue text-xs font-mono font-semibold">
                    {study.industry}
                  </div>
                  {study.highlight && (
                    <div className="inline-block px-2 py-1 bg-success-green/10 text-success-green text-xs font-semibold">
                      {study.highlight}
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-syne font-bold text-deep-navy mb-2">
                  {study.title}
                </h3>
                <p className="text-steel text-sm leading-relaxed">
                  {study.description}
                </p>
              </div>

              {/* Metrics */}
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex}>
                      <div className="text-lg font-syne font-bold text-primary-blue">
                        {metric.value}
                      </div>
                      <div className="text-xs text-steel">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate/10">
                  {study.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-slate/5 text-steel text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              </a>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-steel mb-6">
            Want results like these? Let's talk about your project.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-primary-blue text-white font-semibold transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:shadow-primary-blue/30 hover:-translate-y-1"
          >
            Book Your Free Strategy Call
          </a>
          <p className="text-sm text-steel mt-4">
            No commitment. We'll map out exactly how to build your product.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
