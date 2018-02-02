import {parseSeasonData} from '../util/data_util';
import Nodes from './nodes';
import Slider from './slider';
import Store from '../store/store';
import data from '../data/team_data.json';
import { setupTeamShow } from './team_show';

document.addEventListener('DOMContentLoaded', () => {

  // $.ajax({
  //   url: '/team',
  //   method: 'get'
  // });


  const svg = d3.select("#main-container svg");

  Store.seasonData = parseSeasonData(data);
  Store.nodes = new Nodes(svg);

  const slider = new Slider();

  setupTeamShow();

});
