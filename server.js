var express = require('express');
var app = express();
// body-parser package is required to convert HTML reqs into objects that JS can work with.
var bodyParser = require('body-parser');

// Access the User model from the db object.
var db = require('./models');
var User = db.User;

// Handle post data.
// 1. Create a user.
app.post('/user', function (req, res) {
  db.User.create({username: req.body.username})
    .then(function (user) {
      res.json(user);
    });
});

app.listen(3000, function () {
  db.sequelize.sync();
  console.log('Server listening on 3000. Connected to database sequelize_express');
});