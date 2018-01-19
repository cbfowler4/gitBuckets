import seasonData from './data/data';
import Nodes from './nodes/nodes';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './frontend/components/root';

document.addEventListener('DOMContentLoaded', () => {

  $.ajax({
    url: '/data',
    method: 'get',
    data: {seasonYear: 2013}
  });


  const root = document.getElementById("root");
  ReactDOM.render(<Root />, root);


  const width = 700;
  const height = 600;

  
  let svg = d3.select("#root").insert("svg", ":first-child")
  .attr("width", width)
  .attr("height", height);

  const nodes = new Nodes(svg, seasonData, width, height);

});
