const axios = require('axios');

const client = axios.create({
  baseURL: 'https://ldrboardapi.herokuapp.com',
  timeout: 1000,
});

// const setAuthToken = token => {
//   if (token) {
//     //applying token
//     client.defaults.headers.common['Authorization'] = token;
//   } else {
//     //deleting the token from header
//     delete client.defaults.headers.common['Authorization'];
//   }
// }

async function liveness({ clientId, clientSecret, apiKey }) {
  try {
    const response = await client.get('/liveness')
    return response.data
  } catch (error) {
    console.log('🚀 ~ file: index.js ~ line 23 ~ liveness ~ error', error)
  }
}

function checkConfig(config) {
  const { clientId, clientSecret, apiKey } = config;
  if (!clientId) {
    throw new Error('Initialisation error: clientId not provided')
  } else if (!clientSecret) {
    throw new Error('Initialisation error: clientSecret not provided')
  } else if (!apiKey) {
    throw new Error('API key not provided')
  }
  return true
}

async function getToken({ clientId, clientSecret, apiKey }) {
  try {
    const response = await client.get('/token', {
      headers: {
        'x-client-id': clientId,
        'x-client-secret': clientSecret,
        'x-api-key': apiKey,
      }
    })
    return response.data
  } catch (error) {
    console.log('🚀 ~ file: index.js ~ line 43 ~ getToken ~ error', error)
  }
}

function sdk(config) {
  checkConfig(config)
  return {
    getLiveness: () => liveness(config),
    getToken: () => getToken(config)
  }
}

module.exports = sdk
