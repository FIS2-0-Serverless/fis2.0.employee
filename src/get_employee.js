const users = require('./users')

module.exports = function ( { id } ) {
  return new Promise((res, rej) => {
    // introduce random error
    if (id === 'abc') {
      rej(new Error('Boom'))
    }

    const user = users.users.find(user => user.id == id)

    res(user)
  })
}