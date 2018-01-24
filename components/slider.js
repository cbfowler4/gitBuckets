import Store from '../store/store';
import { updateTeamShow } from './team_show';
import { formatSeason } from '../util/data_util';

class Slider {
  constructor() {
    this.handleChange = this.handleChange.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.updateYear = this.updateYear.bind(this);
    this.createSlider();
    this.handleChange();
  }

  createSlider() {
    const yearDisplay = document.getElementById('year-display');

    window.addEventListener('wheel', this.handleScroll);
    yearDisplay.innerHTML = (`Season: ${formatSeason(1996)}`);
  }

  handleScroll(e) {
    const yearSlider = document.getElementById('year-slider');
    let movement = e.wheelDelta/120;

    yearSlider.value = String(parseInt(yearSlider.value)+movement);
    Store.selectedYear = yearSlider.value;
    this.updateYear();
  }

  handleChange() {
    const slider = document.getElementById('year-slider');
    slider.oninput=((e)=> {
      Store.selectedYear = e.target.value;
      this.updateYear();
    });
  }

  updateYear() {
    const yearDisplay = document.getElementById('year-display');

    yearDisplay.innerHTML = (`Season: ${formatSeason(parseInt(Store.selectedYear))}`);
    Store.nodes.updateNodes();
    updateTeamShow();
  }
}




export default Slider;
