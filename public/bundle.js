/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 171);
/******/ })
/************************************************************************/
/******/ ({

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_data__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nodes_nodes__ = __webpack_require__(464);



document.addEventListener('DOMContentLoaded', () => {

  // $.ajax({
  //   url: '/data',
  //   method: 'get',
  //   data: {seasonYear: 2001}
  // });

  const width = 800;
  const height = 600;

  const nodes = new __WEBPACK_IMPORTED_MODULE_1__nodes_nodes__["a" /* default */];

  nodes.createNodes(__WEBPACK_IMPORTED_MODULE_0__data_data__["a" /* default */], width, height);


});


/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const seasonData = { 2014: [[ { teamId: 1610612749,
    seasonYear: '2014-15',
    teamCity: 'Milwaukee',
    teamName: 'Bucks',
    teamAbbreviation: 'MIL',
    teamConference: 'East',
    teamDivision: 'Central',
    teamCode: 'bucks',
    w: 41,
    l: 41,
    pct: 0.5,
    confRank: 6,
    divRank: 3,
    minYear: '1968',
    maxYear: '2017' } ],
[ { teamId: 1610612739,
    seasonYear: '2014-15',
    teamCity: 'Cleveland',
    teamName: 'Cavaliers',
    teamAbbreviation: 'CLE',
    teamConference: 'East',
    teamDivision: 'Central',
    teamCode: 'cavaliers',
    w: 53,
    l: 29,
    pct: 0.646,
    confRank: 2,
    divRank: 1,
    minYear: '1970',
    maxYear: '2017' } ],
[ { teamId: 1610612752,
    seasonYear: '2014-15',
    teamCity: 'New York',
    teamName: 'Knicks',
    teamAbbreviation: 'NYK',
    teamConference: 'East',
    teamDivision: 'Atlantic',
    teamCode: 'knicks',
    w: 17,
    l: 65,
    pct: 0.207,
    confRank: 15,
    divRank: 5,
    minYear: '1946',
    maxYear: '2017' } ],
[ { teamId: 1610612755,
    seasonYear: '2014-15',
    teamCity: 'Philadelphia',
    teamName: '76ers',
    teamAbbreviation: 'PHI',
    teamConference: 'East',
    teamDivision: 'Atlantic',
    teamCode: 'sixers',
    w: 18,
    l: 64,
    pct: 0.22,
    confRank: 14,
    divRank: 4,
    minYear: '1949',
    maxYear: '2017' } ],
[ { teamId: 1610612750,
    seasonYear: '2014-15',
    teamCity: 'Minnesota',
    teamName: 'Timberwolves',
    teamAbbreviation: 'MIN',
    teamConference: 'West',
    teamDivision: 'Northwest',
    teamCode: 'timberwolves',
    w: 16,
    l: 66,
    pct: 0.195,
    confRank: 15,
    divRank: 5,
    minYear: '1989',
    maxYear: '2017' } ],
[ { teamId: 1610612738,
    seasonYear: '2014-15',
    teamCity: 'Boston',
    teamName: 'Celtics',
    teamAbbreviation: 'BOS',
    teamConference: 'East',
    teamDivision: 'Atlantic',
    teamCode: 'celtics',
    w: 40,
    l: 42,
    pct: 0.488,
    confRank: 7,
    divRank: 2,
    minYear: '1946',
    maxYear: '2017' } ],
[ { teamId: 1610612765,
    seasonYear: '2014-15',
    teamCity: 'Detroit',
    teamName: 'Pistons',
    teamAbbreviation: 'DET',
    teamConference: 'East',
    teamDivision: 'Central',
    teamCode: 'pistons',
    w: 32,
    l: 50,
    pct: 0.39,
    confRank: 12,
    divRank: 5,
    minYear: '1948',
    maxYear: '2017' } ],
[ { teamId: 1610612748,
    seasonYear: '2014-15',
    teamCity: 'Miami',
    teamName: 'Heat',
    teamAbbreviation: 'MIA',
    teamConference: 'East',
    teamDivision: 'Southeast',
    teamCode: 'heat',
    w: 37,
    l: 45,
    pct: 0.451,
    confRank: 10,
    divRank: 3,
    minYear: '1988',
    maxYear: '2017' } ],
[ { teamId: 1610612754,
    seasonYear: '2014-15',
    teamCity: 'Indiana',
    teamName: 'Pacers',
    teamAbbreviation: 'IND',
    teamConference: 'East',
    teamDivision: 'Central',
    teamCode: 'pacers',
    w: 38,
    l: 44,
    pct: 0.463,
    confRank: 9,
    divRank: 4,
    minYear: '1976',
    maxYear: '2017' } ],
[ { teamId: 1610612743,
    seasonYear: '2014-15',
    teamCity: 'Denver',
    teamName: 'Nuggets',
    teamAbbreviation: 'DEN',
    teamConference: 'West',
    teamDivision: 'Northwest',
    teamCode: 'nuggets',
    w: 30,
    l: 52,
    pct: 0.366,
    confRank: 12,
    divRank: 4,
    minYear: '1976',
    maxYear: '2017' } ],
[ { teamId: 1610612753,
    seasonYear: '2014-15',
    teamCity: 'Orlando',
    teamName: 'Magic',
    teamAbbreviation: 'ORL',
    teamConference: 'East',
    teamDivision: 'Southeast',
    teamCode: 'magic',
    w: 25,
    l: 57,
    pct: 0.305,
    confRank: 13,
    divRank: 5,
    minYear: '1989',
    maxYear: '2017' } ],
[ { teamId: 1610612766,
    seasonYear: '2014-15',
    teamCity: 'Charlotte',
    teamName: 'Hornets',
    teamAbbreviation: 'CHA',
    teamConference: 'East',
    teamDivision: 'Southeast',
    teamCode: 'hornets',
    w: 33,
    l: 49,
    pct: 0.402,
    confRank: 11,
    divRank: 4,
    minYear: '1988',
    maxYear: '2017' } ],
[ { teamId: 1610612761,
    seasonYear: '2014-15',
    teamCity: 'Toronto',
    teamName: 'Raptors',
    teamAbbreviation: 'TOR',
    teamConference: 'East',
    teamDivision: 'Atlantic',
    teamCode: 'raptors',
    w: 49,
    l: 33,
    pct: 0.598,
    confRank: 4,
    divRank: 1,
    minYear: '1995',
    maxYear: '2017' } ],
[ { teamId: 1610612737,
    seasonYear: '2014-15',
    teamCity: 'Atlanta',
    teamName: 'Hawks',
    teamAbbreviation: 'ATL',
    teamConference: 'East',
    teamDivision: 'Southeast',
    teamCode: 'hawks',
    w: 60,
    l: 22,
    pct: 0.732,
    confRank: 1,
    divRank: 1,
    minYear: '1949',
    maxYear: '2017' } ],
[ { teamId: 1610612764,
    seasonYear: '2014-15',
    teamCity: 'Washington',
    teamName: 'Wizards',
    teamAbbreviation: 'WAS',
    teamConference: 'East',
    teamDivision: 'Southeast',
    teamCode: 'wizards',
    w: 46,
    l: 36,
    pct: 0.561,
    confRank: 5,
    divRank: 2,
    minYear: '1961',
    maxYear: '2017' } ],
[ { teamId: 1610612756,
    seasonYear: '2014-15',
    teamCity: 'Phoenix',
    teamName: 'Suns',
    teamAbbreviation: 'PHX',
    teamConference: 'West',
    teamDivision: 'Pacific',
    teamCode: 'suns',
    w: 39,
    l: 43,
    pct: 0.476,
    confRank: 10,
    divRank: 3,
    minYear: '1968',
    maxYear: '2017' } ],
[ { teamId: 1610612744,
    seasonYear: '2014-15',
    teamCity: 'Golden State',
    teamName: 'Warriors',
    teamAbbreviation: 'GSW',
    teamConference: 'West',
    teamDivision: 'Pacific',
    teamCode: 'warriors',
    w: 67,
    l: 15,
    pct: 0.817,
    confRank: 1,
    divRank: 1,
    minYear: '1946',
    maxYear: '2017' } ],
[ { teamId: 1610612747,
    seasonYear: '2014-15',
    teamCity: 'Los Angeles',
    teamName: 'Lakers',
    teamAbbreviation: 'LAL',
    teamConference: 'West',
    teamDivision: 'Pacific',
    teamCode: 'lakers',
    w: 21,
    l: 61,
    pct: 0.256,
    confRank: 14,
    divRank: 5,
    minYear: '1948',
    maxYear: '2017' } ],
[ { teamId: 1610612762,
    seasonYear: '2014-15',
    teamCity: 'Utah',
    teamName: 'Jazz',
    teamAbbreviation: 'UTA',
    teamConference: 'West',
    teamDivision: 'Northwest',
    teamCode: 'jazz',
    w: 38,
    l: 44,
    pct: 0.463,
    confRank: 11,
    divRank: 3,
    minYear: '1974',
    maxYear: '2017' } ],
[ { teamId: 1610612746,
    seasonYear: '2014-15',
    teamCity: 'Los Angeles',
    teamName: 'Clippers',
    teamAbbreviation: 'LAC',
    teamConference: 'West',
    teamDivision: 'Pacific',
    teamCode: 'clippers',
    w: 56,
    l: 26,
    pct: 0.683,
    confRank: 3,
    divRank: 2,
    minYear: '1970',
    maxYear: '2017' } ],
[ { teamId: 1610612758,
    seasonYear: '2014-15',
    teamCity: 'Sacramento',
    teamName: 'Kings',
    teamAbbreviation: 'SAC',
    teamConference: 'West',
    teamDivision: 'Pacific',
    teamCode: 'kings',
    w: 29,
    l: 53,
    pct: 0.354,
    confRank: 13,
    divRank: 4,
    minYear: '1948',
    maxYear: '2017' } ],
[ { teamId: 1610612740,
    seasonYear: '2014-15',
    teamCity: 'New Orleans',
    teamName: 'Pelicans',
    teamAbbreviation: 'NOP',
    teamConference: 'West',
    teamDivision: 'Southwest',
    teamCode: 'pelicans',
    w: 45,
    l: 37,
    pct: 0.549,
    confRank: 8,
    divRank: 5,
    minYear: '2002',
    maxYear: '2017' } ],
[ { teamId: 1610612759,
    seasonYear: '2014-15',
    teamCity: 'San Antonio',
    teamName: 'Spurs',
    teamAbbreviation: 'SAS',
    teamConference: 'West',
    teamDivision: 'Southwest',
    teamCode: 'spurs',
    w: 55,
    l: 27,
    pct: 0.671,
    confRank: 6,
    divRank: 3,
    minYear: '1976',
    maxYear: '2017' } ],
[ { teamId: 1610612760,
    seasonYear: '2014-15',
    teamCity: 'Oklahoma City',
    teamName: 'Thunder',
    teamAbbreviation: 'OKC',
    teamConference: 'West',
    teamDivision: 'Northwest',
    teamCode: 'thunder',
    w: 45,
    l: 37,
    pct: 0.549,
    confRank: 9,
    divRank: 2,
    minYear: '1967',
    maxYear: '2017' } ],
[ { teamId: 1610612763,
    seasonYear: '2014-15',
    teamCity: 'Memphis',
    teamName: 'Grizzlies',
    teamAbbreviation: 'MEM',
    teamConference: 'West',
    teamDivision: 'Southwest',
    teamCode: 'grizzlies',
    w: 55,
    l: 27,
    pct: 0.671,
    confRank: 5,
    divRank: 2,
    minYear: '1995',
    maxYear: '2017' } ],
[ { teamId: 1610612745,
    seasonYear: '2014-15',
    teamCity: 'Houston',
    teamName: 'Rockets',
    teamAbbreviation: 'HOU',
    teamConference: 'West',
    teamDivision: 'Southwest',
    teamCode: 'rockets',
    w: 56,
    l: 26,
    pct: 0.683,
    confRank: 2,
    divRank: 1,
    minYear: '1967',
    maxYear: '2017' } ],
[ { teamId: 1610612751,
    seasonYear: '2014-15',
    teamCity: 'Brooklyn',
    teamName: 'Nets',
    teamAbbreviation: 'BKN',
    teamConference: 'East',
    teamDivision: 'Atlantic',
    teamCode: 'nets',
    w: 38,
    l: 44,
    pct: 0.463,
    confRank: 8,
    divRank: 3,
    minYear: '1976',
    maxYear: '2017' } ],
[ { teamId: 1610612741,
    seasonYear: '2014-15',
    teamCity: 'Chicago',
    teamName: 'Bulls',
    teamAbbreviation: 'CHI',
    teamConference: 'East',
    teamDivision: 'Central',
    teamCode: 'bulls',
    w: 50,
    l: 32,
    pct: 0.61,
    confRank: 3,
    divRank: 2,
    minYear: '1966',
    maxYear: '2017' } ],
[ { teamId: 1610612742,
    seasonYear: '2014-15',
    teamCity: 'Dallas',
    teamName: 'Mavericks',
    teamAbbreviation: 'DAL',
    teamConference: 'West',
    teamDivision: 'Southwest',
    teamCode: 'mavericks',
    w: 50,
    l: 32,
    pct: 0.61,
    confRank: 7,
    divRank: 4,
    minYear: '1980',
    maxYear: '2017' } ],
[ { teamId: 1610612757,
    seasonYear: '2014-15',
    teamCity: 'Portland',
    teamName: 'Trail Blazers',
    teamAbbreviation: 'POR',
    teamConference: 'West',
    teamDivision: 'Northwest',
    teamCode: 'blazers',
    w: 51,
    l: 31,
    pct: 0.622,
    confRank: 4,
    divRank: 1,
    minYear: '1970',
    maxYear: '2017' } ]]
};

/* harmony default export */ __webpack_exports__["a"] = (seasonData);


/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_movements__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_keys__ = __webpack_require__(466);




class Nodes {
  constructor() {

  }

  createNodes(seasonData, width, height) {
    const nodes = seasonData[2014].map((team) => {
      return {
        radius: team[0].w*.5,
        color: __WEBPACK_IMPORTED_MODULE_1__data_keys__["a" /* COLORS */][team[0].teamName].pri,
        stroke: __WEBPACK_IMPORTED_MODULE_1__data_keys__["a" /* COLORS */][team[0].teamName].sec
      };
    });

    var force = d3.layout.force()
        .gravity(.1)
        .charge(function(d, i) {
          return i ? -(d.radius*d.radius-100) : 0; })
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
        .style('stroke', function(d) {return d.stroke;})
        .style('stroke-width', 2);

    force.on("tick", function(e) {
      var q = d3.geom.quadtree(nodes),
          i = 0,
          n = nodes.length;

      while (++i < n) q.visit(Object(__WEBPACK_IMPORTED_MODULE_0__util_movements__["a" /* collide */])(nodes[i]));

      svg.selectAll("circle")
          .attr("cx", function(d) { return d.x; })
          .attr("cy", function(d) { return d.y; });
      force.resume(.1);
    });
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Nodes);


/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

const collide = (node) => {
  var r = node.radius+16,
      nx1 = node.x - r,
      nx2 = node.x + r,
      ny1 = node.y - r,
      ny2 = node.y + r;
  return function(quad, x1, y1, x2, y2) {
    if (quad.point && (quad.point !== node)) {
      var x = node.x - quad.point.x,
          y = node.y - quad.point.y,
          l = Math.sqrt(x * x + y * y),
          r = node.radius + quad.point.radius;
      if (l < r) {
        l = (l - r) / l * .5;
        node.x -= x *= l;
        node.y -= y *= l;
        quad.point.x += x;
        quad.point.y += y;
      }
    }
    return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
  };
};
/* harmony export (immutable) */ __webpack_exports__["a"] = collide;



/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const TEAMS = [
 1610612738,
 1610612751,
 1610612752,
 1610612755,
 1610612761,
 1610612741,
 1610612739,
 1610612765,
 1610612754,
 1610612749,
 1610612737,
 1610612766,
 1610612748,
 1610612753,
 1610612764,
 1610612743,
 1610612750,
 1610612760,
 1610612757,
 1610612762,
 1610612744,
 1610612746,
 1610612747,
 1610612756,
 1610612758,
 1610612742,
 1610612745,
 1610612763,
 1610612740,
 1610612759];

const COLORS = {
  'Bucks': {pri: '#E03A3E', sec: '#C4D600'},
  'Cavaliers': {pri: '#6F2633', sec: '#FFB81C'},
  'Knicks': {pri: '#F58426', sec: '#006BB6'},
  '76ers': {pri: '#006BB6', sec: '#ED174C'},
  'Timberwolves': {pri: '#002B5C', sec: '#005083'},
  'Celtics': {pri: '#008248', sec: '#BA9653'},
  'Pistons': {pri: '#ED174C', sec: '#0067B1'},
  'Heat': {pri: '#98002E', sec: '#000000'},
  'Pacers': {pri: '#002D62', sec: '#FDBB30'},
  'Nuggets': {pri: '#5091CD', sec: '#FDB927'},
  'Magic': {pri: '#0B77BD', sec: '#C2CCD2'},
  'Hornets': {pri: '#00788C', sec: '#1D1160'},
  'Raptors': {pri: '#CD1141', sec: '#A0A0A3'},
  'Hawks': {pri: '#E03A3E', sec: '#25282A'},
  'Wizards': {pri: '#002B5C', sec: '#E31837'},
  'Suns': {pri: '#E56020', sec: '#1D1160'},
  'Warriors': {pri: '#FFCD34', sec: '#243E90'},
  'Lakers': {pri: '#FDB927', sec: '#552583'},
  'Jazz': {pri: '#0C2340', sec: '#00471B'},
  'Clippers': {pri: '#ED174C', sec: '#006BB6'},
  'Kings': {pri: '#5A2D81', sec: '#63727A'},
  'Pelicans': {pri: '#002B5C', sec: '#B4975A'},
  'Spurs': {pri: '#C4CED4', sec: '#000000'},
  'Thunder': {pri: '#007AC1', sec: '#F05133'},
  'Grizzlies': {pri: '#6189B9', sec: '#00285E'},
  'Rockets': {pri: '#CE1141', sec: '#000000'},
  'Nets': {pri: '#000000', sec: '#FFFFFF'},
  'Bulls': {pri: '#CE1141', sec: '#000000'},
  'Mavericks': {pri: '#007DC5', sec: '#C4CED4'},
  'Trail Blazers': {pri: '#E13A3E', sec: '#C4CED4'},
};
/* harmony export (immutable) */ __webpack_exports__["a"] = COLORS;


const DIVISION = {
'null': null,
'Atlantic': 'Atlantic',
'Central': 'Central',
'Northwest': 'Northwest',
'Pacific': 'Pacific',
'Southeast': 'Southeast',
'Southwest': 'Southwest',
'East': 'East',
'West': 'West'};


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map