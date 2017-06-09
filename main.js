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
  res.send("<h3>myapponk8s</h3><br />" + os.hostname() +
    "<p>myip.getLocalIP4: " + myip.getLocalIP4() + "</p>" +
    "<p>myip.getLocalIP6: " + myip.getLocalIP6() + "</p>" +
    "<p>Oh! And here is your lolcal:" +
    "<br /><img src=\"http://thecatapi.com/api/images/get?format=src&type=gif\"></p>");
  //res.render('pages/index');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
