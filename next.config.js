/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  images: {
    domains: [
      'static.posters.cz',
      'a.allegroimg.com',
      'i.etsystatic.com',
      'encrypted-tbn0.gstatic.com',
      'm.media-amazon.com',
    ],
  },
}

module.exports = nextConfig
