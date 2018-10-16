const connection = 'postgres://uxughpph:07L2n9DVEJJWX1WilogOo88xh89QzKVq@elmer.db.elephantsql.com:5432/uxughpph';
const pgp = require('pg-promise')(/*options*/);
const db = pgp(connection);

module.exports = db;