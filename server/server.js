var express = require("express"); //used for routing
var app = express();
var bodyParser = require("body-parser");
var http = require("http").Server(app); //used to provide http functionality

app.use(bodyParser.json());
app.use(express.static(__dirname + "../dist/s5266602-3813-ict"));

var cors = require("cors");
app.use(cors());

var server = http.listen(3000, function() {
  console.log("Server listening on port: 3000")
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post("/login", require("./router/login"))
