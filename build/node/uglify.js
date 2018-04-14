const UglifyJS = require('uglify-js')
const fs = require('fs')

const js = fs.readFileSync('s.js', 'utf8')
const result = UglifyJS.minify(js).code

fs.writeFileSync('index.js', result, 'utf8')
