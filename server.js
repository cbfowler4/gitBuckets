const express = require('express');
const path = require('path');
const nba = require('nba');
const request = require('request');
const fs = require('fs');
const serverUtil = require('./util/server_util');


const TEAMS = {
 1610612738: "Celtics",
 1610612751: "Nets",
 1610612752: "Knicks",
 1610612755: "76ers",
 1610612761: "Raptors",
 1610612741: "Bulls",
 1610612739: "Cavaliers",
 1610612765: "Pistons",
 1610612754: "Pacers",
 1610612749: "Bucks",
 1610612737: "Hawks",
 1610612766: "Hornets",
 1610612748: "Heat",
 1610612753: "Magic",
 1610612764: "Wizards",
 1610612743: "Nuggets",
 1610612750: "Timberwolves",
 1610612760: "Thunder",
 1610612757: "Trail Blazers",
 1610612762: "Jazz",
 1610612744: "Warriors",
 1610612746: "Clippers",
 1610612747: "Lakers",
 1610612756: "Suns",
 1610612758: "Kings",
 1610612742: "Mavericks",
 1610612745: "Rockets",
 1610612763: "Grizzlies",
 1610612740: "Pelicans",
 1610612759: "Spurs"};


// const TEAMS = [
//  1610612738,
//  1610612751,
//  1610612752,
//  1610612755,
//  1610612761,
//  1610612741,
//  1610612739,
//  1610612765,
//  1610612754,
//  1610612749,
//  1610612737,
//  1610612766,
//  1610612748,
//  1610612753,
//  1610612764,
//  1610612743,
//  1610612750,
//  1610612760,
//  1610612757,
//  1610612762,
//  1610612744,
//  1610612746,
//  1610612747,
//  1610612756,
//  1610612758,
//  1610612742,
//  1610612745,
//  1610612763,
//  1610612740,
//  1610612759];


const app = express();

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));


app.get('/team', (req, res) => {
  // const url = `https://stats.nba.com/stats/teamgamelogs?DateFrom=&DateTo=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=1610612737&Outcome=&PORound=0&PaceAdjust=N&PerMode=Totals&Period=0&PlusMinus=N&Rank=N&Season=2017-18&SeasonSegment=&SeasonType=Regular+Season&ShotClockRange=&VsConference=&VsDivision=`;
  getTeamInfo(1996, 2017);
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => console.log('Example app listening on port 3000!'));




const getTeamInfo = (startYear, endYear) => {
  const finalObj = {};

  const makeRequest = (year) => {
    if (year > endYear) {
      fs.writeFile('./data/team_data.json', JSON.stringify(finalObj, null, 3));
      return;
    }
    let season = serverUtil.formatSeason(year);
    console.log(season);
    const url = `https://stats.nba.com/stats/leaguedashteamstats?Conference=&DateFrom=&DateTo=&Division=&GameScope=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=PerGame&Period=0&PlayerExperience=&PlayerPosition=&PlusMinus=N&Rank=N&Season=${season}&SeasonSegment=&SeasonType=Regular+Season&ShotClockRange=&StarterBench=&TeamID=0&VsConference=&VsDivision=`;
    request({
      uri: url,
      method: 'get',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36',
        'Accept': 'application/json',
        'Connection': 'keep-alive'}
      }, (err, res, body) => {
        finalObj[year] = parseTeamResponse(JSON.parse(body));
        if (err) {
          fs.writeFile('./data/team_data.json', JSON.stringify(finalObj, null, 3));
        }

        makeRequest(year+1);
      });
  };

  makeRequest(startYear);
};

const parseTeamResponse = (body) => {
  const parsedResponse = {};

  Object.keys(TEAMS).forEach((teamId) => {
    parsedResponse[teamId] = {};
  });

  body.resultSets[0].rowSet.forEach((team) => {
    parsedResponse[team[0]] = {
      teamName: serverUtil.parseTeamName(team[1]),
      w: team[3],
      l: team[4]
    };
  });
  return parsedResponse;
};
