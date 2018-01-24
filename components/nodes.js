import { collide, boundaries } from '../util/movements';
import Store from '../store/store';
import { STYLING } from '../data/keys';
import { updateTeamShow } from './team_show';
import { merge } from 'lodash';

class Nodes {
  constructor(svg) {
    this.svg = svg;
    this.width = window.innerWidth*.75;
    this.height = (window.innerHeight-100);

    this.handleTick = this.handleTick.bind(this);
    this.handleMouseover = this.handleMouseover.bind(this);
    this.handleMouseout = this.handleMouseout.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.activeClickedTeam = this.activeClickedTeam.bind(this);
    this.handleResize = this.handleResize.bind(this);

    this.nodeValues = this.createNodes();
    this.force.on("tick", this.handleTick(this.force));
    window.addEventListener('resize', this.handleResize);
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
      // .on('click', this.handleClick);

    this.force = this.createForce(nodeValues);
    return nodeValues;
  }

  createLinks(res) {
    // this.force.links(Object.values(res));
  }


  createForce(nodeValues) {
    const chargeWindowRatio = Math.min(this.width, this.height)/Math.max(this.width, this.height);

    const force = d3.layout.force()
        .gravity(.1)
        .charge(function(d, i) {
          return i ? -(d.radius*d.radius+200)*chargeWindowRatio : 0; })
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
      if (team.w === undefined) {
        team.w = 0;
        team.l = 1;
      }

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
    .transition().ease('linear').duration(500)
    .attr("r", (d) => { return d.radius*1.25; })
    .attr('id', (d) => { return d.teamName; })
    .style("fill", (d) => { return d.color; });

    this.force.start();
  }

  activeClickedTeam(e) {
    Store.clickedTeam = e.teamName;
    e.x = window.innerWidth*.75/2;
    e.y = (window.innerHeight-100)/2;

    this.force.stop();
    const activeNode = document.getElementById(e.teamName)
    activeNode.setAttribute('cx', e.x);
    activeNode.setAttribute('cy', e.y);

    const force = d3.layout.force()
    .gravity(.1)
    .charge(function(d, i) {
      return d.teamName === e.teamName ? -15000 : -500; })
      .nodes(this.nodeValues)
      .size([this.width, this.height]);
      force.start();
      force.on("tick", this.handleTick(force));
    }

  handleMouseover(d) {
    Store.activeTeam = d;
    const teamSidebar = document.getElementById('team-sidebar');
    teamSidebar.style.display = 'flex';
    updateTeamShow();
  }

  handleMouseout(d) {
    const teamSidebar = document.getElementById('team-sidebar');
    teamSidebar.style.display = 'none';
  }

  handleClick(e) {
    // $.ajax({
    //   url: `/team/${e.teamId}`,
    //   method: 'get'
    // }).then((res) => {
    //   this.createLinks(res);
    // });

    if (Store.clickedTeam === e.teamName) {
      Store.clickedTeam = null;
    } else if (Store.clickedTeam != null){
      //do something with Store.clickedTeam
    } else {
      this.activeClickedTeam(e);
    }
  }


  handleResize() {
    this.width = window.innerWidth*.75;
    this.height = (window.innerHeight-100);
    this.force.size([this.width, this.height]);
  }

  handleTick(force) {
    return (e) => {
      const centerX = window.innerWidth*.75/2;
      const centerY = (window.innerHeight-100)/2;

      let q = d3.geom.quadtree(this.nodeValues),
      i = 0,
      j = 0,
      n = this.nodeValues.length;

      while (++i < n) q.visit(collide(this.nodeValues[i]));
      while (++j < n) boundaries(this.nodeValues[j], this.width, this.height);

      this.svg.selectAll("circle")
        .attr("cx", function(d) {
          if (d.teamName != Store.clickedTeam) {
            return d.x;
          } else {
            return centerX;
          }})
        .attr("cy", function(d) {
          if (d.teamName != Store.clickedTeam) {
            return d.y;
          } else {
             return centerY;
          }});

      force.resume(.1);
    };
  }
}

export default Nodes;
