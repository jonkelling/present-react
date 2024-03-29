module.exports = {
  type: 'react-app',
  webpack: {
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