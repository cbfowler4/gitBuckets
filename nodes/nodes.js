import { collide, boundaries } from '../util/movements';
import { COLORS } from '../data/keys';


class Nodes {
  constructor(svg, seasonData, width, height) {
    this.svg = svg;
    this.width = width;
    this.height = height;
    this.seasonData = seasonData;
    this.nodes = this.createNodes();
    this.force = this.createForce();

    this.handleTick = this.handleTick.bind(this);

    this.force.on("tick", this.handleTick);
  }

  createNodes() {
    let nodes = this.seasonData[2014].map((team) => {
      return {
        radius: team[0].w*.7,
        color: COLORS[team[0].teamName].pri,
        stroke: COLORS[team[0].teamName].sec
      };
    });

    this.svg.selectAll("circle")
        .data(nodes)
      .enter().append("circle")
        .attr("r", function(d) { return d.radius; })
        .style("fill", function(d) { return d.color; })
        .style('stroke', function(d) {return d.stroke;})
        .style('stroke-width', 2);

    return nodes;
  }


  createForce() {
    const force = d3.layout.force()
        .gravity(.1)
        .charge(function(d, i) {
          return i ? -d.radius*9 : 0; })
        .nodes(this.nodes)
        .size([this.width, this.height]);

    force.start();
    return force;
  }

  handleTick(e) {
    let q = d3.geom.quadtree(this.nodes),
        i = 0,
        j = 0,
        n = this.nodes.length;

    while (++i < n) q.visit(collide(this.nodes[i]));
    while (++j < n) boundaries(this.nodes[j], this.width, this.height);

    this.svg.selectAll("circle")
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });

    this.force.resume(.1);
  }
}

export default Nodes;
