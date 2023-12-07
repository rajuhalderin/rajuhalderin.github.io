export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        allow: '/about',
        //disallow: '/private/',
      },
      sitemap: 'https://acme.com/sitemap.xml',
    }
  }