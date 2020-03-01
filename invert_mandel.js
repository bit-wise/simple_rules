// Zn+1= Zn^2 + [x, y]
let H = window.innerHeight;
let W = window.innerWidth;
let H2 = H / 2;
let W2 = W / 2;
let S = 500; // scale
let s = 1; // Math.log10(S);

function setup() {
  createCanvas(W, H);
  background(255);
}

let _r = 0;
let _g = 0;
let _b = 0;

function draw() {
  for (let i = 0; i < 100; i++) {
    // stroke(
    //   Math.round(Math.random() * 255),
    //   Math.round(Math.random() * 255),
    //   Math.round(Math.random() * 255),
    //   1
    // );
    stroke(
      Math.round(_r),
      Math.round(_g),
      Math.round(_b),
      16);
    strokeWeight(s);
    noFill();
    mandel().map(_m => {
      point(_m[0] * S + W2, _m[1] * S + H2);
    });
    // strokeWeight(0.25);
    // beginShape();
    // mandel().map(_m => {
    //   vertex(_m[0] * S + W2, _m[1] * S + H2);
    // });
    // endShape();
  }
}

let j = -1;
let k = -1;
let _f = 0.0025;

function mandel() {
  _f = Math.random() / 10;
  j += _f;
  if (j > 1) {
    j = -1;
    k += _f;
  }
  if (k > 1) {
    k = -1;
  }
  _r += _f;
  if (_r > 245) {
    _r = 0;
    _g += _f;
  }
  if (_g > 245) {
    _g = 0;
    _b += _f;
  }
  if (_b > 245) {
    _b = 0;
  }
  let cx = j; // Math.random() * 2 - 1;
  let cy = k; // Math.random() * 2 - 1;
  let z = [0, 0];
  let rz = [];
  for (let i = 0; i < 100; i++) {
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
