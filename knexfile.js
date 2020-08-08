module.exports = {
  // Development configuration options
  development: {
    client: "sqlite3",
    // required if you want to set null as the default value in the DB
    useNullAsDefault: true,
    // Allows us to use foreign keys (creates a unique combination of two or more columns)
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
    // where the database table is stored
    connection: {
      filename: "./data/recipes.db3",
    },

    migrations: {
      // directory --> folder
      directory: "./data/migrations",
    },

    seeds: {
      directory: "./data/seeds",
    },
  },

  // production config
};
