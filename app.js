import seasonData from './data/data';
import Nodes from './components/nodes';
import Slider from './components/slider';
import Store from './store/store';

document.addEventListener('DOMContentLoaded', () => {

  $.ajax({
    url: '/team',
    method: 'get'
  });

  // const url = `https://stats.nba.com/stats/teamgamelogs?DateFrom=&DateTo=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=1610612737&Outcome=&PORound=0&PaceAdjust=N&PerMode=Totals&Period=0&PlusMinus=N&Rank=N&Season=2017-18&SeasonSegment=&SeasonType=Regular+Season&ShotClockRange=&VsConference=&VsDivision=`
  // console.log(url);
  //
  // $.ajax({
  //   url: url,
  //   method: 'get'
  // });

  const width = 700;
  const height = 600;

  const svg = d3.select("#svg-team-container").insert("svg", ":first-child")
  .attr("width", width)
  .attr("height", height);

  Store.seasonData = seasonData;
  Store.nodes = new Nodes(svg, width, height);

  const slider = new Slider();

  const teamContainer = document.getElementById("team-sidebar");
});
