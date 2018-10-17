const db = require('../postgresql.js');

module.exports = {
  updateResponse(req, res, next) {
    db.one('UPDATE user_event_response AS usr SET status = $1 WHERE usr.user_id = $2 AND usr.event_id = $3', [req.body.status, req.body.uid, req.body.eid])
    .then(data => {
      res.locals.data = data;
      return next();
    })
    .catch(err => {
      console.log(err);
    })
  },
  addUsers(req, res, next) {
    let queryString = 'INSERT INTO user_event_response (user_id, event_id, status) VALUES'
    req.body.userIds.forEach(id => {
      console.log(id);
      queryString += `(${id.userid}, ${req.body.event_id}, \'${req.body.status}\'),`;
    });
    queryString = queryString.slice(0, -1);
    queryString += ' RETURNING *';
    console.log(queryString);
    db.any(queryString)
    .then(data => {
      res.locals.data = data;
      return next();
    })
    .catch(err => {
      console.log(err);
    })
  }
}