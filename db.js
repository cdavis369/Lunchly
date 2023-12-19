/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client("postgresql://corey:caller1d@localhost/lunchly");

db.connect();

module.exports = db;
