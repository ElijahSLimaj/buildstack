import React from 'react'

const Services = () => {
  const services = [
    {
      title: 'MVP Development',
      subtitle: 'Idea → Revenue in 8-12 weeks',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: [
        'Full-stack development (no hand-off mess)',
        'We validate before we build — save months',
        'Architecture that scales to 100K users',
        'Production-ready on AWS/Vercel/GCP',
        '30 days post-launch support included'
      ]
    },
    {
      title: 'Scaling & Optimization',
      subtitle: "Fix what's slowing you down",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      features: [
        'Turn spaghetti code into clean architecture',
        'Microservices that actually make sense',
        "10x database performance (we've done it)",
        'Find & fix bottlenecks in 48 hours',
        'Prepare your stack for enterprise clients'
      ]
    },
    {
      title: 'Custom Integrations',
      subtitle: 'Connect your SaaS to anything',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        'REST, GraphQL, or whatever you need',
        'Stripe, Plaid, Twilio — done right',
        'Zapier-like automation for your product',
        "Real-time webhooks that don't break",
        'API docs your customers will love'
      ]
    },
    {
      title: 'Ongoing Maintenance',
      subtitle: 'Sleep while we keep it running',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      features: [
        '24/7 monitoring — we catch issues first',
        "Security patches before they're exploited",
        'Bug fixes shipped same-day',
        'New features rolled in continuously',
        "Monthly reports (you'll actually read)"
      ]
    }
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-ice-blue to-white grid-overlay">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-bold text-deep-navy mb-4">
            We Don't Just Write Code. We Ship Products.
          </h2>
          <p className="text-lg text-steel max-w-2xl mx-auto">
            12+ SaaS products launched. $8M+ revenue generated for clients. <br />
            <strong className="text-deep-navy">Here's what your engineer can do for you.</strong>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <article
              key={index}
              className="group bg-white border border-slate/10 p-8 transition-all duration-300 hover:border-primary-blue hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-blue/10"
            >
              {/* Icon & Title */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-ice-blue flex items-center justify-center text-primary-blue group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-syne font-bold text-deep-navy mb-2">
                    {service.title}
                  </h3>
                  <p className="text-steel text-sm">{service.subtitle}</p>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-3 text-steel"
                  >
                    <svg className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
