var express = require('express');
// body-parser package is required to convert HTML reqs into objects that JS can work with.
var bodyParser = require('body-parser');

// Access the User model from the db object.
var db = require('./models');
var User = db.User;
var Task = db.Task;

var app = express();

// Handle post data.
// 1. Create a user.
app.post('/users', function (req, res) {
  db.User.create({
    username: req.body.username
  }).then(function (user) {
    res.json(user);
  });
});

// 2. Create a task.
app.post('/tasks', function (req, res) {
  db.Task.create({
    title: req.body.title
  }).then(function (task) {
    res.json(task);
  });
});

// Handle get data
// 1. Return all users
app.get('/users', function (req, res) {
  User.findAll()
    .then(function (users) {
      res.json(users);
    });
});

// 2. Return all tasks
app.get('/tasks', function (req, res) {
  Task.findAll()
    .then(function (tasks) {
      res.json(tasks);
    });
});

app.listen(3000, function () {
  db.sequelize.sync();
  console.log('Listening on 3000. Connected to database sequelize_express.');
});