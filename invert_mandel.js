// Zn+1= Zn^2 + [x, y]
let W = 10000; // window.innerWidth;
let H = W; // window.innerHeight;
let H2 = H / 2;
let W2 = W / 1.575;
let F = (W / 2000);
let S = 850 * F; // scale
let ML = 1000;

let sr2 = Math.sqrt(2);
let sr22 = sr2 * 2;
let I = 0;
let iMax = 5000;

function setup() {
  pixelDensity(1);
  createCanvas(W, H);
  background(0);
  noFill();
  stroke(255);
}

let G = W / 10 / F;
// G = 1;

function draw() {
  // G++;
  for (let j = 0; j < 100; j++) {
    mandel().map((_m, i) => {
      if (i > 4) {
        let t = (i / ML) * 100;
        stroke(255, 255, 255);
        strokeWeight(t / (100 / F));
        point(_m[0] * S + W2, _m[1] * S + H2);
      }
    });
  }
  I++;
  if (I > iMax) {
    // saveCanvas('mandel', 'png');
    // saveCanvas('mandel', 'jpg');
    // noLoop();
  }
}

let X = -sr2;
let Y = -sr2;
let XYF = 0.002;

function mandel() {
  // let cx = Math.round((Math.random() * sr22 - sr2) * G) / G;
  // let cy = Math.round((Math.random() * sr22 - sr2) * G) / G;
  X += XYF;
  if (X > sr2) {
    X = -sr2;
    Y += XYF;
  }
  if (Y > sr2) {
    Y = -sr2;
    saveCanvas('mandel', 'png');
    saveCanvas('mandel', 'jpg');
    noLoop();
  }
  
  let cx = X;
  let cy = Y;

  let z = [0, 0];
  let rz = [];
  if (Math.sqrt(Math.pow(cx, 2) + Math.pow(cy, 2)) > sr2) {
    return rz;
  }
  for (let i = 0; i < ML; i++) {
    z = m([z[0], z[1]], [cx, cy]);
    rz.push(z);
    if (i >= 4) {
      let t = py(rz, i - 3, i - 2);
      if (t >= sr22) {
        // rz = [];
        break;
      }
    }
  }
  return rz;
}

function m(a, c) {
  let x = a[0] * a[0] - a[1] * a[1];
  let y = 2 * (a[0] * a[1]);
  return [x + c[0], y + c[1]];
}

function py(y, a, b) {
  return Math.sqrt(Math.pow(y[a][0] - y[a + 1][0], 2) + Math.pow(y[a][1] - y[a + 1][1], 2)) /
    Math.sqrt(Math.pow(y[b][0] - y[b + 1][0], 2) + Math.pow(y[b][1] - y[b + 1][1], 2));
}
