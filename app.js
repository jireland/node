var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('<html><head><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></head><body><div class="alert alert-primary" role="alert">A simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</div><div class="alert alert-secondary" role="alert">A simple secondary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</div><div class="alert alert-success" role="alert">A simple success alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</div><div class="alert alert-danger" role="alert">A simple danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</div><div class="alert alert-warning" role="alert">A simple warning alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</div><div class="alert alert-info" role="alert">A simple info alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</div><div class="alert alert-light" role="alert">  A simple light alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</div><div class="alert alert-dark" role="alert">  A simple dark alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</div>  </body></html>');
});


app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 3000!');
});
