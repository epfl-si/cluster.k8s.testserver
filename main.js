const express   = require('express')
const app       = express()
const os        = require('os')

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  console.log('Time: ', Date.now())
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
  res.header('Expires', '-1')
  res.header('Pragma', 'no-cache')
  var hostname = os.hostname()
  res.render('pages/index', {
    hostname: hostname
  });
})
const favicon = new Buffer.from('AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAMMOAADDDgAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wAAAAD/AAAA/wAAAP8AAAD/AAAA/////wD///8A////AP///wD///8A////AP///wAAAAD/AAAA/////wAAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/////AAAAAP8AAAD/////AP///wD///8A////AAAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/////AP///wD///8AAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA//////8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/////AP///wD///8AAAAA/wAAAP///////////wAAAP8AAAD/AAAA////////////AAAA/wAAAP////8A////AP///wD///8A////AAAAAP//////AAAA/wAAAP//////AAAA//////8AAAD/AAAA//////8AAAD/////AP///wD///8A////AAAAAP8AAAD//////wAAAP8AAAD//////wAAAP//////AAAA/wAAAP//////AAAA/wAAAP////8A////AP///wAAAAD/AAAA/wAAAP///////////wAAAP8AAAD/AAAA////////////AAAA/wAAAP8AAAD/////AP///wD///8AAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/////wD///8A////AAAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP////8A////AP///wAAAAD/AAAA/wAAAP8AAAD/////AP///wD///8A////AP///wAAAAD/AAAA/wAAAP8AAAD/////AP///wD///8AAAAA/wAAAP////8A////AP///wD///8A////AP///wD///8A////AP///wAAAAD/AAAA/////wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A//8AAPg/AACQEwAAwAcAAAABAADABwAAwAcAAIADAACAAwAAgAMAAIADAACHwwAAn/MAAP//AAD//wAA//8AAA==', 'base64'); 
app.get("/favicon.ico", function(req, res) {
 res.statusCode = 200;
 res.setHeader('Content-Length', favicon.length);
 res.setHeader('Content-Type', 'image/x-icon');
 res.setHeader("Cache-Control", "public, max-age=2592000");                // expiers after a month
 res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());
 res.end(favicon);
});
app.listen(3000, function () {
  console.log('k8s test server listening on port 3000!')
})
