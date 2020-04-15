// Update with your config settings.

module.exports = {

  development: {
    // the client changes depending on the target DBMS
    client: "sqlite3", // the database driver
    connection: {
      // the location of the database file
      filename: "./data/cars.db3", // for SQLite only
    },
    useNullAsDefault: true, // for SQLite only
    migrations: {
      // where to store the migration files
      directory: "./data/migrations",
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
