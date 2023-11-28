let bgColor;
let mySound;

function preload(){
  mySound = loadSound('video/snow1.mp3')
}

let stars = [];

function setup() {
  mySound.play()
  let canvas = createCanvas(1000, 600);
  canvas.parent('canvas-container');
  for (let i = 0; i < 100; i++) {
    stars.push(new Star());
  }
}

function draw() {
  background(0);
  for (let i = 0; i < stars.length; i++) {
    let star = stars[i];
    star.update();
    star.show();
  }
}

class Star {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.z = random(width); // "z" represents depth for a 3D effect
    this.pz = this.z; // Previous z position
    this.speed = random(10, 20);
  }

  update() {
    this.z = this.z - this.speed;
    
    if (this.z < 1) {
      this.z = width;
      this.x = random(width);
      this.y = random(height);
      this.pz = this.z;
      this.speed = random(10, 20);
    }
  }

  show() {
    let sx = map(this.x / this.z, 0, 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0, height);
    let r = map(this.z, 0, width, 16, 0);
    
    stroke(255);
    ellipse(sx, sy,r,r); 
    
    let px = map(this.x / this.pz, 0, 1, 0, width);
    let py = map(this.y / this.pz, 0, 1, 0, height);
    
    this.pz = this.z;
    
    stroke(255);
    line(px, py, sx, sy);
  }
}