const express = require('express');
const path = require('path');
const nba = require('nba');
const request = require('postman-request');

const TEAMS = [
 1610612738,
 1610612751,
 1610612752,
 1610612755,
 1610612761,
 1610612741,
 1610612739,
 1610612765,
 1610612754,
 1610612749,
 1610612737,
 1610612766,
 1610612748,
 1610612753,
 1610612764,
 1610612743,
 1610612750,
 1610612760,
 1610612757,
 1610612762,
 1610612744,
 1610612746,
 1610612747,
 1610612756,
 1610612758,
 1610612742,
 1610612745,
 1610612763,
 1610612740,
 1610612759];


const app = express();

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));

// app.get('/data', (req, res) => {
  // TEAMS.forEach((teamId) => {
  //   nba.stats.teamInfoCommon({LeagueID: "00", Season: req.query.seasonYear, SeasonType: "Regular Season", TeamID: teamId})
  //   .then((res, err) => console.log(res.teamInfoCommon));
  //   });
  // });
app.get('/team', (req, res) => {
  const url = `https://stats.nba.com/stats/teamgamelogs?DateFrom=&DateTo=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=1610612737&Outcome=&PORound=0&PaceAdjust=N&PerMode=Totals&Period=0&PlusMinus=N&Rank=N&Season=2017-18&SeasonSegment=&SeasonType=Regular+Season&ShotClockRange=&VsConference=&VsDivision=`;
  const url2 = `https://stats.nba.com/stats/leaguedashteamstats?Conference=&DateFrom=&DateTo=&Division=&GameScope=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=PerGame&Period=0&PlayerExperience=&PlayerPosition=&PlusMinus=N&Rank=N&Season=2017-18&SeasonSegment=&SeasonType=Regular+Season&ShotClockRange=&StarterBench=&TeamID=0&VsConference=&VsDivision=`;
  request({
    uri: url2,
    method: 'get',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36',
      'Accept': 'application/json',
      'Connection': 'keep-alive'}
    }, (err, res, body) => {
    console.log(body);
  });
});
//https://stats.nba.com/stats/teamgamelogs?DateFrom=&DateTo=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=1610612737&Outcome=&PORound=0&PaceAdjust=N&PerMode=Totals&Period=0&PlusMinus=N&Rank=N&Season=2017-18&SeasonSegment=&SeasonType=Regular+Season&ShotClockRange=&VsConference=&VsDivision=
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
