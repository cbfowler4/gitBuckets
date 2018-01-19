import Store from '../store/store';
import { updateNodeValues } from '../actions/store_update_actions';

class Slider {
  constructor() {
    this.createSlider();
    this.handleChange();
  }

  createSlider() {
    const mainContainer = document.getElementById('main-container');
    const slider = document.createElement('input');
    slider.setAttribute('type', 'range');
    slider.setAttribute('min', '2013');
    slider.setAttribute('max', '2014');
    slider.setAttribute('step', '1');
    slider.setAttribute('id', 'year-slider');

    mainContainer.appendChild(slider);
      // '<input id="year-slider" type="range" min="2013" max="2014" step="1"/>'
  }

  handleChange() {
    const slider = document.getElementById('year-slider');
    slider.addEventListener('change', (e)=> {
      Store.selectedYear = e.target.value;
    });
    updateNodeValues();
  }
}

export default Slider;
