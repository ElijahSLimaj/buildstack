import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = ({
  title = "BuildStack — Stop Bleeding $200K/Year on Engineers Who Quit | Ship Code in 72 Hours",
  description = "Get a battle-tested senior engineer shipping production code in 72 hours. Save $144K+ per engineer vs. US hires. No 6-month recruiting. No Upwork disasters. Cancel anytime with zero penalty.",
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
        "description": "Stop bleeding $200K/year on engineers who quit. BuildStack gives you battle-tested senior engineers shipping production code in 72 hours. Save $144K+ per engineer. Cancel anytime.",
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
        "description": "Stop Bleeding $200K/Year on Engineers Who Quit — Ship Code in 72 Hours, Cancel Anytime",
        "publisher": {
          "@id": "https://buildstack-seven.vercel.app/#organization"
        }
      },
      {
        "@type": "Service",
        "@id": "https://buildstack-seven.vercel.app/#service",
        "name": "Senior Engineer Retainer & Enterprise Teams",
        "description": "The 'No-Brainer' Engineering Offer: Get dedicated senior engineers (5+ years, vetted top 3%) or entire engineering teams. First commit in 72 hours. Save $144K+ per engineer per year. Zero risk — if they're not a fit in week one, you don't pay. Cancel anytime.",
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
      <meta name="keywords" content="hire senior developer fast, senior engineer retainer, alternative to upwork, faster than recruiting, skip hiring cycle, stop wasting money on engineers, contract senior developer, staff augmentation, dedicated developer, remote senior engineer, enterprise engineering team, build engineering team fast, outsourced CTO, startup engineering team, save money hiring developers" />
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
