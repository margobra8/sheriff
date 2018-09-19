
// deps para OAuth2
let bodyParser = require("body-parser");
let express = require("express");
let OAuthServer = require("express-oauth-server");
// modelo con los methods para comprobar auth y gestionar auth y sus registros
let dbModel = require("./dbModels/modelMemory.js")

// init app express
var app = express();

app.oauth = new OAuthServer({
  model: { dbModel }, // pasar como objeto el modelo de la base de datos con los exports
  debug: true
});

app.use(bodyParser.json()); // json bc of yes
app.use(bodyParser.urlencoded({ extended: true })); // usamos utf8 por favor
app.use(app.oauth.authorize()); // bind lib a express

app.use(function(req, res) {
  res.send("Secret area");
});

app.listen(4444);