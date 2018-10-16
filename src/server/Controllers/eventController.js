const db = require('../postgresql.js');

module.exports = {
  addEvent(req, res, next) {
    db.one('INSERT INTO events(uid, title, description) VALUES ($1, $2, $3) RETURNING *', [req.body.uid, req.body.title, req.body.description])
    .then(data => {
      res.locals.data = data;
      return next();
    })
    .catch(err => {
      console.log(err);
    })
  },
  getEvents(req, res, next){
    db.any('SELECT e.title, e.descripition FROM user_event_response as uer INNER JOIN events as e ON e.id = uer.e_id WHERE uer.u_id = $1', [req.body.uid])
    .then(data => {
      res.locals.data = data;
      return next();
    })
    .catch(err => {
      console.log(err);
    })
  },
  getStatuses(req, res, next) {
    db.any('SELECT u.name, usr.status FROM user_event_response as uer INNER JOIN users as u ON uer.u_id = u.id WHERE uer.status = yes AND uer.e_id = $1',[req.body.eid])
    .then(data => {
      res.locals.data = data;
      return next();
    })
    .catch(err => {
      console.log(err);
    })
  }
}