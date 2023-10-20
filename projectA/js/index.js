let g; // graphics // 

let x = 0;
let y = 200;


function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("p5-canvas");
  background(220);
  
  g = createGraphics(400, 400); // off-canvas
}

function draw() {
  background(220);
  
  // you can call Transformation, style, display functions
  // in the graphics
  
  let starX = random(width);
  let starY = random(height);
  
  g.fill(255);  
  g.circle(starX, starY, random(1, 5));
  tint(255, 100);
  image(g, 0, 0); // image(img, x, y, (w), (h));
  
  x += 5;
  if (x > width) {
    x = 0;
  }
  fill(255, 255, 0);
  circle(x, y, 100);
}