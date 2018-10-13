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
    db.one("SELECT * FROM users WHERE email = $1;", [req.body.userName])
    .then(data => {
      if (data.password === req.body.password) {
        return res.send(true);
      }
    })
    .catch(err => {
      console.log(err);
    });
    /* res.send(true) is needed for force rerender */
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

  app.get('/getUser', (req, res) => {
    console.log(req);
  })
  

  // app.get('/', (req, res) => {
  //   db.query('SELECT * FROM users')
  //   .then(data => {
  //     console.log(typeof data);
  //     // res.send(data);
  //     })
  //     .catch(error => {
  //       console.log('******ERRROR*****', error);
  //     });
  //   });

  // check cookie, if cookie redirect to HOME else go to next MIDDLEWARE
  // passport.authenticate('local'), 
  //give cookie
  // (req, res) => {
  // ?
// })

app.listen(3000, () => console.log('server is running'));
db.connect();