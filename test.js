const request = require('request');
// const https = require('https');

const url = `https://stats.nba.com/stats/teamgamelogs?DateFrom=&DateTo=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=1610612737&Outcome=&PORound=0&PaceAdjust=N&PerMode=Totals&Period=0&PlusMinus=N&Rank=N&Season=2017-18&SeasonSegment=&SeasonType=Regular+Season&ShotClockRange=&VsConference=&VsDivision=`;
// const pool = new https.Agent({keepAlive: true});




request({
  uri: url,
  method: 'get',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36',
    'Accept': 'application/json',
    'Connection': 'keep-alive'}
  }, (err, res, body) => {
  console.log(body);
});


// })(url, (err, res, body) => {
//   console.log(err);
//   console.log(res);
//   console.log(body);
// });
