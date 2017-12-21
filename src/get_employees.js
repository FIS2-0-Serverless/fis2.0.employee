const db = require('./db')

module.exports = function () {
  return db.getEmployees()
           .then(employees => ( { users: employees } ))
           .catch(e => Promise.reject(e))
}