import { collide, boundaries } from '../util/movements';
import Store from '../store/store';
import { STYLING } from '../data/keys';
import { updateTeamContainer } from '../actions/store_update_actions';


class Nodes {
  constructor(svg, width, height) {
    this.svg = svg;
    this.width = width;
    this.height = height;
    this.nodeValues = this.createNodes();

    this.handleTick = this.handleTick.bind(this);
    this.handleMouseover = this.handleMouseover.bind(this);
    this.handleMouseout = this.handleMouseout.bind(this);

    this.force.on("tick", this.handleTick);
  }

  createNodes() {
    const nodeValues = this.getNodeValuesFromStore();
    const selectedNodes = this.selectAllNodes();

    selectedNodes
      .data(nodeValues)
      .enter().append("circle")
      .attr("r", (d) => { return d.radius; })
      .attr('id', (d) => { return d.teamName; })
      .attr('cx', (d) => { return Math.random()*this.width;})
      .attr('cy', (d) => { return Math.random()*this.height;})
      .style("fill", (d) => { return d.color; })
      .style('stroke', (d) => {return d.stroke;})
      .style('stroke-width', 3);

    this.svg.selectAll("circle")
      .on('mouseover', this.handleMouseover);
      // .on('mouseout', this.handleMouseout);

    this.force = this.createForce(nodeValues);
    return nodeValues;
  }


  createForce(nodeValues) {
    const force = d3.layout.force()
        .gravity(.1)
        .charge(function(d, i) {
          return i ? -d.radius*9 : 0; })
        .nodes(nodeValues)
        .size([this.width, this.height]);
    force.start();
    return force;
  }

  handleTick(e) {
    let q = d3.geom.quadtree(this.nodeValues),
        i = 0,
        j = 0,
        n = this.nodeValues.length;

    while (++i < n) q.visit(collide(this.nodeValues[i]));
    while (++j < n) boundaries(this.nodeValues[j], this.width, this.height);

    console.log(this.nodeValues[0]);
    if (Store.done == true) {
      debugger
      console.log(this);
    }

    this.svg.selectAll("circle")
        .attr("cx", function(d) {
          return d.x; })
        .attr("cy", function(d) {
          return d.y; });

    this.force.resume(.1);
  }

  getNodeValuesFromStore() {
    let nodes = Store.seasonData[String(Store.selectedYear)].map((team) => {
      return {
        radius: team.w*.7,
        color: STYLING[team.teamName] ? STYLING[team.teamName].pri : 'white',
        stroke: STYLING[team.teamName] ? STYLING[team.teamName].sec : 'black',
        teamName: team.teamName,
        logo: STYLING[team.teamName] ? STYLING[team.teamName].logo : null,
        wins: team.w,
        losses: team.l
      };
    });
    return nodes;
  }

  selectAllNodes () {
    return this.svg.selectAll("circle");
  }

  updateNodeValues() {
    // const nodes = this.selectAllNodes().remove();

    // this.nodeValues = this.createNodes();

    const nodes = this.selectAllNodes().data(this.getNodeValuesFromStore());

    nodes
      .attr('r', (d) => {
        return d.radius; });
      // .attr('cx', (d, i) => {
      //   // return this.nodeValues[i].x;
      //   return 100;
      // })
      // .attr('cy', (d, i) => {
      //   // return this.nodeValues[i].y;
      //   return 100;
      // });

    Store.done = true;

    //
    // nodes.enter().append('circle')
    //   .attr('id', function(d) { return d.teamName; })
    //   .attr("r", function(d) { return d.radius; })
    //   .style("fill", function(d) { return d.color; })
    //   .style('stroke', function(d) {return d.stroke;})
    //   .style('stroke-width', 2);

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
