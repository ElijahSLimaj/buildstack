import React from 'react'

const TechStack = () => {
  const techCategories = [
    {
      title: 'Frontend',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      technologies: [
        'React/TypeScript',
        'Flutter/Dart',
        'Next.js/React Native',
        'TailwindCSS'
      ]
    },
    {
      title: 'Backend',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      technologies: [
        'NestJS/Node.js',
        'Golang Microservices',
        'Spring Boot/Java',
        'RESTful & GraphQL APIs'
      ]
    },
    {
      title: 'Infrastructure',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      technologies: [
        'AWS Cloud',
        'Docker/Kubernetes',
        'CI/CD Pipelines',
        'Event-Driven Architecture'
      ]
    },
    {
      title: 'Data Layer',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      technologies: [
        'PostgreSQL/MongoDB',
        'Redis Caching',
        'RabbitMQ/Message Queues',
        'Data Migration & ETL'
      ]
    }
  ]

  return (
    <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-bold text-deep-navy mb-4">
            Battle-Tested Tech Stack
          </h2>
          <p className="text-lg text-steel max-w-2xl mx-auto">
            Enterprise-grade technologies that power scalable, reliable SaaS platforms
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-white border border-slate/10 p-8 transition-all duration-300 hover:border-primary-blue hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-blue/10"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-ice-blue flex items-center justify-center mb-6 text-primary-blue group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-syne font-bold text-deep-navy mb-4">
                {category.title}
              </h3>

              {/* Technologies */}
              <ul className="space-y-2">
                {category.technologies.map((tech, techIndex) => (
                  <li
                    key={techIndex}
                    className="text-steel text-sm font-mono flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-blue opacity-60"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-steel font-mono text-sm">
            No experiments. No cutting corners. Production-grade only.
          </p>
        </div>
      </div>
    </section>
  )
}

export default TechStack
