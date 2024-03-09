const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5213', // Đường dẫn đến máy chủ C#
        ws: true,
        changeOrigin: true
      }
    }
  }
});
