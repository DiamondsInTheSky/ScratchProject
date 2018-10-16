const db = require('../postgresql.js');

module.exports = {

  addUser(req, res, next) {
    console.log(req.body);
    db.none('INSERT INTO users(firstname, lastname, email, github, linkedin, facebook, twitter, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', 
    [req.body.fName, req.body.lName, req.body.email, req.body.githubURL, req.body.linkedInURL, req.body.facebookURL, req.body.twitterURL, req.body.password]
  ).then(result => {
    return next();
  }).catch(err => {
    console.log(err);
  });
  },
  grabProfile(req, res, next) {
    console.log('***PROFILE***', req.body, req.params.username);
    db.one('SELECT * FROM users WHERE email = $1', [req.params.username])
    .then(data => {
      res.locals.data = data;
      return next();
    })
    .catch(err => {
      console.log(err);
    })
  },
  getUsers(req, res, next) {
    db.any('SELECT * FROM users')
    .then(data => {
      res.locals.data = data;
      return next();
    })
    .catch(err => {
      console.log(err);
    })
  }
}