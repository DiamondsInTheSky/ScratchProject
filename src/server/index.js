const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// require statements for passport
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const pgp = require('pg-promise')(/*options*/);
const cn = 'postgres://ralggtsz:eh8MiUNlYEBh-iLds9kzp5zePnjPm-oE@nutty-custard-apple.db.elephantsql.com:5432/ralggtsz';
const db = pgp(cn);


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

// allows us to create the express sessions for passport
app.use(require('express-session')({
  secret: 'secretive',
  resave: false,
  saveUninitialized: false,
}));

// something we always need to use for passport
app.use(passport.initialize());
app.use(passport.session());

// serialize and deserialize (or give and check cookie)
// maybe put middleware in a new file
passport.serializeUser((user, done) => {
  console.log('*********SERIALIZED**********', user);
  done(null, user.email);
});

passport.deserializeUser((id, done) => {
  db.any('SELECT * FROm users;')
    .then((user) => {
      console.log('user');
      done(null, user);
    })
    .catch(err => {
      console.log(err);
    });
});

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
(username, password, done) => {
  console.log('LOGGING IN: ', username, password);
  return db.one(`SELECT email FROM users WHERE email = $1`, [username, password])
    .then((result)=> {
      return done(null, result);
    })
    .catch((err) => {
      console.log("login error");
      return done(null, false, {message:'Wrong user name or password'});
    });
}));
  
app.post('/login',
  passport.authenticate('local'),
  (req, res) => {
    console.log('*********/login', req.body);
    /* res.send(true) is needed for force rerender */
    res.send(true);
}); 

app.post('/register', 
  (req, res) => {
    db.none('INSERT INTO users(firstname, lastname, email, github, linkedin, facebook, twitter, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', 
      [req.body.fName, req.body.lName, req.body.email, req.body.githubURL, req.body.linkedInURL, req.body.facebookURL, req.body.twitterURL, req.body.password]
    ).then(result => {
      return res.send(true);
    }).catch(err => {
      console.log(err);
    });
  });

app.listen(3000, () => console.log('server is running'));
db.connect();

// {
//   "id": 1,
//   "firstname": "joel",
//   "lastname": "perkins",
//   "email": "joel.climbs@gmail.com",
//   "password": "jeeves",
//   "github": "https://github.com/joelkperkins",
//   "linkedin": "https://www.linkedin.com/in/joelkperkins/",
//   "facebook": null,
//   "twitter": null
// },
// return db.one("SELECT user_id, user_name, user_email, user_role " +
//         "FROM users " +
//         "WHERE user_email=$1 AND user_pass=$2";
