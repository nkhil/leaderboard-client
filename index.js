const axios = require('axios');

const client = axios.create({
  baseURL: 'https://ldrboardapi.herokuapp.com',
  timeout: 1000,
});

const setAuthToken = token => {
  if (token) {
    //applying token
    client.defaults.headers.common['Authorization'] = token;
  } else {
    //deleting the token from header
    delete client.defaults.headers.common['Authorization'];
  }
}

async function liveness() {
  try {
    const response = await client.get('/liveness')
    return response.data
  } catch (error) {
    console.log('🚀 ~ file: index.js ~ line 23 ~ liveness ~ error', error)
  }
}

function exportedFn({ clientId, clientSecret, apiKey }) {
  return {
    getLiveness: liveness,
  }
}

module.exports = exportedFn
