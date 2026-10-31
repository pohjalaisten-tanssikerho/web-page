const { schedule } = require('@netlify/functions')

const handler = async function(event, context) {
  const response = await fetch(`https://api.netlify.com/build_hooks/${process.env.BUILD_DAILY_KEY}`, {
    method: 'POST'
  })
  if (!response.ok) {
    console.error(`Build hook failed: ${response.status} ${response.statusText}`)
  }
  return {
    statusCode: 200
  }
}

module.exports.handler = schedule('@daily', handler)
