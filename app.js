import seasonData from './data/data';
import Nodes from './nodes/nodes';

document.addEventListener('DOMContentLoaded', () => {

  // $.ajax({
  //   url: '/data',
  //   method: 'get',
  //   data: {seasonYear: 2001}
  // });

  const width = 800;
  const height = 600;

  const nodes = new Nodes;

  nodes.createNodes(seasonData, width, height);


});
