module.exports = {
  reactStrictMode: true,
  env: {
    customKey: 'my-value',
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack here to avoid need to import it
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
    return config
  },
}