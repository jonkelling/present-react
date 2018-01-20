var copy = require('copy');

copy('dist/*', 'docs', function(err, files) {
    if (err) throw err;
});