const AWSXRay = require('aws-xray-sdk-core')
const AWS = AWSXRay.captureAWS(require('aws-sdk'))
const Util = require('util')
const Joi = require('joi')

const getEmployees = require('src/get_employees')
const getEmployee = require('src/get_employee')
const ResponseHelpers = require('src/response_helpers')


module.exports = {
  getAll(event, context, callback) {
    ResponseHelpers.buildResponse(getEmployees(), callback)
  },
  getById({ pathParameters }, context, callback) {
    const schema = {
      'id': Joi.string()
    }

    const result = Joi.validate(pathParameters, schema)
                      .then(id => getEmployee(id))

    ResponseHelpers.buildResponse(result, callback)
  }
}