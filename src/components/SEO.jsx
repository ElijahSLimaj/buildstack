import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = ({
  title = "BuildStack — Revolutionizing How Startups Hire Senior Engineers | Ship in 72 Hours",
  description = "Hiring senior engineers is broken. BuildStack fixed it. Get world-class engineers (5+ yrs) shipping code in 72 hours — 60% cheaper than US hires, 10x faster than recruiting. Cancel anytime.",
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
        "description": "BuildStack is revolutionizing how startups hire senior engineers. Get world-class engineering teams in 72 hours — no recruitment cycles, no equity, no Upwork. Cancel anytime.",
        "sameAs": [
          "https://github.com/buildstack",
          "https://linkedin.com/company/buildstack",
          "https://twitter.com/buildstack"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Sales",
          "email": "contact@buildstack.com"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://buildstack-seven.vercel.app/#website",
        "url": "https://buildstack-seven.vercel.app/",
        "name": "BuildStack",
        "description": "Revolutionizing How Startups Hire Senior Engineers — Ship in 72 Hours, Cancel Anytime",
        "publisher": {
          "@id": "https://buildstack-seven.vercel.app/#organization"
        }
      },
      {
        "@type": "Service",
        "@id": "https://buildstack-seven.vercel.app/#service",
        "name": "Senior Engineer Retainer & Enterprise Teams",
        "description": "BuildStack eliminates 6-month hiring cycles. Get dedicated senior engineers (5+ years experience) or entire engineering teams on flexible monthly retainer. First commit in 72 hours. 60% cheaper than US hires, 10x faster than recruiting. No contracts, cancel anytime.",
        "provider": {
          "@id": "https://buildstack-seven.vercel.app/#organization"
        },
        "serviceType": "Staff Augmentation",
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Engineer Retainer Plans",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Half-Time Retainer",
                "description": "One senior engineer (5+ yrs) working 20 hours/week on your product"
              },
              "price": "4000",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "4000",
                "priceCurrency": "USD",
                "unitText": "MONTH"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Full-Time Retainer",
                "description": "One senior engineer (5+ yrs) working 40 hours/week, fully embedded in your team"
              },
              "price": "8000",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "8000",
                "priceCurrency": "USD",
                "unitText": "MONTH"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Enterprise Teams",
                "description": "Dedicated engineering teams (3+ engineers) with embedded tech leads. Build your entire engineering org in weeks, not years. Custom pricing."
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "priceCurrency": "USD"
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
      <meta name="keywords" content="hire senior developer, senior engineer retainer, alternative to upwork, faster than recruiting, skip hiring cycle, contract software engineer, staff augmentation, dedicated developer, remote senior engineer, enterprise engineering team, build engineering team fast, outsourced CTO" />
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
