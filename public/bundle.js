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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var store = {
  activeTeam: null,
  selectedYear: 2013,
  nodes: null,
  seasonData: null,
  done: false
};

exports.default = store;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateNodeValues = exports.updateTeamContainer = undefined;

var _store = __webpack_require__(0);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var updateTeamContainer = exports.updateTeamContainer = function updateTeamContainer() {
  var teamContainer = document.getElementById('team-sidebar');

  teamContainer.innerHTML = '<h1>' + (_store2.default.activeTeam != null ? _store2.default.activeTeam.teamName : "") + '</h1>\n    <img src="/images/logos/' + (_store2.default.activeTeam != null ? _store2.default.activeTeam.logo : "nba.png") + '"></img>\n    <ul>\n      <li>Wins: ' + _store2.default.activeTeam.wins + '</li>\n      <li>Losses: ' + _store2.default.activeTeam.losses + '</li>\n    </ul>';
};

var updateNodeValues = exports.updateNodeValues = function updateNodeValues() {
  _store2.default.nodes.updateNodeValues();
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _data = __webpack_require__(3);

var _data2 = _interopRequireDefault(_data);

var _data_util = __webpack_require__(9);

var _nodes = __webpack_require__(4);

var _nodes2 = _interopRequireDefault(_nodes);

var _slider = __webpack_require__(7);

var _slider2 = _interopRequireDefault(_slider);

var _store = __webpack_require__(0);

var _store2 = _interopRequireDefault(_store);

var _team_data = __webpack_require__(8);

var _team_data2 = _interopRequireDefault(_team_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  //
  // $.ajax({
  //   url: '/team',
  //   method: 'get'
  // });


  var width = 700;
  var height = 600;

  var svg = d3.select("#svg-team-container").insert("svg", ":first-child").attr("width", width).attr("height", height);

  _store2.default.seasonData = (0, _data_util.parseSeasonData)(_team_data2.default);
  _store2.default.nodes = new _nodes2.default(svg, width, height);

  var slider = new _slider2.default();

  var teamContainer = document.getElementById("team-sidebar");
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var seasonData2 = {
    2013: {
        1610612765: {
            teamName: 'Pistons',
            w: 20,
            l: 53
        } },
    2014: {
        1610612765: {
            teamName: 'Pistons',
            w: 35,
            l: 50
        } }
};
//use d3 queue to get all data for one year, for each element in result put into array.
//create a node for each team, if certain team does not exist for given year then put in an array with
//a radius of zero
var seasonData = { 2013: [[{ teamId: 1610612765,
        seasonYear: '2013-14',
        teamCity: 'Detroit',
        teamName: 'Pistons',
        teamAbbreviation: 'DET',
        teamConference: 'East',
        teamDivision: 'Central',
        teamCode: 'pistons',
        w: 29,
        l: 53,
        pct: 0.354,
        confRank: 11,
        divRank: 4,
        minYear: '1948',
        maxYear: '2017' }], [{ teamId: 1610612746,
        seasonYear: '2013-14',
        teamCity: 'Los Angeles',
        teamName: 'Clippers',
        teamAbbreviation: 'LAC',
        teamConference: 'West',
        teamDivision: 'Pacific',
        teamCode: 'clippers',
        w: 57,
        l: 25,
        pct: 0.695,
        confRank: 3,
        divRank: 1,
        minYear: '1970',
        maxYear: '2017' }], [{ teamId: 1610612739,
        seasonYear: '2013-14',
        teamCity: 'Cleveland',
        teamName: 'Cavaliers',
        teamAbbreviation: 'CLE',
        teamConference: 'East',
        teamDivision: 'Central',
        teamCode: 'cavaliers',
        w: 33,
        l: 49,
        pct: 0.402,
        confRank: 10,
        divRank: 3,
        minYear: '1970',
        maxYear: '2017' }], [{ teamId: 1610612764,
        seasonYear: '2013-14',
        teamCity: 'Washington',
        teamName: 'Wizards',
        teamAbbreviation: 'WAS',
        teamConference: 'East',
        teamDivision: 'Southeast',
        teamCode: 'wizards',
        w: 44,
        l: 38,
        pct: 0.537,
        confRank: 5,
        divRank: 2,
        minYear: '1961',
        maxYear: '2017' }], [{ teamId: 1610612749,
        seasonYear: '2013-14',
        teamCity: 'Milwaukee',
        teamName: 'Bucks',
        teamAbbreviation: 'MIL',
        teamConference: 'East',
        teamDivision: 'Central',
        teamCode: 'bucks',
        w: 15,
        l: 67,
        pct: 0.183,
        confRank: 15,
        divRank: 5,
        minYear: '1968',
        maxYear: '2017' }], [{ teamId: 1610612738,
        seasonYear: '2013-14',
        teamCity: 'Boston',
        teamName: 'Celtics',
        teamAbbreviation: 'BOS',
        teamConference: 'East',
        teamDivision: 'Atlantic',
        teamCode: 'celtics',
        w: 25,
        l: 57,
        pct: 0.305,
        confRank: 12,
        divRank: 4,
        minYear: '1946',
        maxYear: '2017' }], [{ teamId: 1610612744,
        seasonYear: '2013-14',
        teamCity: 'Golden State',
        teamName: 'Warriors',
        teamAbbreviation: 'GSW',
        teamConference: 'West',
        teamDivision: 'Pacific',
        teamCode: 'warriors',
        w: 51,
        l: 31,
        pct: 0.622,
        confRank: 6,
        divRank: 2,
        minYear: '1946',
        maxYear: '2017' }], [{ teamId: 1610612758,
        seasonYear: '2013-14',
        teamCity: 'Sacramento',
        teamName: 'Kings',
        teamAbbreviation: 'SAC',
        teamConference: 'West',
        teamDivision: 'Pacific',
        teamCode: 'kings',
        w: 28,
        l: 54,
        pct: 0.341,
        confRank: 13,
        divRank: 4,
        minYear: '1948',
        maxYear: '2017' }], [{ teamId: 1610612747,
        seasonYear: '2013-14',
        teamCity: 'Los Angeles',
        teamName: 'Lakers',
        teamAbbreviation: 'LAL',
        teamConference: 'West',
        teamDivision: 'Pacific',
        teamCode: 'lakers',
        w: 27,
        l: 55,
        pct: 0.329,
        confRank: 14,
        divRank: 5,
        minYear: '1948',
        maxYear: '2017' }], [{ teamId: 1610612740,
        seasonYear: '2013-14',
        teamCity: 'New Orleans',
        teamName: 'Pelicans',
        teamAbbreviation: 'NOP',
        teamConference: 'West',
        teamDivision: 'Southwest',
        teamCode: 'pelicans',
        w: 34,
        l: 48,
        pct: 0.415,
        confRank: 12,
        divRank: 5,
        minYear: '2002',
        maxYear: '2017' }], [{ teamId: 1610612756,
        seasonYear: '2013-14',
        teamCity: 'Phoenix',
        teamName: 'Suns',
        teamAbbreviation: 'PHX',
        teamConference: 'West',
        teamDivision: 'Pacific',
        teamCode: 'suns',
        w: 48,
        l: 34,
        pct: 0.585,
        confRank: 9,
        divRank: 3,
        minYear: '1968',
        maxYear: '2017' }], [{ teamId: 1610612754,
        seasonYear: '2013-14',
        teamCity: 'Indiana',
        teamName: 'Pacers',
        teamAbbreviation: 'IND',
        teamConference: 'East',
        teamDivision: 'Central',
        teamCode: 'pacers',
        w: 56,
        l: 26,
        pct: 0.683,
        confRank: 1,
        divRank: 1,
        minYear: '1976',
        maxYear: '2017' }], [{ teamId: 1610612752,
        seasonYear: '2013-14',
        teamCity: 'New York',
        teamName: 'Knicks',
        teamAbbreviation: 'NYK',
        teamConference: 'East',
        teamDivision: 'Atlantic',
        teamCode: 'knicks',
        w: 37,
        l: 45,
        pct: 0.451,
        confRank: 9,
        divRank: 3,
        minYear: '1946',
        maxYear: '2017' }], [{ teamId: 1610612760,
        seasonYear: '2013-14',
        teamCity: 'Oklahoma City',
        teamName: 'Thunder',
        teamAbbreviation: 'OKC',
        teamConference: 'West',
        teamDivision: 'Northwest',
        teamCode: 'thunder',
        w: 59,
        l: 23,
        pct: 0.72,
        confRank: 2,
        divRank: 1,
        minYear: '1967',
        maxYear: '2017' }], [{ teamId: 1610612755,
        seasonYear: '2013-14',
        teamCity: 'Philadelphia',
        teamName: '76ers',
        teamAbbreviation: 'PHI',
        teamConference: 'East',
        teamDivision: 'Atlantic',
        teamCode: 'sixers',
        w: 19,
        l: 63,
        pct: 0.232,
        confRank: 14,
        divRank: 5,
        minYear: '1949',
        maxYear: '2017' }], [{ teamId: 1610612761,
        seasonYear: '2013-14',
        teamCity: 'Toronto',
        teamName: 'Raptors',
        teamAbbreviation: 'TOR',
        teamConference: 'East',
        teamDivision: 'Atlantic',
        teamCode: 'raptors',
        w: 48,
        l: 34,
        pct: 0.585,
        confRank: 3,
        divRank: 1,
        minYear: '1995',
        maxYear: '2017' }], [{ teamId: 1610612748,
        seasonYear: '2013-14',
        teamCity: 'Miami',
        teamName: 'Heat',
        teamAbbreviation: 'MIA',
        teamConference: 'East',
        teamDivision: 'Southeast',
        teamCode: 'heat',
        w: 54,
        l: 28,
        pct: 0.659,
        confRank: 2,
        divRank: 1,
        minYear: '1988',
        maxYear: '2017' }], [{ teamId: 1610612745,
        seasonYear: '2013-14',
        teamCity: 'Houston',
        teamName: 'Rockets',
        teamAbbreviation: 'HOU',
        teamConference: 'West',
        teamDivision: 'Southwest',
        teamCode: 'rockets',
        w: 54,
        l: 28,
        pct: 0.659,
        confRank: 4,
        divRank: 2,
        minYear: '1967',
        maxYear: '2017' }], [{ teamId: 1610612742,
        seasonYear: '2013-14',
        teamCity: 'Dallas',
        teamName: 'Mavericks',
        teamAbbreviation: 'DAL',
        teamConference: 'West',
        teamDivision: 'Southwest',
        teamCode: 'mavericks',
        w: 49,
        l: 33,
        pct: 0.598,
        confRank: 8,
        divRank: 4,
        minYear: '1980',
        maxYear: '2017' }], [{ teamId: 1610612762,
        seasonYear: '2013-14',
        teamCity: 'Utah',
        teamName: 'Jazz',
        teamAbbreviation: 'UTA',
        teamConference: 'West',
        teamDivision: 'Northwest',
        teamCode: 'jazz',
        w: 25,
        l: 57,
        pct: 0.305,
        confRank: 15,
        divRank: 5,
        minYear: '1974',
        maxYear: '2017' }], [{ teamId: 1610612737,
        seasonYear: '2013-14',
        teamCity: 'Atlanta',
        teamName: 'Hawks',
        teamAbbreviation: 'ATL',
        teamConference: 'East',
        teamDivision: 'Southeast',
        teamCode: 'hawks',
        w: 38,
        l: 44,
        pct: 0.463,
        confRank: 8,
        divRank: 4,
        minYear: '1949',
        maxYear: '2017' }], [{ teamId: 1610612766,
        seasonYear: '2013-14',
        teamCity: 'Charlotte',
        teamName: 'Bobcats',
        teamAbbreviation: 'CHA',
        teamConference: 'East',
        teamDivision: 'Southeast',
        teamCode: 'hornets',
        w: 43,
        l: 39,
        pct: 0.524,
        confRank: 7,
        divRank: 3,
        minYear: '1988',
        maxYear: '2017' }], [{ teamId: 1610612763,
        seasonYear: '2013-14',
        teamCity: 'Memphis',
        teamName: 'Grizzlies',
        teamAbbreviation: 'MEM',
        teamConference: 'West',
        teamDivision: 'Southwest',
        teamCode: 'grizzlies',
        w: 50,
        l: 32,
        pct: 0.61,
        confRank: 7,
        divRank: 3,
        minYear: '1995',
        maxYear: '2017' }], [{ teamId: 1610612757,
        seasonYear: '2013-14',
        teamCity: 'Portland',
        teamName: 'Trail Blazers',
        teamAbbreviation: 'POR',
        teamConference: 'West',
        teamDivision: 'Northwest',
        teamCode: 'blazers',
        w: 54,
        l: 28,
        pct: 0.659,
        confRank: 5,
        divRank: 2,
        minYear: '1970',
        maxYear: '2017' }], [{ teamId: 1610612743,
        seasonYear: '2013-14',
        teamCity: 'Denver',
        teamName: 'Nuggets',
        teamAbbreviation: 'DEN',
        teamConference: 'West',
        teamDivision: 'Northwest',
        teamCode: 'nuggets',
        w: 36,
        l: 46,
        pct: 0.439,
        confRank: 11,
        divRank: 4,
        minYear: '1976',
        maxYear: '2017' }], [{ teamId: 1610612759,
        seasonYear: '2013-14',
        teamCity: 'San Antonio',
        teamName: 'Spurs',
        teamAbbreviation: 'SAS',
        teamConference: 'West',
        teamDivision: 'Southwest',
        teamCode: 'spurs',
        w: 62,
        l: 20,
        pct: 0.756,
        confRank: 1,
        divRank: 1,
        minYear: '1976',
        maxYear: '2017' }], [{ teamId: 1610612753,
        seasonYear: '2013-14',
        teamCity: 'Orlando',
        teamName: 'Magic',
        teamAbbreviation: 'ORL',
        teamConference: 'East',
        teamDivision: 'Southeast',
        teamCode: 'magic',
        w: 23,
        l: 59,
        pct: 0.28,
        confRank: 13,
        divRank: 5,
        minYear: '1989',
        maxYear: '2017' }], [{ teamId: 1610612741,
        seasonYear: '2013-14',
        teamCity: 'Chicago',
        teamName: 'Bulls',
        teamAbbreviation: 'CHI',
        teamConference: 'East',
        teamDivision: 'Central',
        teamCode: 'bulls',
        w: 48,
        l: 34,
        pct: 0.585,
        confRank: 4,
        divRank: 2,
        minYear: '1966',
        maxYear: '2017' }], [{ teamId: 1610612751,
        seasonYear: '2013-14',
        teamCity: 'Brooklyn',
        teamName: 'Nets',
        teamAbbreviation: 'BKN',
        teamConference: 'East',
        teamDivision: 'Atlantic',
        teamCode: 'nets',
        w: 44,
        l: 38,
        pct: 0.537,
        confRank: 6,
        divRank: 2,
        minYear: '1976',
        maxYear: '2017' }], [{ teamId: 1610612750,
        seasonYear: '2013-14',
        teamCity: 'Minnesota',
        teamName: 'Timberwolves',
        teamAbbreviation: 'MIN',
        teamConference: 'West',
        teamDivision: 'Northwest',
        teamCode: 'timberwolves',
        w: 40,
        l: 42,
        pct: 0.488,
        confRank: 10,
        divRank: 3,
        minYear: '1989',
        maxYear: '2017' }]],
    2014: [[{ teamId: 1610612749,
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
        maxYear: '2017' }], [{ teamId: 1610612739,
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
        maxYear: '2017' }], [{ teamId: 1610612752,
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
        maxYear: '2017' }], [{ teamId: 1610612755,
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
        maxYear: '2017' }], [{ teamId: 1610612750,
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
        maxYear: '2017' }], [{ teamId: 1610612738,
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
        maxYear: '2017' }], [{ teamId: 1610612765,
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
        maxYear: '2017' }], [{ teamId: 1610612748,
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
        maxYear: '2017' }], [{ teamId: 1610612754,
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
        maxYear: '2017' }], [{ teamId: 1610612743,
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
        maxYear: '2017' }], [{ teamId: 1610612753,
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
        maxYear: '2017' }], [{ teamId: 1610612766,
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
        maxYear: '2017' }], [{ teamId: 1610612761,
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
        maxYear: '2017' }], [{ teamId: 1610612737,
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
        maxYear: '2017' }], [{ teamId: 1610612764,
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
        maxYear: '2017' }], [{ teamId: 1610612756,
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
        maxYear: '2017' }], [{ teamId: 1610612744,
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
        maxYear: '2017' }], [{ teamId: 1610612747,
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
        maxYear: '2017' }], [{ teamId: 1610612762,
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
        maxYear: '2017' }], [{ teamId: 1610612746,
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
        maxYear: '2017' }], [{ teamId: 1610612758,
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
        maxYear: '2017' }], [{ teamId: 1610612740,
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
        maxYear: '2017' }], [{ teamId: 1610612759,
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
        maxYear: '2017' }], [{ teamId: 1610612760,
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
        maxYear: '2017' }], [{ teamId: 1610612763,
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
        maxYear: '2017' }], [{ teamId: 1610612745,
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
        maxYear: '2017' }], [{ teamId: 1610612751,
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
        maxYear: '2017' }], [{ teamId: 1610612741,
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
        maxYear: '2017' }], [{ teamId: 1610612742,
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
        maxYear: '2017' }], [{ teamId: 1610612757,
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
        maxYear: '2017' }]]
};

exports.default = seasonData;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _movements = __webpack_require__(5);

var _store = __webpack_require__(0);

var _store2 = _interopRequireDefault(_store);

var _keys = __webpack_require__(6);

var _store_update_actions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Nodes = function () {
  function Nodes(svg, width, height) {
    _classCallCheck(this, Nodes);

    this.svg = svg;
    this.width = width;
    this.height = height;
    this.nodeValues = this.createNodes();

    this.handleTick = this.handleTick.bind(this);
    this.handleMouseover = this.handleMouseover.bind(this);
    this.handleMouseout = this.handleMouseout.bind(this);

    this.force.on("tick", this.handleTick);
  }

  _createClass(Nodes, [{
    key: 'createNodes',
    value: function createNodes() {
      var _this = this;

      var nodeValues = this.getNodeValuesFromStore();
      var selectedNodes = this.selectAllNodes();

      selectedNodes.data(nodeValues).enter().append("circle").attr("r", function (d) {
        return d.radius;
      }).attr('id', function (d) {
        return d.teamName;
      }).attr('cx', function (d) {
        return Math.random() * _this.width;
      }).attr('cy', function (d) {
        return Math.random() * _this.height;
      }).style("fill", function (d) {
        return d.color;
      }).style('stroke', function (d) {
        return d.stroke;
      }).style('stroke-width', 3);

      this.svg.selectAll("circle").on('mouseover', this.handleMouseover);
      // .on('mouseout', this.handleMouseout);

      this.force = this.createForce(nodeValues);
      return nodeValues;
    }
  }, {
    key: 'createForce',
    value: function createForce(nodeValues) {
      var force = d3.layout.force().gravity(.1).charge(function (d, i) {
        return i ? -d.radius * 9 : 0;
      }).nodes(nodeValues).size([this.width, this.height]);
      force.start();
      return force;
    }
  }, {
    key: 'handleTick',
    value: function handleTick(e) {
      var q = d3.geom.quadtree(this.nodeValues),
          i = 0,
          j = 0,
          n = this.nodeValues.length;

      while (++i < n) {
        q.visit((0, _movements.collide)(this.nodeValues[i]));
      }while (++j < n) {
        (0, _movements.boundaries)(this.nodeValues[j], this.width, this.height);
      }console.log(this.nodeValues[0]);
      if (_store2.default.done == true) {
        debugger;
        console.log(this);
      }

      this.svg.selectAll("circle").attr("cx", function (d) {
        return d.x;
      }).attr("cy", function (d) {
        return d.y;
      });

      this.force.resume(.1);
    }
  }, {
    key: 'getNodeValuesFromStore',
    value: function getNodeValuesFromStore() {
      var nodes = _store2.default.seasonData[String(_store2.default.selectedYear)].map(function (team) {
        return {
          radius: team.w * .7,
          color: _keys.STYLING[team.teamName] ? _keys.STYLING[team.teamName].pri : 'white',
          stroke: _keys.STYLING[team.teamName] ? _keys.STYLING[team.teamName].sec : 'black',
          teamName: team.teamName,
          logo: _keys.STYLING[team.teamName] ? _keys.STYLING[team.teamName].logo : null,
          wins: team.w,
          losses: team.l
        };
      });
      return nodes;
    }
  }, {
    key: 'selectAllNodes',
    value: function selectAllNodes() {
      return this.svg.selectAll("circle");
    }
  }, {
    key: 'updateNodeValues',
    value: function updateNodeValues() {
      // const nodes = this.selectAllNodes().remove();

      // this.nodeValues = this.createNodes();

      var nodes = this.selectAllNodes().data(this.getNodeValuesFromStore());

      nodes.attr('r', function (d) {
        return d.radius;
      });
      // .attr('cx', (d, i) => {
      //   // return this.nodeValues[i].x;
      //   return 100;
      // })
      // .attr('cy', (d, i) => {
      //   // return this.nodeValues[i].y;
      //   return 100;
      // });

      _store2.default.done = true;

      //
      // nodes.enter().append('circle')
      //   .attr('id', function(d) { return d.teamName; })
      //   .attr("r", function(d) { return d.radius; })
      //   .style("fill", function(d) { return d.color; })
      //   .style('stroke', function(d) {return d.stroke;})
      //   .style('stroke-width', 2);
    }
  }, {
    key: 'handleMouseover',
    value: function handleMouseover(d) {
      _store2.default.activeTeam = d;
      (0, _store_update_actions.updateTeamContainer)();
    }
  }, {
    key: 'handleMouseout',
    value: function handleMouseout(d) {
      _store2.default.activeTeam = null;
      (0, _store_update_actions.updateTeamContainer)();
    }
  }]);

  return Nodes;
}();

exports.default = Nodes;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.collide = exports.boundaries = undefined;

var _store = __webpack_require__(0);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var boundaries = exports.boundaries = function boundaries(node, width, height) {
  if (node.x - node.radius < 0) {
    node.x = node.radius;
  } else if (node.x + node.radius > width) {
    node.x = width - node.radius;
  }

  if (node.y - node.radius < 0) {
    node.y = node.radius;
  } else if (node.y + node.radius > height) {
    node.y = height - node.radius;
  }
};

var collide = exports.collide = function collide(node) {
  var r = node.radius + 200,
      nx1 = node.x - r,
      nx2 = node.x + r,
      ny1 = node.y - r,
      ny2 = node.y + r;
  return function (quad, x1, y1, x2, y2) {
    if (quad.point && quad.point !== node) {
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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var STYLING = exports.STYLING = {
  'Bucks': { pri: '#E03A3E', sec: '#C4D600', logo: 'bucks.png' },
  'Cavaliers': { pri: '#6F2633', sec: '#FFB81C', logo: 'cavaliers.png' },
  'Knicks': { pri: '#F58426', sec: '#006BB6', logo: 'knicks.png' },
  '76ers': { pri: '#006BB6', sec: '#ED174C', logo: '76ers.png' },
  'Timberwolves': { pri: '#002B5C', sec: '#005083', logo: 'timberwolves.png' },
  'Celtics': { pri: '#008248', sec: '#BA9653', logo: 'celtics.png' },
  'Pistons': { pri: '#ED174C', sec: '#0067B1', logo: 'pistons.png' },
  'Heat': { pri: '#98002E', sec: '#000000', logo: 'heat.png' },
  'Pacers': { pri: '#002D62', sec: '#FDBB30', logo: 'pacers.png' },
  'Nuggets': { pri: '#5091CD', sec: '#FDB927', logo: 'nuggets.png' },
  'Magic': { pri: '#0B77BD', sec: '#C2CCD2', logo: 'magic.png' },
  'Hornets': { pri: '#00788C', sec: '#1D1160', logo: 'hornets.png' },
  'Raptors': { pri: '#CD1141', sec: '#A0A0A3', logo: 'raptors.png' },
  'Hawks': { pri: '#E03A3E', sec: '#C4D600', logo: 'hawks.png' },
  'Wizards': { pri: '#002B5C', sec: '#E31837', logo: 'wizards.png' },
  'Suns': { pri: '#E56020', sec: '#1D1160', logo: 'suns.png' },
  'Warriors': { pri: '#FFCD34', sec: '#243E90', logo: 'warriors.png' },
  'Lakers': { pri: '#FDB927', sec: '#552583', logo: 'lakers.png' },
  'Jazz': { pri: '#0C2340', sec: '#00471B', logo: 'jazz.png' },
  'Clippers': { pri: '#ED174C', sec: '#006BB6', logo: 'clippers.png' },
  'Kings': { pri: '#5A2D81', sec: '#63727A', logo: 'kings.png' },
  'Pelicans': { pri: '#002B5C', sec: '#B4975A', logo: 'pelicans.png' },
  'Spurs': { pri: '#C4CED4', sec: '#000000', logo: 'spurs.png' },
  'Thunder': { pri: '#007AC1', sec: '#F05133', logo: 'thunder.png' },
  'Grizzlies': { pri: '#6189B9', sec: '#00285E', logo: 'grizzlies.png' },
  'Rockets': { pri: '#CE1141', sec: '#000000', logo: 'rockets.png' },
  'Nets': { pri: '#000000', sec: '#FFFFFF', logo: 'nets.png' },
  'Bulls': { pri: '#CE1141', sec: '#000000', logo: 'bulls.png' },
  'Mavericks': { pri: '#007DC5', sec: '#C4CED4', logo: 'mavericks.png' },
  'Trail Blazers': { pri: '#E13A3E', sec: '#C4CED4', logo: 'trail_blazers.png' },
  'Bobcats': { pri: '#00295b', sec: '#5097d2', logo: 'bobcats.png' }
};

var DIVISION = {
  'null': null,
  'Atlantic': 'Atlantic',
  'Central': 'Central',
  'Northwest': 'Northwest',
  'Pacific': 'Pacific',
  'Southeast': 'Southeast',
  'Southwest': 'Southwest',
  'East': 'East',
  'West': 'West' };

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _store = __webpack_require__(0);

var _store2 = _interopRequireDefault(_store);

var _store_update_actions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Slider = function () {
  function Slider() {
    _classCallCheck(this, Slider);

    this.createSlider();
    this.handleChange();
  }

  _createClass(Slider, [{
    key: 'createSlider',
    value: function createSlider() {
      var mainContainer = document.getElementById('main-container');
      var slider = document.createElement('input');
      slider.setAttribute('type', 'range');
      slider.setAttribute('min', '2013');
      slider.setAttribute('max', '2014');
      slider.setAttribute('step', '1');
      slider.setAttribute('id', 'year-slider');

      mainContainer.appendChild(slider);
      // '<input id="year-slider" type="range" min="2013" max="2014" step="1"/>'
    }
  }, {
    key: 'handleChange',
    value: function handleChange() {
      var slider = document.getElementById('year-slider');
      slider.onchange = function (e) {
        _store2.default.selectedYear = e.target.value;
        (0, _store_update_actions.updateNodeValues)();
      };
    }
  }]);

  return Slider;
}();

exports.default = Slider;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {"1996":{"1610612737":{"teamName":"Hawks","w":56,"l":26},"1610612738":{"teamName":"Celtics","w":15,"l":67},"1610612739":{"teamName":"Cavaliers","w":42,"l":40},"1610612740":{},"1610612741":{"teamName":"Bulls","w":69,"l":13},"1610612742":{"teamName":"Mavericks","w":24,"l":58},"1610612743":{"teamName":"Nuggets","w":21,"l":61},"1610612744":{"teamName":"Warriors","w":30,"l":52},"1610612745":{"teamName":"Rockets","w":57,"l":25},"1610612746":{"teamName":"Clippers","w":36,"l":46},"1610612747":{"teamName":"Lakers","w":56,"l":26},"1610612748":{"teamName":"Heat","w":61,"l":21},"1610612749":{"teamName":"Bucks","w":33,"l":49},"1610612750":{"teamName":"Timberwolves","w":40,"l":42},"1610612751":{"teamName":"Nets","w":26,"l":56},"1610612752":{"teamName":"Knicks","w":57,"l":25},"1610612753":{"teamName":"Magic","w":45,"l":37},"1610612754":{"teamName":"Pacers","w":39,"l":43},"1610612755":{"teamName":"76ers","w":22,"l":60},"1610612756":{"teamName":"Suns","w":40,"l":42},"1610612757":{"teamName":"Trail Blazers","w":49,"l":33},"1610612758":{"teamName":"Kings","w":34,"l":48},"1610612759":{"teamName":"Spurs","w":20,"l":62},"1610612760":{"teamName":"SuperSonics","w":57,"l":25},"1610612761":{"teamName":"Raptors","w":30,"l":52},"1610612762":{"teamName":"Jazz","w":64,"l":18},"1610612763":{"teamName":"Grizzlies","w":14,"l":68},"1610612764":{"teamName":"Bullets","w":44,"l":38},"1610612765":{"teamName":"Pistons","w":54,"l":28},"1610612766":{"teamName":"Hornets","w":54,"l":28}},"1997":{"1610612737":{"teamName":"Hawks","w":50,"l":32},"1610612738":{"teamName":"Celtics","w":36,"l":46},"1610612739":{"teamName":"Cavaliers","w":47,"l":35},"1610612740":{},"1610612741":{"teamName":"Bulls","w":62,"l":20},"1610612742":{"teamName":"Mavericks","w":20,"l":62},"1610612743":{"teamName":"Nuggets","w":11,"l":71},"1610612744":{"teamName":"Warriors","w":19,"l":63},"1610612745":{"teamName":"Rockets","w":41,"l":41},"1610612746":{"teamName":"Clippers","w":17,"l":65},"1610612747":{"teamName":"Lakers","w":61,"l":21},"1610612748":{"teamName":"Heat","w":55,"l":27},"1610612749":{"teamName":"Bucks","w":36,"l":46},"1610612750":{"teamName":"Timberwolves","w":45,"l":37},"1610612751":{"teamName":"Nets","w":43,"l":39},"1610612752":{"teamName":"Knicks","w":43,"l":39},"1610612753":{"teamName":"Magic","w":41,"l":41},"1610612754":{"teamName":"Pacers","w":58,"l":24},"1610612755":{"teamName":"76ers","w":31,"l":51},"1610612756":{"teamName":"Suns","w":56,"l":26},"1610612757":{"teamName":"Trail Blazers","w":46,"l":36},"1610612758":{"teamName":"Kings","w":27,"l":55},"1610612759":{"teamName":"Spurs","w":56,"l":26},"1610612760":{"teamName":"SuperSonics","w":61,"l":21},"1610612761":{"teamName":"Raptors","w":16,"l":66},"1610612762":{"teamName":"Jazz","w":62,"l":20},"1610612763":{"teamName":"Grizzlies","w":19,"l":63},"1610612764":{"teamName":"Wizards","w":42,"l":40},"1610612765":{"teamName":"Pistons","w":37,"l":45},"1610612766":{"teamName":"Hornets","w":51,"l":31}},"1998":{"1610612737":{"teamName":"Hawks","w":31,"l":19},"1610612738":{"teamName":"Celtics","w":19,"l":31},"1610612739":{"teamName":"Cavaliers","w":22,"l":28},"1610612740":{},"1610612741":{"teamName":"Bulls","w":13,"l":37},"1610612742":{"teamName":"Mavericks","w":19,"l":31},"1610612743":{"teamName":"Nuggets","w":14,"l":36},"1610612744":{"teamName":"Warriors","w":21,"l":29},"1610612745":{"teamName":"Rockets","w":31,"l":19},"1610612746":{"teamName":"Clippers","w":9,"l":41},"1610612747":{"teamName":"Lakers","w":31,"l":19},"1610612748":{"teamName":"Heat","w":33,"l":17},"1610612749":{"teamName":"Bucks","w":28,"l":22},"1610612750":{"teamName":"Timberwolves","w":25,"l":25},"1610612751":{"teamName":"Nets","w":16,"l":34},"1610612752":{"teamName":"Knicks","w":27,"l":23},"1610612753":{"teamName":"Magic","w":33,"l":17},"1610612754":{"teamName":"Pacers","w":33,"l":17},"1610612755":{"teamName":"76ers","w":28,"l":22},"1610612756":{"teamName":"Suns","w":27,"l":23},"1610612757":{"teamName":"Trail Blazers","w":35,"l":15},"1610612758":{"teamName":"Kings","w":27,"l":23},"1610612759":{"teamName":"Spurs","w":37,"l":13},"1610612760":{"teamName":"SuperSonics","w":25,"l":25},"1610612761":{"teamName":"Raptors","w":23,"l":27},"1610612762":{"teamName":"Jazz","w":37,"l":13},"1610612763":{"teamName":"Grizzlies","w":8,"l":42},"1610612764":{"teamName":"Wizards","w":18,"l":32},"1610612765":{"teamName":"Pistons","w":29,"l":21},"1610612766":{"teamName":"Hornets","w":26,"l":24}},"1999":{"1610612737":{"teamName":"Hawks","w":28,"l":54},"1610612738":{"teamName":"Celtics","w":35,"l":47},"1610612739":{"teamName":"Cavaliers","w":32,"l":50},"1610612740":{},"1610612741":{"teamName":"Bulls","w":17,"l":65},"1610612742":{"teamName":"Mavericks","w":40,"l":42},"1610612743":{"teamName":"Nuggets","w":35,"l":47},"1610612744":{"teamName":"Warriors","w":19,"l":63},"1610612745":{"teamName":"Rockets","w":34,"l":48},"1610612746":{"teamName":"Clippers","w":15,"l":67},"1610612747":{"teamName":"Lakers","w":67,"l":15},"1610612748":{"teamName":"Heat","w":52,"l":30},"1610612749":{"teamName":"Bucks","w":42,"l":40},"1610612750":{"teamName":"Timberwolves","w":50,"l":32},"1610612751":{"teamName":"Nets","w":31,"l":51},"1610612752":{"teamName":"Knicks","w":50,"l":32},"1610612753":{"teamName":"Magic","w":41,"l":41},"1610612754":{"teamName":"Pacers","w":56,"l":26},"1610612755":{"teamName":"76ers","w":49,"l":33},"1610612756":{"teamName":"Suns","w":53,"l":29},"1610612757":{"teamName":"Trail Blazers","w":59,"l":23},"1610612758":{"teamName":"Kings","w":44,"l":38},"1610612759":{"teamName":"Spurs","w":53,"l":29},"1610612760":{"teamName":"SuperSonics","w":45,"l":37},"1610612761":{"teamName":"Raptors","w":45,"l":37},"1610612762":{"teamName":"Jazz","w":55,"l":27},"1610612763":{"teamName":"Grizzlies","w":22,"l":60},"1610612764":{"teamName":"Wizards","w":29,"l":53},"1610612765":{"teamName":"Pistons","w":42,"l":40},"1610612766":{"teamName":"Hornets","w":49,"l":33}},"2000":{"1610612737":{"teamName":"Hawks","w":25,"l":57},"1610612738":{"teamName":"Celtics","w":36,"l":46},"1610612739":{"teamName":"Cavaliers","w":30,"l":52},"1610612740":{},"1610612741":{"teamName":"Bulls","w":15,"l":67},"1610612742":{"teamName":"Mavericks","w":53,"l":29},"1610612743":{"teamName":"Nuggets","w":40,"l":42},"1610612744":{"teamName":"Warriors","w":17,"l":65},"1610612745":{"teamName":"Rockets","w":45,"l":37},"1610612746":{"teamName":"Clippers","w":31,"l":51},"1610612747":{"teamName":"Lakers","w":56,"l":26},"1610612748":{"teamName":"Heat","w":50,"l":32},"1610612749":{"teamName":"Bucks","w":52,"l":30},"1610612750":{"teamName":"Timberwolves","w":47,"l":35},"1610612751":{"teamName":"Nets","w":26,"l":56},"1610612752":{"teamName":"Knicks","w":48,"l":34},"1610612753":{"teamName":"Magic","w":43,"l":39},"1610612754":{"teamName":"Pacers","w":41,"l":41},"1610612755":{"teamName":"76ers","w":56,"l":26},"1610612756":{"teamName":"Suns","w":51,"l":31},"1610612757":{"teamName":"Trail Blazers","w":50,"l":32},"1610612758":{"teamName":"Kings","w":55,"l":27},"1610612759":{"teamName":"Spurs","w":58,"l":24},"1610612760":{"teamName":"SuperSonics","w":44,"l":38},"1610612761":{"teamName":"Raptors","w":47,"l":35},"1610612762":{"teamName":"Jazz","w":53,"l":29},"1610612763":{"teamName":"Grizzlies","w":23,"l":59},"1610612764":{"teamName":"Wizards","w":19,"l":63},"1610612765":{"teamName":"Pistons","w":32,"l":50},"1610612766":{"teamName":"Hornets","w":46,"l":36}},"2001":{"1610612737":{"teamName":"Hawks","w":33,"l":49},"1610612738":{"teamName":"Celtics","w":49,"l":33},"1610612739":{"teamName":"Cavaliers","w":29,"l":53},"1610612740":{},"1610612741":{"teamName":"Bulls","w":21,"l":61},"1610612742":{"teamName":"Mavericks","w":57,"l":25},"1610612743":{"teamName":"Nuggets","w":27,"l":55},"1610612744":{"teamName":"Warriors","w":21,"l":61},"1610612745":{"teamName":"Rockets","w":28,"l":54},"1610612746":{"teamName":"Clippers","w":39,"l":43},"1610612747":{"teamName":"Lakers","w":58,"l":24},"1610612748":{"teamName":"Heat","w":36,"l":46},"1610612749":{"teamName":"Bucks","w":41,"l":41},"1610612750":{"teamName":"Timberwolves","w":50,"l":32},"1610612751":{"teamName":"Nets","w":52,"l":30},"1610612752":{"teamName":"Knicks","w":30,"l":52},"1610612753":{"teamName":"Magic","w":44,"l":38},"1610612754":{"teamName":"Pacers","w":42,"l":40},"1610612755":{"teamName":"76ers","w":43,"l":39},"1610612756":{"teamName":"Suns","w":36,"l":46},"1610612757":{"teamName":"Trail Blazers","w":49,"l":33},"1610612758":{"teamName":"Kings","w":61,"l":21},"1610612759":{"teamName":"Spurs","w":58,"l":24},"1610612760":{"teamName":"SuperSonics","w":45,"l":37},"1610612761":{"teamName":"Raptors","w":42,"l":40},"1610612762":{"teamName":"Jazz","w":44,"l":38},"1610612763":{"teamName":"Grizzlies","w":23,"l":59},"1610612764":{"teamName":"Wizards","w":37,"l":45},"1610612765":{"teamName":"Pistons","w":50,"l":32},"1610612766":{"teamName":"Hornets","w":44,"l":38}},"2002":{"1610612737":{"teamName":"Hawks","w":35,"l":47},"1610612738":{"teamName":"Celtics","w":44,"l":38},"1610612739":{"teamName":"Cavaliers","w":17,"l":65},"1610612740":{"teamName":"Hornets","w":47,"l":35},"1610612741":{"teamName":"Bulls","w":30,"l":52},"1610612742":{"teamName":"Mavericks","w":60,"l":22},"1610612743":{"teamName":"Nuggets","w":17,"l":65},"1610612744":{"teamName":"Warriors","w":38,"l":44},"1610612745":{"teamName":"Rockets","w":43,"l":39},"1610612746":{"teamName":"Clippers","w":27,"l":55},"1610612747":{"teamName":"Lakers","w":50,"l":32},"1610612748":{"teamName":"Heat","w":25,"l":57},"1610612749":{"teamName":"Bucks","w":42,"l":40},"1610612750":{"teamName":"Timberwolves","w":51,"l":31},"1610612751":{"teamName":"Nets","w":49,"l":33},"1610612752":{"teamName":"Knicks","w":37,"l":45},"1610612753":{"teamName":"Magic","w":42,"l":40},"1610612754":{"teamName":"Pacers","w":48,"l":34},"1610612755":{"teamName":"76ers","w":48,"l":34},"1610612756":{"teamName":"Suns","w":44,"l":38},"1610612757":{"teamName":"Trail Blazers","w":50,"l":32},"1610612758":{"teamName":"Kings","w":59,"l":23},"1610612759":{"teamName":"Spurs","w":60,"l":22},"1610612760":{"teamName":"SuperSonics","w":40,"l":42},"1610612761":{"teamName":"Raptors","w":24,"l":58},"1610612762":{"teamName":"Jazz","w":47,"l":35},"1610612763":{"teamName":"Grizzlies","w":28,"l":54},"1610612764":{"teamName":"Wizards","w":37,"l":45},"1610612765":{"teamName":"Pistons","w":50,"l":32},"1610612766":{}},"2003":{"1610612737":{"teamName":"Hawks","w":28,"l":54},"1610612738":{"teamName":"Celtics","w":36,"l":46},"1610612739":{"teamName":"Cavaliers","w":35,"l":47},"1610612740":{"teamName":"Hornets","w":41,"l":41},"1610612741":{"teamName":"Bulls","w":23,"l":59},"1610612742":{"teamName":"Mavericks","w":52,"l":30},"1610612743":{"teamName":"Nuggets","w":43,"l":39},"1610612744":{"teamName":"Warriors","w":37,"l":45},"1610612745":{"teamName":"Rockets","w":45,"l":37},"1610612746":{"teamName":"Clippers","w":28,"l":54},"1610612747":{"teamName":"Lakers","w":56,"l":26},"1610612748":{"teamName":"Heat","w":42,"l":40},"1610612749":{"teamName":"Bucks","w":41,"l":41},"1610612750":{"teamName":"Timberwolves","w":58,"l":24},"1610612751":{"teamName":"Nets","w":47,"l":35},"1610612752":{"teamName":"Knicks","w":39,"l":43},"1610612753":{"teamName":"Magic","w":21,"l":61},"1610612754":{"teamName":"Pacers","w":61,"l":21},"1610612755":{"teamName":"76ers","w":33,"l":49},"1610612756":{"teamName":"Suns","w":29,"l":53},"1610612757":{"teamName":"Trail Blazers","w":41,"l":41},"1610612758":{"teamName":"Kings","w":55,"l":27},"1610612759":{"teamName":"Spurs","w":57,"l":25},"1610612760":{"teamName":"SuperSonics","w":37,"l":45},"1610612761":{"teamName":"Raptors","w":33,"l":49},"1610612762":{"teamName":"Jazz","w":42,"l":40},"1610612763":{"teamName":"Grizzlies","w":50,"l":32},"1610612764":{"teamName":"Wizards","w":25,"l":57},"1610612765":{"teamName":"Pistons","w":54,"l":28},"1610612766":{}},"2004":{"1610612737":{"teamName":"Hawks","w":13,"l":69},"1610612738":{"teamName":"Celtics","w":45,"l":37},"1610612739":{"teamName":"Cavaliers","w":42,"l":40},"1610612740":{"teamName":"Hornets","w":18,"l":64},"1610612741":{"teamName":"Bulls","w":47,"l":35},"1610612742":{"teamName":"Mavericks","w":58,"l":24},"1610612743":{"teamName":"Nuggets","w":49,"l":33},"1610612744":{"teamName":"Warriors","w":34,"l":48},"1610612745":{"teamName":"Rockets","w":51,"l":31},"1610612746":{"teamName":"Clippers","w":37,"l":45},"1610612747":{"teamName":"Lakers","w":34,"l":48},"1610612748":{"teamName":"Heat","w":59,"l":23},"1610612749":{"teamName":"Bucks","w":30,"l":52},"1610612750":{"teamName":"Timberwolves","w":44,"l":38},"1610612751":{"teamName":"Nets","w":42,"l":40},"1610612752":{"teamName":"Knicks","w":33,"l":49},"1610612753":{"teamName":"Magic","w":36,"l":46},"1610612754":{"teamName":"Pacers","w":44,"l":38},"1610612755":{"teamName":"76ers","w":43,"l":39},"1610612756":{"teamName":"Suns","w":62,"l":20},"1610612757":{"teamName":"Trail Blazers","w":27,"l":55},"1610612758":{"teamName":"Kings","w":50,"l":32},"1610612759":{"teamName":"Spurs","w":59,"l":23},"1610612760":{"teamName":"SuperSonics","w":52,"l":30},"1610612761":{"teamName":"Raptors","w":33,"l":49},"1610612762":{"teamName":"Jazz","w":26,"l":56},"1610612763":{"teamName":"Grizzlies","w":45,"l":37},"1610612764":{"teamName":"Wizards","w":45,"l":37},"1610612765":{"teamName":"Pistons","w":54,"l":28},"1610612766":{"teamName":"Bobcats","w":18,"l":64}},"2005":{"1610612737":{"teamName":"Hawks","w":26,"l":56},"1610612738":{"teamName":"Celtics","w":33,"l":49},"1610612739":{"teamName":"Cavaliers","w":50,"l":32},"1610612740":{"teamName":"Hornets","w":38,"l":44},"1610612741":{"teamName":"Bulls","w":41,"l":41},"1610612742":{"teamName":"Mavericks","w":60,"l":22},"1610612743":{"teamName":"Nuggets","w":44,"l":38},"1610612744":{"teamName":"Warriors","w":34,"l":48},"1610612745":{"teamName":"Rockets","w":34,"l":48},"1610612746":{"teamName":"Clippers","w":47,"l":35},"1610612747":{"teamName":"Lakers","w":45,"l":37},"1610612748":{"teamName":"Heat","w":52,"l":30},"1610612749":{"teamName":"Bucks","w":40,"l":42},"1610612750":{"teamName":"Timberwolves","w":33,"l":49},"1610612751":{"teamName":"Nets","w":49,"l":33},"1610612752":{"teamName":"Knicks","w":23,"l":59},"1610612753":{"teamName":"Magic","w":36,"l":46},"1610612754":{"teamName":"Pacers","w":41,"l":41},"1610612755":{"teamName":"76ers","w":38,"l":44},"1610612756":{"teamName":"Suns","w":54,"l":28},"1610612757":{"teamName":"Trail Blazers","w":21,"l":61},"1610612758":{"teamName":"Kings","w":44,"l":38},"1610612759":{"teamName":"Spurs","w":63,"l":19},"1610612760":{"teamName":"SuperSonics","w":35,"l":47},"1610612761":{"teamName":"Raptors","w":27,"l":55},"1610612762":{"teamName":"Jazz","w":41,"l":41},"1610612763":{"teamName":"Grizzlies","w":49,"l":33},"1610612764":{"teamName":"Wizards","w":42,"l":40},"1610612765":{"teamName":"Pistons","w":64,"l":18},"1610612766":{"teamName":"Bobcats","w":26,"l":56}},"2006":{"1610612737":{"teamName":"Hawks","w":30,"l":52},"1610612738":{"teamName":"Celtics","w":24,"l":58},"1610612739":{"teamName":"Cavaliers","w":50,"l":32},"1610612740":{"teamName":"Hornets","w":39,"l":43},"1610612741":{"teamName":"Bulls","w":49,"l":33},"1610612742":{"teamName":"Mavericks","w":67,"l":15},"1610612743":{"teamName":"Nuggets","w":45,"l":37},"1610612744":{"teamName":"Warriors","w":42,"l":40},"1610612745":{"teamName":"Rockets","w":52,"l":30},"1610612746":{"teamName":"Clippers","w":40,"l":42},"1610612747":{"teamName":"Lakers","w":42,"l":40},"1610612748":{"teamName":"Heat","w":44,"l":38},"1610612749":{"teamName":"Bucks","w":28,"l":54},"1610612750":{"teamName":"Timberwolves","w":32,"l":50},"1610612751":{"teamName":"Nets","w":41,"l":41},"1610612752":{"teamName":"Knicks","w":33,"l":49},"1610612753":{"teamName":"Magic","w":40,"l":42},"1610612754":{"teamName":"Pacers","w":35,"l":47},"1610612755":{"teamName":"76ers","w":35,"l":47},"1610612756":{"teamName":"Suns","w":61,"l":21},"1610612757":{"teamName":"Trail Blazers","w":32,"l":50},"1610612758":{"teamName":"Kings","w":33,"l":49},"1610612759":{"teamName":"Spurs","w":58,"l":24},"1610612760":{"teamName":"SuperSonics","w":31,"l":51},"1610612761":{"teamName":"Raptors","w":47,"l":35},"1610612762":{"teamName":"Jazz","w":51,"l":31},"1610612763":{"teamName":"Grizzlies","w":22,"l":60},"1610612764":{"teamName":"Wizards","w":41,"l":41},"1610612765":{"teamName":"Pistons","w":53,"l":29},"1610612766":{"teamName":"Bobcats","w":33,"l":49}},"2007":{"1610612737":{"teamName":"Hawks","w":37,"l":45},"1610612738":{"teamName":"Celtics","w":66,"l":16},"1610612739":{"teamName":"Cavaliers","w":45,"l":37},"1610612740":{"teamName":"Hornets","w":56,"l":26},"1610612741":{"teamName":"Bulls","w":33,"l":49},"1610612742":{"teamName":"Mavericks","w":51,"l":31},"1610612743":{"teamName":"Nuggets","w":50,"l":32},"1610612744":{"teamName":"Warriors","w":48,"l":34},"1610612745":{"teamName":"Rockets","w":55,"l":27},"1610612746":{"teamName":"Clippers","w":23,"l":59},"1610612747":{"teamName":"Lakers","w":57,"l":25},"1610612748":{"teamName":"Heat","w":15,"l":67},"1610612749":{"teamName":"Bucks","w":26,"l":56},"1610612750":{"teamName":"Timberwolves","w":22,"l":60},"1610612751":{"teamName":"Nets","w":34,"l":48},"1610612752":{"teamName":"Knicks","w":23,"l":59},"1610612753":{"teamName":"Magic","w":52,"l":30},"1610612754":{"teamName":"Pacers","w":36,"l":46},"1610612755":{"teamName":"76ers","w":40,"l":42},"1610612756":{"teamName":"Suns","w":55,"l":27},"1610612757":{"teamName":"Trail Blazers","w":41,"l":41},"1610612758":{"teamName":"Kings","w":38,"l":44},"1610612759":{"teamName":"Spurs","w":56,"l":26},"1610612760":{"teamName":"SuperSonics","w":20,"l":62},"1610612761":{"teamName":"Raptors","w":41,"l":41},"1610612762":{"teamName":"Jazz","w":54,"l":28},"1610612763":{"teamName":"Grizzlies","w":22,"l":60},"1610612764":{"teamName":"Wizards","w":43,"l":39},"1610612765":{"teamName":"Pistons","w":59,"l":23},"1610612766":{"teamName":"Bobcats","w":32,"l":50}},"2008":{"1610612737":{"teamName":"Hawks","w":47,"l":35},"1610612738":{"teamName":"Celtics","w":62,"l":20},"1610612739":{"teamName":"Cavaliers","w":66,"l":16},"1610612740":{"teamName":"Hornets","w":49,"l":33},"1610612741":{"teamName":"Bulls","w":41,"l":41},"1610612742":{"teamName":"Mavericks","w":50,"l":32},"1610612743":{"teamName":"Nuggets","w":54,"l":28},"1610612744":{"teamName":"Warriors","w":29,"l":53},"1610612745":{"teamName":"Rockets","w":53,"l":29},"1610612746":{"teamName":"Clippers","w":19,"l":63},"1610612747":{"teamName":"Lakers","w":65,"l":17},"1610612748":{"teamName":"Heat","w":43,"l":39},"1610612749":{"teamName":"Bucks","w":34,"l":48},"1610612750":{"teamName":"Timberwolves","w":24,"l":58},"1610612751":{"teamName":"Nets","w":34,"l":48},"1610612752":{"teamName":"Knicks","w":32,"l":50},"1610612753":{"teamName":"Magic","w":59,"l":23},"1610612754":{"teamName":"Pacers","w":36,"l":46},"1610612755":{"teamName":"76ers","w":41,"l":41},"1610612756":{"teamName":"Suns","w":46,"l":36},"1610612757":{"teamName":"Trail Blazers","w":54,"l":28},"1610612758":{"teamName":"Kings","w":17,"l":65},"1610612759":{"teamName":"Spurs","w":54,"l":28},"1610612760":{"teamName":"Thunder","w":23,"l":59},"1610612761":{"teamName":"Raptors","w":33,"l":49},"1610612762":{"teamName":"Jazz","w":48,"l":34},"1610612763":{"teamName":"Grizzlies","w":24,"l":58},"1610612764":{"teamName":"Wizards","w":19,"l":63},"1610612765":{"teamName":"Pistons","w":39,"l":43},"1610612766":{"teamName":"Bobcats","w":35,"l":47}},"2009":{"1610612737":{"teamName":"Hawks","w":53,"l":29},"1610612738":{"teamName":"Celtics","w":50,"l":32},"1610612739":{"teamName":"Cavaliers","w":61,"l":21},"1610612740":{"teamName":"Hornets","w":37,"l":45},"1610612741":{"teamName":"Bulls","w":41,"l":41},"1610612742":{"teamName":"Mavericks","w":55,"l":27},"1610612743":{"teamName":"Nuggets","w":53,"l":29},"1610612744":{"teamName":"Warriors","w":26,"l":56},"1610612745":{"teamName":"Rockets","w":42,"l":40},"1610612746":{"teamName":"Clippers","w":29,"l":53},"1610612747":{"teamName":"Lakers","w":57,"l":25},"1610612748":{"teamName":"Heat","w":47,"l":35},"1610612749":{"teamName":"Bucks","w":46,"l":36},"1610612750":{"teamName":"Timberwolves","w":15,"l":67},"1610612751":{"teamName":"Nets","w":12,"l":70},"1610612752":{"teamName":"Knicks","w":29,"l":53},"1610612753":{"teamName":"Magic","w":59,"l":23},"1610612754":{"teamName":"Pacers","w":32,"l":50},"1610612755":{"teamName":"76ers","w":27,"l":55},"1610612756":{"teamName":"Suns","w":54,"l":28},"1610612757":{"teamName":"Trail Blazers","w":50,"l":32},"1610612758":{"teamName":"Kings","w":25,"l":57},"1610612759":{"teamName":"Spurs","w":50,"l":32},"1610612760":{"teamName":"Thunder","w":50,"l":32},"1610612761":{"teamName":"Raptors","w":40,"l":42},"1610612762":{"teamName":"Jazz","w":53,"l":29},"1610612763":{"teamName":"Grizzlies","w":40,"l":42},"1610612764":{"teamName":"Wizards","w":26,"l":56},"1610612765":{"teamName":"Pistons","w":27,"l":55},"1610612766":{"teamName":"Bobcats","w":44,"l":38}},"2010":{"1610612737":{"teamName":"Hawks","w":44,"l":38},"1610612738":{"teamName":"Celtics","w":56,"l":26},"1610612739":{"teamName":"Cavaliers","w":19,"l":63},"1610612740":{"teamName":"Hornets","w":46,"l":36},"1610612741":{"teamName":"Bulls","w":62,"l":20},"1610612742":{"teamName":"Mavericks","w":57,"l":25},"1610612743":{"teamName":"Nuggets","w":50,"l":32},"1610612744":{"teamName":"Warriors","w":36,"l":46},"1610612745":{"teamName":"Rockets","w":43,"l":39},"1610612746":{"teamName":"Clippers","w":32,"l":50},"1610612747":{"teamName":"Lakers","w":57,"l":25},"1610612748":{"teamName":"Heat","w":58,"l":24},"1610612749":{"teamName":"Bucks","w":35,"l":47},"1610612750":{"teamName":"Timberwolves","w":17,"l":65},"1610612751":{"teamName":"Nets","w":24,"l":58},"1610612752":{"teamName":"Knicks","w":42,"l":40},"1610612753":{"teamName":"Magic","w":52,"l":30},"1610612754":{"teamName":"Pacers","w":37,"l":45},"1610612755":{"teamName":"76ers","w":41,"l":41},"1610612756":{"teamName":"Suns","w":40,"l":42},"1610612757":{"teamName":"Trail Blazers","w":48,"l":34},"1610612758":{"teamName":"Kings","w":24,"l":58},"1610612759":{"teamName":"Spurs","w":61,"l":21},"1610612760":{"teamName":"Thunder","w":55,"l":27},"1610612761":{"teamName":"Raptors","w":22,"l":60},"1610612762":{"teamName":"Jazz","w":39,"l":43},"1610612763":{"teamName":"Grizzlies","w":46,"l":36},"1610612764":{"teamName":"Wizards","w":23,"l":59},"1610612765":{"teamName":"Pistons","w":30,"l":52},"1610612766":{"teamName":"Bobcats","w":34,"l":48}},"2011":{"1610612737":{"teamName":"Hawks","w":40,"l":26},"1610612738":{"teamName":"Celtics","w":39,"l":27},"1610612739":{"teamName":"Cavaliers","w":21,"l":45},"1610612740":{"teamName":"Hornets","w":21,"l":45},"1610612741":{"teamName":"Bulls","w":50,"l":16},"1610612742":{"teamName":"Mavericks","w":36,"l":30},"1610612743":{"teamName":"Nuggets","w":38,"l":28},"1610612744":{"teamName":"Warriors","w":23,"l":43},"1610612745":{"teamName":"Rockets","w":34,"l":32},"1610612746":{"teamName":"Clippers","w":40,"l":26},"1610612747":{"teamName":"Lakers","w":41,"l":25},"1610612748":{"teamName":"Heat","w":46,"l":20},"1610612749":{"teamName":"Bucks","w":31,"l":35},"1610612750":{"teamName":"Timberwolves","w":26,"l":40},"1610612751":{"teamName":"Nets","w":22,"l":44},"1610612752":{"teamName":"Knicks","w":36,"l":30},"1610612753":{"teamName":"Magic","w":37,"l":29},"1610612754":{"teamName":"Pacers","w":42,"l":24},"1610612755":{"teamName":"76ers","w":35,"l":31},"1610612756":{"teamName":"Suns","w":33,"l":33},"1610612757":{"teamName":"Trail Blazers","w":28,"l":38},"1610612758":{"teamName":"Kings","w":22,"l":44},"1610612759":{"teamName":"Spurs","w":50,"l":16},"1610612760":{"teamName":"Thunder","w":47,"l":19},"1610612761":{"teamName":"Raptors","w":23,"l":43},"1610612762":{"teamName":"Jazz","w":36,"l":30},"1610612763":{"teamName":"Grizzlies","w":41,"l":25},"1610612764":{"teamName":"Wizards","w":20,"l":46},"1610612765":{"teamName":"Pistons","w":25,"l":41},"1610612766":{"teamName":"Bobcats","w":7,"l":59}},"2012":{"1610612737":{"teamName":"Hawks","w":44,"l":38},"1610612738":{"teamName":"Celtics","w":41,"l":40},"1610612739":{"teamName":"Cavaliers","w":24,"l":58},"1610612740":{"teamName":"Hornets","w":27,"l":55},"1610612741":{"teamName":"Bulls","w":45,"l":37},"1610612742":{"teamName":"Mavericks","w":41,"l":41},"1610612743":{"teamName":"Nuggets","w":57,"l":25},"1610612744":{"teamName":"Warriors","w":47,"l":35},"1610612745":{"teamName":"Rockets","w":45,"l":37},"1610612746":{"teamName":"Clippers","w":56,"l":26},"1610612747":{"teamName":"Lakers","w":45,"l":37},"1610612748":{"teamName":"Heat","w":66,"l":16},"1610612749":{"teamName":"Bucks","w":38,"l":44},"1610612750":{"teamName":"Timberwolves","w":31,"l":51},"1610612751":{"teamName":"Nets","w":49,"l":33},"1610612752":{"teamName":"Knicks","w":54,"l":28},"1610612753":{"teamName":"Magic","w":20,"l":62},"1610612754":{"teamName":"Pacers","w":49,"l":32},"1610612755":{"teamName":"76ers","w":34,"l":48},"1610612756":{"teamName":"Suns","w":25,"l":57},"1610612757":{"teamName":"Trail Blazers","w":33,"l":49},"1610612758":{"teamName":"Kings","w":28,"l":54},"1610612759":{"teamName":"Spurs","w":58,"l":24},"1610612760":{"teamName":"Thunder","w":60,"l":22},"1610612761":{"teamName":"Raptors","w":34,"l":48},"1610612762":{"teamName":"Jazz","w":43,"l":39},"1610612763":{"teamName":"Grizzlies","w":56,"l":26},"1610612764":{"teamName":"Wizards","w":29,"l":53},"1610612765":{"teamName":"Pistons","w":29,"l":53},"1610612766":{"teamName":"Bobcats","w":21,"l":61}},"2013":{"1610612737":{"teamName":"Hawks","w":38,"l":44},"1610612738":{"teamName":"Celtics","w":25,"l":57},"1610612739":{"teamName":"Cavaliers","w":33,"l":49},"1610612740":{"teamName":"Pelicans","w":34,"l":48},"1610612741":{"teamName":"Bulls","w":48,"l":34},"1610612742":{"teamName":"Mavericks","w":49,"l":33},"1610612743":{"teamName":"Nuggets","w":36,"l":46},"1610612744":{"teamName":"Warriors","w":51,"l":31},"1610612745":{"teamName":"Rockets","w":54,"l":28},"1610612746":{"teamName":"Clippers","w":57,"l":25},"1610612747":{"teamName":"Lakers","w":27,"l":55},"1610612748":{"teamName":"Heat","w":54,"l":28},"1610612749":{"teamName":"Bucks","w":15,"l":67},"1610612750":{"teamName":"Timberwolves","w":40,"l":42},"1610612751":{"teamName":"Nets","w":44,"l":38},"1610612752":{"teamName":"Knicks","w":37,"l":45},"1610612753":{"teamName":"Magic","w":23,"l":59},"1610612754":{"teamName":"Pacers","w":56,"l":26},"1610612755":{"teamName":"76ers","w":19,"l":63},"1610612756":{"teamName":"Suns","w":48,"l":34},"1610612757":{"teamName":"Trail Blazers","w":54,"l":28},"1610612758":{"teamName":"Kings","w":28,"l":54},"1610612759":{"teamName":"Spurs","w":62,"l":20},"1610612760":{"teamName":"Thunder","w":59,"l":23},"1610612761":{"teamName":"Raptors","w":48,"l":34},"1610612762":{"teamName":"Jazz","w":25,"l":57},"1610612763":{"teamName":"Grizzlies","w":50,"l":32},"1610612764":{"teamName":"Wizards","w":44,"l":38},"1610612765":{"teamName":"Pistons","w":29,"l":53},"1610612766":{"teamName":"Bobcats","w":43,"l":39}},"2014":{"1610612737":{"teamName":"Hawks","w":60,"l":22},"1610612738":{"teamName":"Celtics","w":40,"l":42},"1610612739":{"teamName":"Cavaliers","w":53,"l":29},"1610612740":{"teamName":"Pelicans","w":45,"l":37},"1610612741":{"teamName":"Bulls","w":50,"l":32},"1610612742":{"teamName":"Mavericks","w":50,"l":32},"1610612743":{"teamName":"Nuggets","w":30,"l":52},"1610612744":{"teamName":"Warriors","w":67,"l":15},"1610612745":{"teamName":"Rockets","w":56,"l":26},"1610612746":{"teamName":"Clippers","w":56,"l":26},"1610612747":{"teamName":"Lakers","w":21,"l":61},"1610612748":{"teamName":"Heat","w":37,"l":45},"1610612749":{"teamName":"Bucks","w":41,"l":41},"1610612750":{"teamName":"Timberwolves","w":16,"l":66},"1610612751":{"teamName":"Nets","w":38,"l":44},"1610612752":{"teamName":"Knicks","w":17,"l":65},"1610612753":{"teamName":"Magic","w":25,"l":57},"1610612754":{"teamName":"Pacers","w":38,"l":44},"1610612755":{"teamName":"76ers","w":18,"l":64},"1610612756":{"teamName":"Suns","w":39,"l":43},"1610612757":{"teamName":"Trail Blazers","w":51,"l":31},"1610612758":{"teamName":"Kings","w":29,"l":53},"1610612759":{"teamName":"Spurs","w":55,"l":27},"1610612760":{"teamName":"Thunder","w":45,"l":37},"1610612761":{"teamName":"Raptors","w":49,"l":33},"1610612762":{"teamName":"Jazz","w":38,"l":44},"1610612763":{"teamName":"Grizzlies","w":55,"l":27},"1610612764":{"teamName":"Wizards","w":46,"l":36},"1610612765":{"teamName":"Pistons","w":32,"l":50},"1610612766":{"teamName":"Hornets","w":33,"l":49}},"2015":{"1610612737":{"teamName":"Hawks","w":48,"l":34},"1610612738":{"teamName":"Celtics","w":48,"l":34},"1610612739":{"teamName":"Cavaliers","w":57,"l":25},"1610612740":{"teamName":"Pelicans","w":30,"l":52},"1610612741":{"teamName":"Bulls","w":42,"l":40},"1610612742":{"teamName":"Mavericks","w":42,"l":40},"1610612743":{"teamName":"Nuggets","w":33,"l":49},"1610612744":{"teamName":"Warriors","w":73,"l":9},"1610612745":{"teamName":"Rockets","w":41,"l":41},"1610612746":{"teamName":"Clippers","w":53,"l":29},"1610612747":{"teamName":"Lakers","w":17,"l":65},"1610612748":{"teamName":"Heat","w":48,"l":34},"1610612749":{"teamName":"Bucks","w":33,"l":49},"1610612750":{"teamName":"Timberwolves","w":29,"l":53},"1610612751":{"teamName":"Nets","w":21,"l":61},"1610612752":{"teamName":"Knicks","w":32,"l":50},"1610612753":{"teamName":"Magic","w":35,"l":47},"1610612754":{"teamName":"Pacers","w":45,"l":37},"1610612755":{"teamName":"76ers","w":10,"l":72},"1610612756":{"teamName":"Suns","w":23,"l":59},"1610612757":{"teamName":"Trail Blazers","w":44,"l":38},"1610612758":{"teamName":"Kings","w":33,"l":49},"1610612759":{"teamName":"Spurs","w":67,"l":15},"1610612760":{"teamName":"Thunder","w":55,"l":27},"1610612761":{"teamName":"Raptors","w":56,"l":26},"1610612762":{"teamName":"Jazz","w":40,"l":42},"1610612763":{"teamName":"Grizzlies","w":42,"l":40},"1610612764":{"teamName":"Wizards","w":41,"l":41},"1610612765":{"teamName":"Pistons","w":44,"l":38},"1610612766":{"teamName":"Hornets","w":48,"l":34}},"2016":{"1610612737":{"teamName":"Hawks","w":43,"l":39},"1610612738":{"teamName":"Celtics","w":53,"l":29},"1610612739":{"teamName":"Cavaliers","w":51,"l":31},"1610612740":{"teamName":"Pelicans","w":34,"l":48},"1610612741":{"teamName":"Bulls","w":41,"l":41},"1610612742":{"teamName":"Mavericks","w":33,"l":49},"1610612743":{"teamName":"Nuggets","w":40,"l":42},"1610612744":{"teamName":"Warriors","w":67,"l":15},"1610612745":{"teamName":"Rockets","w":55,"l":27},"1610612746":{"teamName":"Clippers","w":51,"l":31},"1610612747":{"teamName":"Lakers","w":26,"l":56},"1610612748":{"teamName":"Heat","w":41,"l":41},"1610612749":{"teamName":"Bucks","w":42,"l":40},"1610612750":{"teamName":"Timberwolves","w":31,"l":51},"1610612751":{"teamName":"Nets","w":20,"l":62},"1610612752":{"teamName":"Knicks","w":31,"l":51},"1610612753":{"teamName":"Magic","w":29,"l":53},"1610612754":{"teamName":"Pacers","w":42,"l":40},"1610612755":{"teamName":"76ers","w":28,"l":54},"1610612756":{"teamName":"Suns","w":24,"l":58},"1610612757":{"teamName":"Trail Blazers","w":41,"l":41},"1610612758":{"teamName":"Kings","w":32,"l":50},"1610612759":{"teamName":"Spurs","w":61,"l":21},"1610612760":{"teamName":"Thunder","w":47,"l":35},"1610612761":{"teamName":"Raptors","w":51,"l":31},"1610612762":{"teamName":"Jazz","w":51,"l":31},"1610612763":{"teamName":"Grizzlies","w":43,"l":39},"1610612764":{"teamName":"Wizards","w":49,"l":33},"1610612765":{"teamName":"Pistons","w":37,"l":45},"1610612766":{"teamName":"Hornets","w":36,"l":46}},"2017":{"1610612737":{"teamName":"Hawks","w":13,"l":32},"1610612738":{"teamName":"Celtics","w":34,"l":12},"1610612739":{"teamName":"Cavaliers","w":27,"l":18},"1610612740":{"teamName":"Pelicans","w":23,"l":21},"1610612741":{"teamName":"Bulls","w":18,"l":28},"1610612742":{"teamName":"Mavericks","w":15,"l":30},"1610612743":{"teamName":"Nuggets","w":23,"l":23},"1610612744":{"teamName":"Warriors","w":37,"l":9},"1610612745":{"teamName":"Rockets","w":31,"l":12},"1610612746":{"teamName":"Clippers","w":23,"l":21},"1610612747":{"teamName":"Lakers","w":16,"l":29},"1610612748":{"teamName":"Heat","w":26,"l":19},"1610612749":{"teamName":"Bucks","w":23,"l":21},"1610612750":{"teamName":"Timberwolves","w":29,"l":18},"1610612751":{"teamName":"Nets","w":17,"l":29},"1610612752":{"teamName":"Knicks","w":21,"l":25},"1610612753":{"teamName":"Magic","w":13,"l":32},"1610612754":{"teamName":"Pacers","w":24,"l":22},"1610612755":{"teamName":"76ers","w":21,"l":20},"1610612756":{"teamName":"Suns","w":17,"l":29},"1610612757":{"teamName":"Trail Blazers","w":24,"l":21},"1610612758":{"teamName":"Kings","w":13,"l":32},"1610612759":{"teamName":"Spurs","w":30,"l":17},"1610612760":{"teamName":"Thunder","w":26,"l":20},"1610612761":{"teamName":"Raptors","w":31,"l":13},"1610612762":{"teamName":"Jazz","w":18,"l":27},"1610612763":{"teamName":"Grizzlies","w":16,"l":28},"1610612764":{"teamName":"Wizards","w":26,"l":20},"1610612765":{"teamName":"Pistons","w":22,"l":22},"1610612766":{"teamName":"Hornets","w":18,"l":25}}}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var parseSeasonData = exports.parseSeasonData = function parseSeasonData(seasonData) {
  var parsedObj = {};

  Object.keys(seasonData).forEach(function (year) {
    var sortedArray = Object.keys(seasonData[year]).sort();
    parsedObj[year] = sortedArray.map(function (teamId) {
      return seasonData[year][teamId];
    });
  });

  return parsedObj;
};

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map