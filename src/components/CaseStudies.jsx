import React from 'react'

const CaseStudies = () => {
  // TODO: Replace these placeholder case studies with real client projects
  // Update this array in src/components/CaseStudies.jsx with:
  // - Real project names and descriptions
  // - Actual metrics (revenue, users, uptime, etc.)
  // - Client logos or project screenshots
  // - Industry tags (fintech, healthtech, proptech, etc.)
  // - Links to case study pages or live products

  const caseStudies = [
    {
      title: 'FinTech Payment Platform',
      industry: 'Fintech',
      description: 'Enterprise payment processing platform handling €50M+ in annual transactions',
      metrics: [
        { label: 'Annual Revenue', value: '€3.2M' },
        { label: 'Active Users', value: '45K+' },
        { label: 'Uptime', value: '99.9%' }
      ],
      tags: ['NestJS', 'React', 'AWS', 'PostgreSQL']
    },
    {
      title: 'HealthTech Telemedicine App',
      industry: 'HealthTech',
      description: 'HIPAA-compliant telehealth platform connecting patients with specialists',
      metrics: [
        { label: 'Annual Revenue', value: '€2.1M' },
        { label: 'Consultations', value: '120K+' },
        { label: 'Response Time', value: '<50ms' }
      ],
      tags: ['Flutter', 'Golang', 'Kubernetes', 'MongoDB']
    },
    {
      title: 'PropTech Property Management',
      industry: 'PropTech',
      description: 'AI-powered property management system for commercial real estate portfolios',
      metrics: [
        { label: 'Annual Revenue', value: '€2.7M' },
        { label: 'Properties', value: '8,500+' },
        { label: 'Cost Savings', value: '35%' }
      ],
      tags: ['Next.js', 'Spring Boot', 'AWS Lambda', 'Redis']
    }
  ]

  return (
    <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-bold text-deep-navy mb-4">
            Real Projects. Real Impact.
          </h2>
          <p className="text-lg text-steel max-w-2xl mx-auto">
            12+ SaaS products generating over €8M in client revenue
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group bg-white border border-slate/10 overflow-hidden transition-all duration-300 hover:border-primary-blue hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-blue/10"
            >
              {/* Header */}
              <div className="p-6 bg-gradient-to-br from-ice-blue to-white border-b border-slate/10">
                <div className="inline-block px-3 py-1 bg-primary-blue/10 text-primary-blue text-xs font-mono font-semibold mb-3">
                  {study.industry}
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
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-primary-blue text-white font-semibold transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:shadow-primary-blue/30 hover:-translate-y-1"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
