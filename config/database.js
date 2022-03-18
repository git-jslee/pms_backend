module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '10.10.10.10'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'cwcc_strapi'),
        username: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'Crea0425!@12'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
