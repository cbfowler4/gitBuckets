import seasonData from './data/data';
import Nodes from './nodes/nodes';

document.addEventListener('DOMContentLoaded', () => {

  // $.ajax({
  //   url: '/data',
  //   method: 'get',
  //   data: {seasonYear: 2001}
  // });

  const width = 700;
  const height = 600;

  var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height);

  const nodes = new Nodes(svg, seasonData, width, height);


});
