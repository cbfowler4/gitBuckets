import seasonData from './data/data';
import Nodes from './components/nodes';
import Slider from './components/slider';
import Store from './store/store';

document.addEventListener('DOMContentLoaded', () => {

  // $.ajax({
  //   url: '/data',
  //   method: 'get',
  //   data: {seasonYear: 2013}
  // });

  const width = 700;
  const height = 600;

  const svg = d3.select("#svg-team-container").insert("svg", ":first-child")
  .attr("width", width)
  .attr("height", height);

  Store.seasonData = seasonData;
  new Nodes(svg, width, height);

  const slider = new Slider();

  const teamContainer = document.getElementById("team-sidebar");
});
