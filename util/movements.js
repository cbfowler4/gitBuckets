import Store from '../store/store';

export const boundaries = (node, width, height) => {
  const buffer = 30;
  if (node.x - node.radius < buffer) {
    node.x = node.radius + buffer;
  } else if (node.x + node.radius > width - buffer){
    node.x = width - node.radius - buffer;

  }

  if (node.y - node.radius < buffer) {
    node.y = node.radius + buffer;
  } else if (node.y + node.radius > height - buffer) {
    node.y = height - node.radius - buffer;
  }
};


export const collide = (node) => {
  var r = node.radius+500,
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
