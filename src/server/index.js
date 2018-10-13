const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// require statements for passport
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// postgres database connection
const pgp = require('pg-promise')();
const db = pgp('postgres://ralggtsz:eh8MiUNlYEBh-iLds9kzp5zePnjPm-oE@nutty-custard-apple.db.elephantsql.com:5432/ralggtsz');

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
  done(null, user.user_id);
});
passport.deserializeUser((id, done) => {
  db.one('SELECT * FROM users WHERE id = $1', 1)
    .then((user) => {
      alert('COOKIE FOUND');
      done(null, user);
    })
    .catch((err) => {
      done(new Error(`User with the id ${id} does not exist`));
    });
});

// passport local strategy use (what does this do? => auths the user)
// passport.use(new LocalStrategy({
//   usernameField: 'name',
//   passwordField: 'pass',
// }), (username, password, done) => {
//   // example database send
//   // return db.one("query", [username, password])
//   //   .then((result)=> {
            //successful log in
//   //     return done(null, result);
//   //   })
//   //   .catch((err) => {
//   //     return done(null, false, { message: 'Wrong user name or password' });
//   //   });
// });

// Routes //
app.get('/', 
  (req, res) => {
    console.log('************app.get "/"');
    res.send('hi');
  }
);

app.post('/register', 
  // passport.authenticate('local'), 
  (req, res) => {
    console.log('*********register');
  res.send(req.user);
});

app.post('/login', (req, res) => {
  // passport.deserializeUser(req.body)
  console.log('*********/login', req.body);
  /* res.send(true) is needed for force rerender */
  res.send(true);
}, 
// check cookie, if cookie redirect to HOME else go to next MIDDLEWARE
  // passport.authenticate('local'), 
  //give cookie
  (req, res) => {
  // ?
})

app.listen(3000, () => console.log('server is running'));
