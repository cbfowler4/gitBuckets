import seasonData from './data/data';
import {parseSeasonData} from './util/data_util';
import Nodes from './components/nodes';
import Slider from './components/slider';
import Store from './store/store';
import data from './data/team_data.json';

document.addEventListener('DOMContentLoaded', () => {

  // $.ajax({
  //   url: '/team',
  //   method: 'get'
  // });


  const width = 700;
  const height = 600;

  const svg = d3.select("#svg-team-container").insert("svg", ":first-child")
  .attr("width", width)
  .attr("height", height);

  Store.seasonData = parseSeasonData(data);
  Store.nodes = new Nodes(svg, width, height);

  const slider = new Slider();

  const teamContainer = document.getElementById("team-sidebar");
});
