var mysql = require('mysql2');
require('dotenv').config();

var port;
var password;
var user;
console.log('process.env.NODE_ENV__', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'local') {
  port = process.env.PORT_DB_LOCAL;
  password = process.env.PASSWORD_LOCAL;
  user = process.env.USER_LOCAL;
} else {
  port =
    process.env.NODE_ENV === 'staging'
      ? process.env.PORT_DB_STG
      : process.env.PORT_DB_PRD;

  password =
    process.env.NODE_ENV === 'staging'
      ? process.env.PASSWORD_STG
      : process.env.PASSWORD_PRD;

  console.log('password++___2', password);
  user =
    process.env.NODE_ENV === 'staging'
      ? process.env.USER_STG
      : process.env.USER_PRD;

  console.log('user++___2', user);
}

console.log('Port  --> ', port);

var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: user,
  password: password,
  port: port,
  database: 'certification_system',
});

// module.exports = pool;

// var mysql = require('mysql');

// var pool = mysql.createPool({
//   connectionLimit: 10,
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   port: '3306',
//   database: 'certification_system',
// });

module.exports = pool;
