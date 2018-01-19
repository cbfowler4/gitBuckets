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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _data = __webpack_require__(15);

var _data2 = _interopRequireDefault(_data);

var _nodes = __webpack_require__(16);

var _nodes2 = _interopRequireDefault(_nodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {

  $.ajax({
    url: '/data',
    method: 'get',
    data: { seasonYear: 2013 }
  });

  var width = 700;
  var height = 600;

  var svg = d3.select(".main-container").insert("svg", ":first-child").attr("width", width).attr("height", height);

  var nodes = new _nodes2.default(svg, _data2.default, width, height);

  var teamContainer = document.getElementById("team-sidebar");
});

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _movements = __webpack_require__(17);

var _store = __webpack_require__(35);

var _store2 = _interopRequireDefault(_store);

var _keys = __webpack_require__(18);

var _team_container_actions = __webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Nodes = function () {
  function Nodes(svg, seasonData, width, height) {
    _classCallCheck(this, Nodes);

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

  _createClass(Nodes, [{
    key: 'createNodes',
    value: function createNodes() {
      var nodes = this.seasonData[2013].map(function (team) {
        return {
          radius: team[0].w * .7,
          color: _keys.COLORS[team[0].teamName] ? _keys.COLORS[team[0].teamName].pri : 'white',
          stroke: _keys.COLORS[team[0].teamName] ? _keys.COLORS[team[0].teamName].sec : 'black',
          teamName: team[0].teamName
        };
      });

      this.svg.selectAll("circle").data(nodes).enter().append("circle").attr("r", function (d) {
        return d.radius;
      }).attr('id', function (d) {
        return d.teamName;
      }).style("fill", function (d) {
        return d.color;
      }).style('stroke', function (d) {
        return d.stroke;
      }).style('stroke-width', 2);

      this.svg.selectAll("circle").on('mouseover', this.handleMouseover).on('mouseout', this.handleMouseout);
      return nodes;
    }
  }, {
    key: 'createForce',
    value: function createForce() {
      var force = d3.layout.force().gravity(.1).charge(function (d, i) {
        return i ? -d.radius * 9 : 0;
      }).nodes(this.nodes).size([this.width, this.height]);

      force.start();
      return force;
    }
  }, {
    key: 'handleTick',
    value: function handleTick(e) {
      var q = d3.geom.quadtree(this.nodes),
          i = 0,
          j = 0,
          n = this.nodes.length;

      while (++i < n) {
        q.visit((0, _movements.collide)(this.nodes[i]));
      }while (++j < n) {
        (0, _movements.boundaries)(this.nodes[j], this.width, this.height);
      }this.svg.selectAll("circle").attr("cx", function (d) {
        return d.x;
      }).attr("cy", function (d) {
        return d.y;
      });

      this.force.resume(.1);
    }
  }, {
    key: 'handleMouseover',
    value: function handleMouseover(d) {
      _store2.default.activeTeam = d.teamName;
      (0, _team_container_actions.updateTeamContainer)();
    }
  }, {
    key: 'handleMouseout',
    value: function handleMouseout(d) {
      _store2.default.activeTeam = null;
      (0, _team_container_actions.updateTeamContainer)();
    }
  }]);

  return Nodes;
}();

exports.default = Nodes;

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var COLORS = exports.COLORS = {
  'Bucks': { pri: '#E03A3E', sec: '#C4D600', logo: 'https://teamcolorcodes.com/wp-content/uploads/2015/02/atlanta_hawks_logo.jpg' },
  'Cavaliers': { pri: '#6F2633', sec: '#FFB81C' },
  'Knicks': { pri: '#F58426', sec: '#006BB6' },
  '76ers': { pri: '#006BB6', sec: '#ED174C' },
  'Timberwolves': { pri: '#002B5C', sec: '#005083' },
  'Celtics': { pri: '#008248', sec: '#BA9653' },
  'Pistons': { pri: '#ED174C', sec: '#0067B1' },
  'Heat': { pri: '#98002E', sec: '#000000' },
  'Pacers': { pri: '#002D62', sec: '#FDBB30' },
  'Nuggets': { pri: '#5091CD', sec: '#FDB927' },
  'Magic': { pri: '#0B77BD', sec: '#C2CCD2' },
  'Hornets': { pri: '#00788C', sec: '#1D1160' },
  'Raptors': { pri: '#CD1141', sec: '#A0A0A3' },
  'Hawks': { pri: '#E03A3E', sec: '#25282A' },
  'Wizards': { pri: '#002B5C', sec: '#E31837' },
  'Suns': { pri: '#E56020', sec: '#1D1160' },
  'Warriors': { pri: '#FFCD34', sec: '#243E90' },
  'Lakers': { pri: '#FDB927', sec: '#552583' },
  'Jazz': { pri: '#0C2340', sec: '#00471B' },
  'Clippers': { pri: '#ED174C', sec: '#006BB6' },
  'Kings': { pri: '#5A2D81', sec: '#63727A' },
  'Pelicans': { pri: '#002B5C', sec: '#B4975A' },
  'Spurs': { pri: '#C4CED4', sec: '#000000' },
  'Thunder': { pri: '#007AC1', sec: '#F05133' },
  'Grizzlies': { pri: '#6189B9', sec: '#00285E' },
  'Rockets': { pri: '#CE1141', sec: '#000000' },
  'Nets': { pri: '#000000', sec: '#FFFFFF' },
  'Bulls': { pri: '#CE1141', sec: '#000000' },
  'Mavericks': { pri: '#007DC5', sec: '#C4CED4' },
  'Trail Blazers': { pri: '#E13A3E', sec: '#C4CED4' },
  'Bobcats': { pri: '#00295b', sec: '#5097d2' }
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

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var updateTeamContainer = exports.updateTeamContainer = function updateTeamContainer() {};

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var store = {
  activeTeam: null
};

exports.default = store;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map