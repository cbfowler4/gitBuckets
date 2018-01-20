import seasonData from './data/data';
import Nodes from './components/nodes';
import Slider from './components/slider';
import Store from './store/store';
import data from './data/team_data.json';

document.addEventListener('DOMContentLoaded', () => {


  const width = 700;
  const height = 600;

  const svg = d3.select("#svg-team-container").insert("svg", ":first-child")
  .attr("width", width)
  .attr("height", height);

  Store.seasonData = data;
  Store.nodes = new Nodes(svg, width, height);

  const slider = new Slider();

  const teamContainer = document.getElementById("team-sidebar");
});
