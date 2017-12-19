const users = require('./users')

module.exports = function () {
  return new Promise((res, rej) => {
    res(users)
  })
}