const SpotifyAPI = require('spotify-web-api-node');
// const ShazamAPI = require('shazam-api').create;

const spotifyApi = new SpotifyAPI({
  clientId: '...',
  clientSecret: '...'
});

// const shazamApi = ShazamAPI({
//  apiKey: '...'
// });

exports.getSpotifyTopHits = async (req, res) => {
  try {
    const data = await spotifyApi.getPlaylistTracks('playlistId', { limit: 10 });
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// exports.getShazamTopCharts = async (req, res) => {
//   try {
//     const data = await shazamApi.getChartsForCountry('US');
//     res.json(data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };
