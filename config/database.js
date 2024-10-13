const path = require("path");
module.exports = ({ env }) => {
  const client = env("DATABASE_CLIENT", "sqlite");

  const connections = {
    mysql: {
      connection: {
        host: env("DATABASE_HOST", ""),
        port: env.int("DATABASE_PORT", 4000),
        database: env("DATABASE_NAME", ""),
        user: env("DATABASE_USERNAME", ""),
        password: env("DATABASE_PASSWORD", "<PASSWORD>"),
        ssl: {
          ca: env("DATABASE_SSL_CA", ``),
          rejectUnauthorized: true,
        },
      },
      pool: {
        min: env.int("DATABASE_POOL_MIN", 2),
        max: env.int("DATABASE_POOL_MAX", 10),
      },
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
    },
  };
};
