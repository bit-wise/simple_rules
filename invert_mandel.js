// Zn+1= Zn^2 + [x, y]
let H = window.innerHeight;
let W = window.innerWidth;
let H2 = H / 2;
let W2 = W / 2;
let S = 500; // scale
let s = 1; // Math.log10(S);

function setup() {
  createCanvas(W, H);
  background(220);
}

function draw() {
  for (let i = 0; i < 100; i++) {
    stroke(
      Math.round(Math.random() * 255),
      Math.round(Math.random() * 255),
      Math.round(Math.random() * 255)
    );
    strokeWeight(s);
    noFill();
    mandel().map(_m => {
      point(_m[0] * S + W2, _m[1] * S + H2);
    });
  }
}

function mandel() {
  let cx = Math.random() * 2 - 1;
  let cy = Math.random() * 2 - 1;
  let z = [0, 0];
  let rz = [];
  for (let i = 0; i < S; i++) {
    z = m([z[0], z[1]], [cx, cy]);
    rz.push(z);
  }
  return rz;
}

function m(a, c) {
  let x = a[0] * a[0] - a[1] * a[1];
  let y = 2 * (a[0] * a[1]);
  return [x + c[0], y + c[1]];
}
