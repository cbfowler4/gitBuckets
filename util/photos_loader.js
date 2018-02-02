import { STYLING } from '../data/keys';
import Store from '../store/store';

export const loadImages = () => {
  const images = {};
  Object.keys(STYLING).forEach((team) => {
    let image = new Image();
    image.src = `assets/images/logos/${STYLING[team].logo}`;
    images[team] = image;
  });

  Store.logos = images;
};
