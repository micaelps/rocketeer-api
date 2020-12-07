module.exports = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres'
  },
  test: {

  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres'
  }
}
