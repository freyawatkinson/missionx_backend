const config = {
    host: process.env.MYSQL_HOST || 'localhost',
    database: process.env.MYSQL_DB || 'new_schema',
    user: process.env.MYSQL_USER ||  'root',
    password: process.env.MYSQL_PASSWORD ||  'RootPassword',
    port: Number(process.env.MYSQL_PORT || 3306),
    // ssl: {
    //   ca: Buffer.from(process.env.MYSQL_CERT_BASE64, 'base64').toString('ascii'),
    // },
  };
  
  module.exports = { config };