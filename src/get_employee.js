const db = require('./db')

module.exports = function ( { id } ) {
  return db.getEmployee(id)
}