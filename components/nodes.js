import { collide, boundaries } from '../util/movements';
import Store from '../store/store';
import { STYLING } from '../data/keys';
import { updateTeamContainer } from '../actions/store_update_actions';
import { merge } from 'lodash';

class Nodes {
  constructor(svg) {
    this.svg = svg;
    this.width = window.innerWidth*.75;
    this.height = window.innerHeight;

    this.handleTick = this.handleTick.bind(this);
    this.handleMouseover = this.handleMouseover.bind(this);
    this.handleMouseout = this.handleMouseout.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.nodeValues = this.createNodes();
    this.force.on("tick", this.handleTick);
  }

  createNodes() {
    const nodeValues = this.updateNodeValues();

    this.svg.selectAll('circle')
      .data(nodeValues)
      .enter().append("circle")
      .attr("r", (d) => { return d.radius*1.25; })
      .attr('id', (d) => { return d.teamName; })
      .style("fill", (d) => { return d.color; })
      .style('stroke', (d) => {return d.stroke;})
      .style('stroke-width', 3);

    this.svg.selectAll("circle")
      .on('mouseover', this.handleMouseover)
      .on('mouseout', this.handleMouseout)
      .on('click', this.handleClick);

    this.force = this.createForce(nodeValues);
    return nodeValues;
  }

  createLinks(res) {
    // this.force.links(Object.values(res));
  }


  createForce(nodeValues) {
    const force = d3.layout.force()
        .gravity(.1)
        .charge(function(d, i) {
          return i ? -d.radius*15 : 0; })
        .nodes(nodeValues)
        .size([this.width, this.height]);
    force.start();
    return force;
  }


  updateNodeValues() {
    const nodes = [];
    const nodeValues = this.nodeValues;
    const teams = Store.seasonData[String(Store.selectedYear)];

    teams.forEach((team, i) => {
      const newObj = {
        teamId: team.teamId,
        radius: team.w/(team.w+team.l)*50,
        color: STYLING[team.teamName] ? STYLING[team.teamName].pri : 'white',
        stroke: STYLING[team.teamName] ? STYLING[team.teamName].sec : 'black',
        teamName: team.teamName,
        logo: STYLING[team.teamName] ? STYLING[team.teamName].logo : null,
        wins: team.w,
        losses: team.l
      };
      if (nodeValues != undefined) {
        merge(nodeValues[i], newObj);
      } else {
        nodes.push(newObj);
      }
    });
    return nodes;
  }

  updateNodes() {

    this.updateNodeValues();
    this.svg.selectAll('circle')
    .transition().ease('linear')
    .attr("r", (d) => { return d.radius*1.25; })
    .attr('id', (d) => { return d.teamName; })
    .style("fill", (d) => { return d.color; });

  }

  handleMouseover(d) {
    Store.activeTeam = d;
    const teamSidebar = document.getElementById('team-sidebar');
    teamSidebar.style.display = 'flex';
    updateTeamContainer();
  }

  handleMouseout(d) {
    const teamSidebar = document.getElementById('team-sidebar');
    teamSidebar.style.display = 'none';
  }

  handleClick(e) {
    $.ajax({
      url: `/team/${e.teamId}`,
      method: 'get'
    }).then((res) => {
      this.createLinks(res);
    });
  }

  handleTick(e) {
    let q = d3.geom.quadtree(this.nodeValues),
    i = 0,
    j = 0,
    n = this.nodeValues.length;

    while (++i < n) q.visit(collide(this.nodeValues[i]));
    while (++j < n) boundaries(this.nodeValues[j], this.width, this.height);


    this.svg.selectAll("circle")
    .attr("cx", function(d) {
      return d.x; })
      .attr("cy", function(d) {
        return d.y; });

        this.force.resume(.1);
      }
}

export default Nodes;
