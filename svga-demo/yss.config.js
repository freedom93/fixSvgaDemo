module.exports = {
  js: {
    assets: true,
  },
  css: {
    px2rem: true,
    autoprefixer: true,
  },
  webpack: {
    externals: {
      vue: 'Vue',
    },
    provide: {
      Vue: 'vue',
    }
  }
};
