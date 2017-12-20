const contracts = require('./contracts')

const getContract = ({ id }) => {
  return new Promise((res, rej) => {
    const contract = contracts.contracts.find(contract => contract.employeeId == id)

    res(contract)
  })
}

module.exports = getContract