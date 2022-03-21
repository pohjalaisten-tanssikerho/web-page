const { schedule } = require('@netlify/functions')

const handler = async function(event, context) {
  fetch('https://api.netlify.com/build_hooks/622c7a05e6bcc356aeae7a63', {
    method: 'POST'
  })
  return {
    statusCode: 200
  }
}

module.exports.handler = schedule('@daily', handler)
