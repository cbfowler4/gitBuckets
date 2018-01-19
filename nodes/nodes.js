import { collide } from '../util/movements';

class Nodes {
  constructor() {

  }

  createNodes(seasonData, width, height) {
    const nodes = seasonData[2014].map((team) => {
      return {
        radius: team[0].w*.6,
        color: 'blue',
        stroke: 'red'
      };
    });

    var force = d3.layout.force()
        .gravity(.1)
        .charge(function(d, i) {
          return i ? -(d.radius*d.radius)+150 : 0; })
        .nodes(nodes)
        .size([width, height]);

    force.start();

    var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height);

    svg.selectAll("circle")
        .data(nodes)
      .enter().append("circle")
        .attr("r", function(d) { return d.radius; })
        .style("fill", function(d) { return d.color; })
        .style('stroke', function(d) {return d.stroke;});

    force.on("tick", function(e) {
      var q = d3.geom.quadtree(nodes),
          i = 0,
          n = nodes.length;

      while (++i < n) q.visit(collide(nodes[i]));

      svg.selectAll("circle")
          .attr("cx", function(d) { return d.x; })
          .attr("cy", function(d) { return d.y; });
      force.resume(.1);
    });
  }
}

export default Nodes;
