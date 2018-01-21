import Store from '../store/store';
import { updateNodes } from '../actions/store_update_actions';
import { formatSeason } from '../util/data_util';

class Slider {
  constructor() {
    this.handleChange = this.handleChange.bind(this);
    this.createSlider();
    this.handleChange();
  }

  createSlider() {
    const mainContainer = document.getElementById('main-container');

    const sliderContainer = document.createElement('div');
    sliderContainer.setAttribute('id', 'slider-container');

    const slider = document.createElement('input');
    slider.setAttribute('type', 'range');
    slider.setAttribute('min', '1996');
    slider.setAttribute('max', '2017');
    slider.setAttribute('step', '1');
    slider.setAttribute('id', 'year-slider');

    const yearDisplay = document.createElement('div');
    yearDisplay.setAttribute('id', 'year-display');
    yearDisplay.innerHTML = (`Season: ${formatSeason(1996)}`);

    mainContainer.appendChild(sliderContainer);
    sliderContainer.appendChild(slider);
    sliderContainer.appendChild(yearDisplay);
  }

  handleChange() {
    const slider = document.getElementById('year-slider');
    const yearDisplay = document.getElementById('year-display');
    slider.oninput=((e)=> {
      Store.selectedYear = e.target.value;
      yearDisplay.innerHTML = (`Season: ${formatSeason(parseInt(e.target.value))}`);
      updateNodes();
    });
  }


}

export default Slider;
