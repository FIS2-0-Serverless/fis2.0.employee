const prepareErrorResponse = (error) => {
  if (error) {
    console.warn(error)
  }

  const devMessage = error.message ? error.message : 'Check logs for details'
  return {
    statusCode: 500,
    body: JSON.stringify({ devMessage })
  }
}

const buildResponse = (result, callback) => {
  return result
          .then(data => {
            callback(null, {
              statusCode: data ? 200 : 404,
              body: data ? JSON.stringify(data) : ''
            })
          })
          .catch(e => {
            callback(null, prepareErrorResponse(e))
          })
}

module.exports = {
  buildResponse
}