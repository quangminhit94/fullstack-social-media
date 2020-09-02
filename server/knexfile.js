// Update with your config settings.

require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    // migrations: {
    //   directory: __dirname + '/db/migrations'
    // },
    // seeds: {
    //   directory: __dirname + '/db/seeds'
    // }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true',
    // migrations: {
    //   directory: __dirname + '/db/migrations'
    // },
    // seeds: {
    //   directory: __dirname + '/db/seeds'
    // }
  }

};
