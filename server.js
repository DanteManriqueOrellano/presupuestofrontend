//install express server
const express = require('express');
const path = require('path');
const app = express();
//serve only the static files from the dist directory
app.use(express.static('./dist/presupuestofontend'));
app.get('/*', (req, res) =>
  res.sendFile('index.html', { root: 'dist/angular-heroku/' }),
);
//start the app by listing on the default heroku port
app.listen(process.env.PORT || 8080);
