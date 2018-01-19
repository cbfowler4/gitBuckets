import seasonData from './data/data';
import Nodes from './nodes/nodes';

document.addEventListener('DOMContentLoaded', () => {

  $.ajax({
    url: '/data',
    method: 'get',
    data: {seasonYear: 2013}
  });

  const width = 700;
  const height = 600;

  var svg = d3.select(".main-container").insert("svg", ":first-child")
  .attr("width", width)
  .attr("height", height);

  const nodes = new Nodes(svg, seasonData, width, height);

  const teamContainer = document.getElementById("team-sidebar");
});
