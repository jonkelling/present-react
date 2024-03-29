var fs = require('fs')
var path = require('path')

var express = require('express')
var bodyParser = require('body-parser')

var app = express()

var COMMENTS_FILE = path.join(__dirname, 'presentation.md')

app.set('port', (process.env.PORT || 3001))

try {
  fs.statSync('dist')
  console.log('Serving static build from dist/')
  console.log('Run `npm run clean` to return to development mode')
  app.use('/', express.static(path.join(__dirname, 'dist')));
}
catch (e) {
  console.log('Serving development build with nwb middleware')
  console.log('Run `npm run build` to create a production build')
  app.use(require('nwb/express')(express))
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache')
    next()
})

app.get('/api/presentation', function(req, res) {
  fs.readFile(COMMENTS_FILE, function(err, data) {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    res.send(data);
  })
})

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/')
})