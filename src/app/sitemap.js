export default function sitemap() {
    return [
      {
        url: 'https://raju.betadebug.com',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://raju.betadebug/about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
    //   {
    //     url: 'https://acme.com/blog',
    //     lastModified: new Date(),
    //     changeFrequency: 'weekly',
    //     priority: 0.5,
    //   },
    //   {
    //     url: 'https://acme.com/blog',
    //     lastModified: new Date(),
    //     changeFrequency: 'weekly',
    //     priority: 0.5,
    //   },
    ]
  }