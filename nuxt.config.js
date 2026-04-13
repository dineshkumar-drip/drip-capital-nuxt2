module.exports = {
  target: 'static',
  head: {
    title: 'Drip Capital | Working Capital for Growing Businesses',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Drip Capital provides fast, flexible working capital: vendor financing, receivables financing, and lines of credit for businesses doing $5M to $500M in annual revenue.' },
      { name: 'robots', content: 'index, follow' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Drip Capital' },
      { hid: 'og:title', property: 'og:title', content: 'Drip Capital | Working Capital for Growing Businesses' },
      { hid: 'og:description', property: 'og:description', content: 'Fast, flexible working capital for US businesses. Vendor financing, receivables financing, and lines of credit. Apply in minutes, funded in 24 hours.' },
      { hid: 'og:image', property: 'og:image', content: 'https://dripcapital.com/og-image.png' },
      { hid: 'og:url', property: 'og:url', content: 'https://dripcapital.com' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@DripCapital' },
      { name: 'twitter:title', content: 'Drip Capital | Working Capital for Growing Businesses' },
      { name: 'twitter:description', content: 'Fast, flexible working capital for US businesses. Vendor financing, receivables financing, and lines of credit. Apply in minutes, funded in 24 hours.' },
      { name: 'twitter:image', content: 'https://dripcapital.com/og-image.png' }
    ],
    link: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap' },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://dripcapital.com' }
    ],
    script: [
      {
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org',
          '@type': 'FinancialService',
          'name': 'Drip Capital',
          'url': 'https://dripcapital.com',
          'logo': 'https://dripcapital.com/logo.png',
          'description': 'Drip Capital provides working capital solutions including vendor financing, receivables financing, and lines of credit for small and medium-sized businesses.',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': '228 Hamilton Ave, 3rd Floor',
            'addressLocality': 'Palo Alto',
            'addressRegion': 'CA',
            'postalCode': '94301',
            'addressCountry': 'US'
          },
          'telephone': '+16504370150',
          'email': 'hello@dripcapital.com',
          'sameAs': [
            'https://www.linkedin.com/company/dripcapital',
            'https://twitter.com/DripCapital'
          ],
          'areaServed': 'US',
          'serviceType': ['Vendor Financing', 'Receivables Financing', 'Line of Credit']
        }
      }
    ]
  },
  css: ['~/assets/css/main.css'],
  components: true,
  modules: [
    ['nuxt-i18n', {
      locales: [
        { code: 'en', iso: 'en', name: 'English', file: 'en.js' },
        { code: 'en-us', iso: 'en-US', name: 'English (US)', file: 'en-us.js' }
      ],
      defaultLocale: 'en',
      lazy: true,
      langDir: 'i18n/',
      strategy: 'prefix_except_default',
      detectBrowserLanguage: false,
      vueI18n: {
        fallbackLocale: 'en'
      }
    }]
  ],
  router: {
    middleware: ['redirects']
  },
  build: {
    extractCSS: true
  }
}
