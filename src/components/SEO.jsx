import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title = "BuildStack - Enterprise SaaS Development | MVP to Scale",
  description = "BuildStack builds production-grade SaaS companies from MVP to scale. Full-stack development, microservices architecture, and cloud infrastructure. 12+ SaaS products generating €8M+ in revenue.",
  image = "https://buildstack-seven.vercel.app/og-image.jpg",
  url = "https://buildstack-seven.vercel.app/",
  type = "website"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://buildstack-seven.vercel.app/#organization",
        "name": "BuildStack",
        "url": "https://buildstack-seven.vercel.app/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://buildstack-seven.vercel.app/logo.png",
          "width": 200,
          "height": 200
        },
        "description": "Enterprise SaaS development agency building production-grade software for startups and established businesses.",
        "sameAs": [
          "https://github.com/buildstack",
          "https://linkedin.com/company/buildstack",
          "https://twitter.com/buildstack"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "email": "contact@buildstack.com"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://buildstack-seven.vercel.app/#website",
        "url": "https://buildstack-seven.vercel.app/",
        "name": "BuildStack",
        "description": "Enterprise SaaS Development - From MVP to Scale",
        "publisher": {
          "@id": "https://buildstack-seven.vercel.app/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://buildstack-seven.vercel.app/?s={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Service",
        "@id": "https://buildstack-seven.vercel.app/#service",
        "name": "Enterprise SaaS Development",
        "description": "Full-stack SaaS development services including MVP development, scaling, optimization, custom integrations, and ongoing maintenance.",
        "provider": {
          "@id": "https://buildstack.com/#organization"
        },
        "serviceType": "Software Development",
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "SaaS Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "MVP Development",
                "description": "Launch your product in 8-12 weeks with full-stack development from scratch"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Scaling & Optimization",
                "description": "Refactor, optimize, and scale existing SaaS applications"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Integrations",
                "description": "Connect your SaaS to payment gateways, third-party services, and APIs"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Ongoing Maintenance",
                "description": "24/7 monitoring, security patches, and ongoing support"
              }
            }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://buildstack-seven.vercel.app/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://buildstack-seven.vercel.app/"
          }
        ]
      }
    ]
  }

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  )
}

export default SEO

