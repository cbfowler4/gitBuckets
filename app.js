import * as d3 from 'd3';

document.addEventListener('DOMContentLoaded', () => {

  $.ajax({
    url: '/data',
    method: 'get',
    data: {seasonYear: 2001}
  });

  const width = 500;
  const height = 500;

  const svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

  const circles = svg.append('circle').attr('cx', 50).attr('cy', 50).attr('r', 10).attr('fill','red');

});