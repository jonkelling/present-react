module.exports = {
  type: 'react-app',
  webpack: {
      publicPath: './',
    rules: {
      md: {
        test: /\.md$/,
        use: [
            "raw-loader"
        ]
      }
    },
    extra: {
        module: {
            rules: [
                {
                    test: /\.md$/,
                    use: 'raw-loader'
                }
            ]
        }
    }
  }
}