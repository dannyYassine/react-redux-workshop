/**
 * Created by dannyyassine on 2017-04-23.
 */
// set up ========================
var express     = require('express');
var app         = express();                               // create our app w/ express
var bodyParser  = require('body-parser');    // pull information from HTML POST (express4)

// configuration =================
app.use(express.static(__dirname));                // set the static files location /public/img will be /img for users
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

app.get('*', function(req, res) {
    res.sendFile('index.html', { root: __dirname });
});

// listen (start app with node server.js) ======================================
app.set('port', process.env.PORT || 3002);
var server = app.listen(app.get('port'), function () {
    console.log("*\n*")
    console.log("/****************************************/");
    console.log('server listening on port ' + server.address().port);
    console.log("/****************************************/");
    console.log("*\n*")
});