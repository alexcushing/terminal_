const express = require('express');
const app = express();
var path = require("path");

app.set('port', (process.env.PORT || 3000));

app.use(express.static(path.join(__dirname, 'public')));


app.get('/*/:path', (req, res) => {
    res.redirect('/');
} );

app.listen(app.get('port'), function() {
  console.log('Node app is running on port 🌎 ', app.get('port'));
});