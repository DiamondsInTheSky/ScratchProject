const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// require statements for passport

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

app.post('/login',
  (req, res) => {
    console.log('*********/login', req.body);
    /* res.send(true) is needed for force rerender */
    res.send(true);
  }); 

app.get('/', (req, res) => {
  db.query('SELECT * FROM users')
  .then(data => {
    console.log(typeof data);
    // res.send(data);
    })
    .catch(error => {
      console.log('******ERRROR*****', error);
    });
  });

// app.post('/register', 
//   // passport.authenticate('local'), 
//   (req, res) => {
//     res.send(true);
//     console.log('*********register');
//   // res.send(req.user);
// });

// check cookie, if cookie redirect to HOME else go to next MIDDLEWARE
  // passport.authenticate('local'), 
  //give cookie
  // (req, res) => {
  // ?
// })

app.listen(3000, () => console.log('server is running'));
db.connect();