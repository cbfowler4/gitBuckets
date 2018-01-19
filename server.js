const express = require('express');
const path = require('path');
const nba = require('nba');

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

app.get('/data', (req, res) => {
  TEAMS.forEach((teamId) => {
    nba.stats.teamInfoCommon({LeagueID: "00", Season: req.query.seasonYear, SeasonType: "Regular Season", TeamID: teamId})
    .then((res, err) => console.log(res.teamInfoCommon));
    });
  });

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
