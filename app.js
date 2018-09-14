var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('<ul><li>Successful push</li><li>Successful push with html</li></ul>');
});


app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 3000!');
});
