const leaderbaordSdk = require('.');

const config = {
  clientId: 'leaderboard_client_YDhhow',
  clientSecret: 'iQt3kjFE9tF5f8zZkbdim1uMfx3YC7SB',
  apiKey: '832b156603e7d904877ba757b4515c68',
}

const leaderboardApi = leaderbaordSdk(config);

(async function getLiveness() {
  try {
    const response = await leaderboardApi.getLiveness();
    console.log('🚀 ~ file: test.js ~ line 16 ~ getLiveness ~ response', response)
  } catch (error) {
    console.log('🚀 ~ file: test.js ~ line 17 ~ getLiveness ~ error', error)
  }
})();



