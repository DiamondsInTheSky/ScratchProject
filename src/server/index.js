const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// require statements for passport
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// postgres require
const pg = require('pg');

// postgres connect url and client
// const conString = "INSERT_YOUR_POSTGRES_URL_HERE" // Can be found in the Details page
// const client = new pg.Client(conString);
// client.connect(function(err) {
//   if(err) {
//     return console.error('could not connect to postgres', err);
//   }
//   client.query('SELECT NOW() AS "theTime"', function(err, result) {
//     if(err) {
//       return console.error('error running query', err);
//     }
//     console.log(result.rows[0].theTime);
//     // >> output: 2018-08-23T14:02:57.117Z
//     client.end();
//   });
// });

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

// serialize and deserialize
passport.serializeUser((user, done) => {
  done(null, user.user_id);
});
passport.deserializeUser((id, done) => {
  client.one('query', [id])
    .then((user) => {
      done(null, user);
    })
    .catch((err) => {
      done(new Error(`User with the id ${id} does not exist`));
    });
});

// passport local strategy use (what does this do?)
// passport.use(new LocalStrategy({
//   usernameField: 'name',
//   passwordField: 'pass',
// }), (username, password, done) => {
//   // example database send
//   // return db.one("query", [username, password])
//   //   .then((result)=> {
//   //     return done(null, result);
//   //   })
//   //   .catch((err) => {
//   //     return done(null, false, { message: 'Wrong user name or password' });
//   //   });
// });


// Routes //
app.get('/', (req, res) => {
  res.send('hi');
});

app.post('/register', passport.authenticate('local'), (req, res) => {
  res.send(req.user);
});

app.post('/login', passport.authenticate('local'), (req, res) => {
  
})

app.listen(3000, () => console.log('server is running'));
