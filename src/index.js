const AWSXRay = require('aws-xray-sdk-core')
const AWS = AWSXRay.captureAWS(require('aws-sdk'))
const Util = require('util')

module.exports = {
  getAll(event, context, callback) {
    console.log('Event is ', Util.inspect(event))
    callback(null, 'all is well')
  },
  getById(event, context, callback) {
    callback(null, 'all is well')
  }
}