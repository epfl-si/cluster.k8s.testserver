const express   = require('express')
const app       = express()
const os        = require('os')
const myip      = require('quick-local-ip');

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  console.log('Time: ', Date.now())
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
  res.header('Expires', '-1')
  res.header('Pragma', 'no-cache')
  let hostname = os.hostname()
  res.render('pages/index', {
    hostname: hostname
  });
})

app.listen(3000, function () {
  console.log('k8s test server listening on port 3000!')
})
