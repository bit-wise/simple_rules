// Zn+1= Zn^2 + [x, y]
let H = window.innerHeight;
let W = window.innerWidth;
let H2 = H / 2;
let W2 = W / 2;
let S = 500; // scale
let s = 1; // Math.log10(S);

function setup() {
  createCanvas(W, H);
  background(0);
}

function draw() {
  // background(255,255,255,1)
  for (let i = 0; i < 10; i++) {
    // stroke(
    //   Math.round(Math.random() * 255),
    //   Math.round(Math.random() * 255),
    //   Math.round(Math.random() * 255),
    // );
    strokeWeight(0.25);
    noFill();
    mandel().map((_m, i) => {
      stroke(255, 255, 255 ,i/10);
      point(_m[0] * S + W2, _m[1] * S + H2);
    });
  }
}

let l = 500 / S;
let sr2 = Math.sqrt(2);
let inc = 1;
let j = -sr2;
let k = -sr2;

function mandel() {
  j += inc;
  if (j > sr2) {
    j = -sr2;
    k += inc;
  }
  if (k > sr2) {
    k = -sr2;
    inc = inc / 2;
  }
  if(inc < 0.004){
    saveCanvas('mandel', 'png')
    noLoop();
     }
  cx = k;
  cy = j;
  // cx = Math.random() * (l * 2) - l;
  // cy = Math.random() * (l * 2) - l;
  let z = [0, 0];
  let rz = [];
  for (let i = 0; i < 1000; i++) {
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
