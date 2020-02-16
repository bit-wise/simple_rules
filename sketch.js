let F = 2
let W = 400;
let H = 400;
let A = [];

function setup() {
  frameRate(2);
  createCanvas(W * F, H * F);
  for (let i = 0; i < W * H; i++) {
    A.push(255);
  }
  let rand = Math.round((W*H)/2) - W / 2;
  A[rand - 1] = 0;
  // A[rand + 1] = 0;
  // A[rand - W] = 0;
  A[rand + W] = 0;
  console.log(A.length);
  strokeWeight(F);
  stroke(0);
}

function draw() {
  background(255);
  let B = Object.assign([], A);
  B.map((b, i)=>{
    if(b < 128){
    let x = i % W;
    let y = Math.floor(i / W);
    point(x * F, y * F);
  }
  });
  A.map((a, i) => {
    let N = 0;
    
    if(i < W || i % W == 0 || i % W == W - 1 || i > A.length - W){
      return false;
    }

    if (B[i - 1] < 128) {N++;}
    if (B[i + 1] < 128) {N++;}
    if (B[i - W] < 128) {N++;}
    if (B[i + W] < 128) {N++;}    
    if (B[i - W - 1] < 128) {N++;}
    if (B[i - W + 1] < 128) {N++;}
    if (B[i + W - 1] < 128) {N++;}
    if (B[i + W + 1] < 128) {N++;}
    
    if (N == 2 && A[i] > 128) {
      A[i] = 0;
    }
    if(N > 2){
      A[i] = 255;
    }
  });
}
