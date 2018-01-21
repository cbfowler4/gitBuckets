import Store from '../store/store';

export const boundaries = (node, width, height) => {
  if (node.x - node.radius < 0) {
    node.x = node.radius;
  } else if (node.x + node.radius > width){
    node.x = width - node.radius;

  }

  if (node.y - node.radius < 0) {
    node.y = node.radius;
  } else if (node.y + node.radius > height) {
    node.y = height - node.radius;
  }
};


export const collide = (node) => {
  var r = node.radius+200,
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
