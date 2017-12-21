const AWS = require("aws-sdk");
const uuidv4 = require('uuid/v4');

AWS.config.update({
  region: "eu-central-1",
  endpoint: "https://dynamodb.eu-central-1.amazonaws.com"
  // endpoint: "http://docker.for.mac.localhost:8000"
})

const docClient = new AWS.DynamoDB.DocumentClient({convertEmptyValues: true}) // todo set timeout on connect

const table = "Fis_2_0_Employee" // todo expose as env var

module.exports = {
  getEmployee(id) {
    const params = {
      TableName: table,
      Key: {
        id: id
      }
    }
    return docClient.get(params)
                    .promise()
                    .then(data => data.Item)
                    .catch(e => {
                      return Promise.reject(e)
                    })
  },
  getEmployees() {
    const params = {
      TableName: table
    }
    return docClient.scan(params)
                    .promise()
                    .then(data => data.Items)
                    .catch(e => {
                      console.warn(e)
                      return Promise.reject(e)
                    })
  },
  init() {
    const users = require('./users').users

    const inserts = users.map(user => {
      console.log('Inserting user', user)

      const params = {
        TableName: table,
        Item: user
      }
      return docClient.put(params).promise()
    })

    Promise.all(inserts)
      .then(res => console.log('Users inserted'))
      .catch(e => console.error(e))
  }
}