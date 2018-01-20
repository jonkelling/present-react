module.exports = {
  type: 'react-app',
  webpack: {
    rules: {
      md: {
        test: /\.md$/,
        use: [
          {
            loader: "markdown-loader",
            options: {
              gfm: false
            }
          }
        ]
      }
    }
  }
}