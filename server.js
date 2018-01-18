const express = require('express');
const path = require('path');
const nba = require('nba');
const teams = require('./data/keys');



const app = express();

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));

app.get('/data', (req, res) => {
  teams.forEach((teamId) => {
    nba.stats.teamInfoCommon({LeagueID: "00", Season: parseInt(req.query.seasonYear), SeasonType: "Regular Season", TeamID: teamId})
    .then((res, err) => console.log(res.teamInfoCommon));
    });
  });

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
