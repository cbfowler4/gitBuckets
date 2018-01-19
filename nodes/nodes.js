import { collide, boundaries } from '../util/movements';
import Store from '../store/store';
import { STYLING } from '../data/keys';
import { updateTeamContainer } from '../actions/team_container_actions';


class Nodes {
  constructor(svg, seasonData, width, height) {
    this.svg = svg;
    this.width = width;
    this.height = height;
    this.seasonData = seasonData;
    this.nodes = this.createNodes();
    this.force = this.createForce();

    this.handleTick = this.handleTick.bind(this);
    this.handleMouseover = this.handleMouseover.bind(this);
    this.handleMouseout = this.handleMouseout.bind(this);

    this.force.on("tick", this.handleTick);
  }

  createNodes() {
    let nodes = this.seasonData[2013].map((team) => {
      return {
        radius: team[0].w*.7,
        color: STYLING[team[0].teamName] ? STYLING[team[0].teamName].pri : 'white',
        stroke: STYLING[team[0].teamName] ? STYLING[team[0].teamName].sec : 'black',
        teamName: team[0].teamName,
        logo: STYLING[team[0].teamName] ? STYLING[team[0].teamName].logo : null,
        wins: team[0].w,
        losses: team[0].l
      };
    });

    this.svg.selectAll("circle")
      .data(nodes)
      .enter().append("circle")
      .attr("r", function(d) { return d.radius; })
      .attr('id', function(d) { return d.teamName; })
      .style("fill", function(d) { return d.color; })
      .style('stroke', function(d) {return d.stroke;})
      .style('stroke-width', 2);

    this.svg.selectAll("circle")
      .on('mouseover', this.handleMouseover);
      // .on('mouseout', this.handleMouseout);
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

  handleMouseover(d) {
    Store.activeTeam = d;
    updateTeamContainer();
  }

  handleMouseout(d) {
    Store.activeTeam = null;
    updateTeamContainer();
  }

}

export default Nodes;
