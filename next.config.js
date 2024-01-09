module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname:'images-ng.pixai.art',
        port: '',
        pathname: '/**',
      },
    ],
  },
}
