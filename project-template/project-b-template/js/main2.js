let snowflakeCounter = 0;
let scenevideo;
let displayText = false;
let startTime;
let duration = 3500; // 文字显示持续时间（毫秒）
let initialFontSize = 40;
let textColor = 255;
let snowflakeFrequency = 10
let maxSnowflakes = 100;
let snowt = 1
let snowflakes = []; // array to hold snowflake objects
let x, y;
let ball = [];
let pan5 = 0
let background1, background2;
let graphic1;
let gift2y = 0
let sleighy = 0;
let bian5 = 0
let scene = 1;
let xPos = 200;
let yPos = 800;
let scaleValue = 0.3;
let isMovingLeft = false;
let isMovingRight = false;
let isJumping = false;
let jumpForce = 12;
let gravity = 1;
let velocityY = 0;
let handAngle = 0;
let footAngle = 0;
let blink = false;
let blinkTimer = 0;
let speeds = 2;
let bacg;
let bacg2
let sockxx = 150
let handx, handy;
let sum = 0;
let snowmx = 900;
let snowmy = 550;
let handpan = 0;
let hatpan = 0;
let nosepan = 0;
let scarfpan = 0;
let stickpan = 0;
let haty = 0; // 帽子的垂直位置
let hatx = 1500;
let nosey = 0;
let nosex = 500;
let triangleY = 0;
let scarfy = 0;
let stickx = 700; // 线条起始点的 X 坐标
let sticky = 550; // 线条起始点的 Y 坐标
let lineLength = 50; // 线条的长度
let vid;
let cloud;
let buttonColor = 200;
let cloudpan = 0;
let scenechange = 2;
let calcu = 0;
let speed = 2;
let circlepan = 0;
let snowsum = 10000;
let santas;
let sanx;
let sany;
let sleigh
let snowmanxx
let appearanceTime; // 图像出现的时间
let showImage = false;

let sleighpan = 0
let sanspeed = 2; // 控制santas的移动速度

let giftX1, giftY1, giftSpeed1;
let giftX2, giftY2, giftSpeed2;
let giftX3, giftY3, giftSpeed3;
let giftX4, giftY4, giftSpeed4;
let snowsound;
function preload() {

  sleigh = loadImage('video/sleigh.webp')
  snowsound = loadSound('video/snow1.mp3')
  bacg = loadImage("video/Christ.jpg");
  bacg2 = loadImage("video/Christ2.png");
  santas = loadImage('video/santas.png');
  gift = loadImage('video/gift.png')
  gift2 = loadImage('video/gift2.jpg')
  gift3 = loadImage('video/gift3.jpg')
  gift4 = loadImage('video/gift4.jpg')
  vid = createVideo(["video/sleep.mp4"]);
  sock = loadImage('video/sock1.png')
  sock2 = loadImage('video/sock2.png')
  scenevideo = createVideo(["video/scene5.mp4"])
  vid.hide(); // Hide the video element
  scenevideo.hide()

}
function setup() {

  setAppearanceTime();
  let canvas = createCanvas(1000, 700);
  canvas.parent('canvas-container2');
  sanx = width / 2;
  sany = 0; // 设置santas的sany坐标
  snowmanxx = random(width)
  // 初始化每个gift的位置和速度
  giftX1 = random(width); // 随机设置sanx坐标
  giftY1 = 10; // 在顶部随机设置sany坐标
  giftSpeed1 = random(1, 3); // 随机设置下落速度

  giftX2 = random(width);
  giftY2 = 10;
  giftSpeed2 = random(1, 3);

  giftX3 = random(width);
  giftY3 = 10;
  giftSpeed3 = random(1, 3);

  giftX4 = random(width);
  giftY4 = 10;
  giftSpeed4 = random(1, 3);
  vid.volume(0);

  // Create a button to start the dreamworld
  button = createButton("Click to Dreamworld");
  button.position(850, 53);
  button.mousePressed(hideButton);
  blink = true;
  blinkTimer = millis();
  frameRate(30);


  fill(240);
  noStroke();
  for (let i = 0; i < 10; i++) {
    ball.push(new Ball());
  }
}
let t = 1
function draw() {


  if (scenechange == 1) {
    snowsound.play()

    background(255);

    vid.loop();
    // Draw the video only if the cloudpan flag is not set
    image(vid, 0, 0, width, height);

    // Draw clouds
    drawCloud(383, 152, 30, 20, 10);
    drawCloud(459, 113, 60, 20, 10);
    drawCloud(550, 45, 120, 40, 30);
    image(sock, 170, 202, 200, 250)
    if (cloudpan == 1) {
      t += 0.1;
      push();
      translate(550, 45);
      scale(t);

      drawCloud(0, 0, 120, 40, 30);
      pop();
      if (t >= 12) {
        scenechange = 2;
        vid.stop();
      }
    }
  }
  if (scenechange == 2) {
    for (let i = snowflakes.length - 1; i >= 0; i--) {
      let snowflake = snowflakes[i];
      let d = dist(snowflake.posX, snowflake.posY, xPos, yPos); // 计算小孩与雪花的距离

      if (d < 50) {
        // 设定一个阈值，当小于该值时，表示碰撞发生
        snowflakes.splice(i, 1);
        snowsum += 10;
        // 移除碰撞到的雪花
      }
    }
    // vid.position(0, 0)
    // vid.loop
    // blendMode(BLEND);
    background(0); // 设置混合模式为普通混合
    background(bacg);
    if (snowsum >= 170) {
      hat();
      nose();
      scarf();
      stick();
      sleighd();
      for (let i = 0; i < ball.length; i++) {
        ball1 = ball[i];
        ball1.update();
        ball1.show();
      }
      for (let i = ball.length - 1; i >= 0; i--) {
        let ball1 = ball[i];
        ball1.update();
        ball1.show();
        if (ball1.y > height) {
          ball.splice(i, 1); // 删除超出屏幕的粒子
        }
      }
    }
    if (snowsum >= 50) {
      ellipse(snowmx, snowmy, 200, 200);
    }
    if (snowsum >= 90) {
      ellipse(snowmx, snowmy - 125, 150, 150);
    }
    if (snowsum >= 130) {
      ellipse(snowmx, snowmy - 225, 100, 100);
    }
    if (circlepan >= 1) {
      circleb(snowmx, snowmy - 110);
    }
    if (circlepan >= 2) {
      circleb(snowmx, snowmy - 80);
    }
    if (circlepan >= 3) {
      circleb(snowmx, snowmy - 50);
    }
    if (circlepan >= 4) {
      circleb(snowmx - 15, snowmy - 235);
    }
    if (circlepan >= 5) {
      circleb(snowmx + 15, snowmy - 235);
    }


    if (hatpan == 1) {
      push();
      fill(0);
      rect(snowmx - 35, snowmy - 360, 70, 100);
      ellipse(snowmx, snowmy - 260, 100, 10);
      pop();
    }
    if (nosepan == 1) {
      push();
      fill(255, 165, 0);
      triangle(
        snowmx,
        snowmy - 225,
        snowmx,
        snowmy - 215,
        snowmx + 40,
        snowmy - 200
      );
      pop();
    }

    if (handpan == 1) {
      push();
      stroke(139, 69, 19);
      strokeWeight(5);
      line(snowmx - 70, snowmy - 125, snowmx - 150, snowmy - 150);
      line(snowmx + 70, snowmy - 125, snowmx + 150, snowmy - 150);
      pop();
    }
    if (scarfpan == 1) {
      push();
      strokeWeight(0);
      fill(0, 0, 255);
      rect(snowmx - 45, snowmy - 190, 90, 20);
      rect(snowmx - 45, snowmy - 190, 20, 80);
      pop();
    }
    if (stickpan == 1) {
      push();
      stroke(139, 69, 19);
      strokeWeight(5);
      line(snowmx - 70, snowmy - 125, snowmx - 150, snowmy - 150);
      line(snowmx + 70, snowmy - 125, snowmx + 150, snowmy - 150);
      pop();
    }
    if (sleighpan == 1) {
      image(sleigh, snowmx - 150, snowmy, 300, 300)
    }
    // blendMode(ADD); // 设置混合模式为添加混合
    if (ball.length < 5) {
      ball.push(new Ball());
    }
    if (snowmy < 0) {
      calcu = 0;
      scenechange = 4
    }
    if ((calcu == 5)) {
      push();
      noFill();
      strokeWeight(5);
      stroke(10);
      arc(snowmx, snowmy - 215, 80, 50, 0.2, PI - 0.2); // 在眼睛下方绘制弧形作为笑脸
      snowmx -= speeds * 1.3;
      snowmy -= speeds;
      pop();
    }

    let t = frameCount / 20; // update time

    snowflakeCounter++;
    if (snowflakeCounter >= snowflakeFrequency && snowflakes.length < maxSnowflakes) {
      snowflakes.push(new Snowflake());
      snowflakeCounter = 0; // Reset the counter
    }

    // Remove older snowflakes if the maximum limit is reached
    while (snowflakes.length > maxSnowflakes) {
      snowflakes.splice(0, 1); // Remove the oldest snowflake
    }

    // loop through snowflakes with a for..of loop
    for (let i = 0; i < snowflakes.length; i++) {
      let snowflake = snowflakes[i];
      snowflake.update(t);
      snowflake.display();
    }

    //////////////////////////////////////
    if (yPos < 500) {
      velocityY += gravity;
    } else {
      isJumping = false;
    }
    if (yPos > 600) {
      yPos = 600;
    }

    if (isMovingLeft && xPos > 50) {
      xPos -= 5;
    }
    if (isMovingRight && xPos < width - 50) {
      xPos += 5;
    }

    yPos += velocityY / 2; // Update the vertical position

    push();
    translate(xPos, yPos);
    scale(scaleValue);

    drawKid(0, 0);
    handx = xPos / scaleValue;
    handy = yPos / scaleValue;
    pop();

    for (let i = ball.length - 1; i >= 0; i--) {
      let singleBall = ball[i];
      let d = dist(xPos, yPos, singleBall.x, singleBall.y);
      console.log(xPos);
      if (d < 100) {
        sum += 50;
        ball.splice(i, 1);
        circlepan += 1; // 移除碰撞到的粒子
      }
    }
    let d2 = dist(hatx / 2, haty / 2, xPos, yPos);
    if (d2 <= 70) {
      // 根据实际尺寸设定帽子与小孩的碰撞条件
      hatpan = 1;
      calcu += 1;
      (hatx = -500000), (haty = -500000);
    }
    let d3 = dist(250, triangleY, xPos, yPos);
    if (d3 <= 30) {
      // 根据实际尺寸设定小孩和鼻子的碰撞条件
      nosepan = 1;

      calcu += 1;
      triangleY = -500000;
    }
    let d4 = dist(20, scarfy, xPos, yPos);
    if (d4 <= 70) {
      scarfpan = 1;
      calcu += 1;
      scarfy = -5000;
    }
    let d5 = dist(stickx + lineLength / 2, sticky + 100, xPos, yPos);
    if (d5 <= 70) {
      // Check collision between stick and child
      stickpan = 1;
      calcu += 1;
      stickx = -500000;
      sticky = -500000;
    }
    let d6 = dist(xPos, yPos, 180, sleighy)
    if (d6 <= 100) {
      sleighpan = 1;
      calcu += 1
      sleighy = -100000
    }
  }


  if (scenechange == 4) {

    pan5 += 1
    if (pan5 >= appearanceTime) {
      showImage = true
    }


    background(bacg2)
    image(sock, sockxx, 600, 100, 100)
    drawSnowman(snowmanxx, 80)
    if (snowmanxx >= width) {

      snowt = 0
    }
    if (snowmanxx <= 0) {
      snowt = 1
    }
    if (snowt == 0) {
      snowmanxx -= 10
    }
    if (snowt == 1) {
      snowmanxx += 10
    }
    image(gift2, snowmanxx, 100 + gift2y, 50, 50);
    if (showImage) {
      gift2y += 5

    }
    if (!displayText) {
      displayText = true;
      startTime = millis();
    }

    if (displayText) {
      let currentTime = millis() - startTime;

      // 文字渐变效果
      if (currentTime < duration) {
        let textSizeProgress = map(currentTime, 0, duration, initialFontSize, 32);
        let colorProgress = map(currentTime, 0, duration, 0, 255);
        let alphaProgress = map(currentTime, duration * 0.8, duration, 255, 0);

        // 更新文字大小、颜色和透明度
        textSize(textSizeProgress);
        fill(textColor, colorProgress, 100, alphaProgress);
        textAlign(CENTER, CENTER);
        text("Attention! You have only one chance to catch the gift!!", width / 2, height / 2);
      }
    }

    let d9 = dist(sockxx, 600, snowmanxx, 100 + gift2y)
    if (d9 <= 50) {
      scenechange = 5
      gift2y = -100
    }
    if (100 + gift2y >= height) {
      scenechange = 6
    }
    if (keyIsDown(LEFT_ARROW)) {
      sockxx -= 9 // 按下左箭头键，物体向左移动
    }
    if (keyIsDown(RIGHT_ARROW)) {
      sockxx += 9 // 按下右箭头键，物体向右移动
    }
  }

  if (scenechange == 6) {
    vid.loop();
    // Draw the video only if the cloudpan flag is not set
    image(vid, 0, 0, width, height);

    // Draw clouds
    drawCloud(383, 152, 30, 20, 10);
    drawCloud(459, 113, 60, 20, 10);
    drawCloud(550, 45, 120, 40, 30);
    push()
    scale(bian5)
    translate(170, 202)
    bian5 += 0.01

    image(sock, 0, 0, 200, 250)
    pop()
    if (bian5 >= 1.5) {
      scenechange = 7
    }
  }
  if (scenechange == 7) {
    background(0)
    textSize(50)
    text("Click the button to try again!", 200, 200)
  }
  if (scenechange == 8) {
    scenevideo.loop();
    // Draw the video only if the cloudpan flag is not set
    image(scenevideo, 0, 0, width, height);
  }


  if (scenechange == 5) {

    vid.loop();
    // Draw the video only if the cloudpan flag is not set
    image(vid, 0, 0, width, height);

    // Draw clouds
    drawCloud(383, 152, 30, 20, 10);
    drawCloud(459, 113, 60, 20, 10);
    drawCloud(550, 45, 120, 40, 30);
    push()
    scale(bian5)
    translate(170, 202)
    bian5 += 0.01

    image(sock2, 0, 0, 200, 250)
    pop()
    if (bian5 >= 1.5) {
      scenechange = 8
    }


  }
}
// snowflake class
class Snowflake {
  constructor() {
    // initialize coordinates
    this.posX = 0;
    this.posY = random(-50, 0);
    this.initialangle = random(0, 2 * PI);
    this.size = random(10, 15);

    // radius of snowflake spiral
    // chosen so the snowflakes are uniformly spread out in area
    this.radius = sqrt(random(pow(width / 2, 2)));
  }

  update(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  }

  display() {
    ellipse(this.posX, this.posY, this.size);
  }
}

class Ball {
  constructor() {
    this.x = random(width);
    this.y = 0;
    this.h = random(0, 320);
    this.speed = random(10);
  }
  update() {
    this.y += this.speed;
  }
  show() {
    push();
    colorMode(HSB, 360, 100, 100);
    noStroke();
    for (let r = 10; r > 0; --r) {
      fill(this.h, 100, 100, r * 8); // 设置拖尾粒子的透明度
      ellipse(this.x, this.y, r * 3, r * 3);
      this.h = (this.h + 0.8) % 320;
    }
    pop();
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {

    isMovingLeft = true;
  } else if (keyCode === RIGHT_ARROW) {

    isMovingRight = true;
  } else if (keyCode === UP_ARROW && !isJumping) {
    isJumping = true;
    velocityY = -jumpForce; // Update velocity to trigger the jump
  }
}

function keyReleased() {
  if (keyCode === LEFT_ARROW) {
    isMovingLeft = false;
  } else if (keyCode === RIGHT_ARROW) {
    isMovingRight = false;
  }
}

function blinkEyes() {
  blink = true;
  blinkTimer = millis();
}

function drawKid(x, y) {
  // 绘制头部
  push();
  fill(255, 204, 153);
  ellipse(x, y - 80, 150, 150);
  pop();
  if (blink && millis() - blinkTimer < 100) {
    push();
    fill(255, 204, 153);
    ellipse(x - 30, y - 100, 30, 5);
    ellipse(x + 30, y - 100, 30, 5);
    pop();
  } else {
    // 绘制眼睛
    push();
    fill(255);
    ellipse(x - 30, y - 100, 30, 30);
    ellipse(x + 30, y - 100, 30, 30);
    fill(0);
    ellipse(x - 30, y - 100, 10, 10);
    ellipse(x + 30, y - 100, 10, 10);
    blink = false;
    pop();
  }

  // 绘制嘴巴
  push();
  noFill();
  stroke(255, 102, 102);
  arc(x, y - 60, 50, 50, 0, PI);
  pop();

  let bodyOffset = 20;
  if (isMovingLeft || isMovingRight) {
    bodyOffset = sin(frameCount * 0.2) * 10; // 改变身体姿势
    handAngle = (sin(frameCount * 0.2) * PI) / 4; // 手臂动作
    footAngle = (sin(frameCount * 0.2 + PI) * PI) / 8; // 脚部动作
  }

  // 绘制身体
  push();
  fill(102, 178, 255);
  rectMode(CENTER);
  rect(x, y + 50, 80, 120 + bodyOffset, 10);

  // 绘制双手
  drawHand(x - 60, y + 40, handAngle);
  drawHand(x + 60, y + 40, -handAngle);

  // 绘制双脚
  drawFoot(x - 20, y + 150, footAngle);
  drawFoot(x + 20, y + 150, -footAngle);
  pop();
}

function drawHand(x, y, angle) {
  push();
  translate(x, y);
  rotate(angle);

  fill(255, 204, 153);
  ellipse(
    sin(frameCount * 0.1) * PI * 10,
    cos(frameCount * 0.1) * PI * 10,
    40,
    40
  ); // 手
  pop();
}

function drawFoot(x, y, angle) {
  push();
  translate(x, y);
  rotate(angle);
  fill(102, 178, 255);
  rect(0, 0, 20, 40); // 脚
  pop();
}

function pan() {
  for (let i = snowflakes.length - 1; i >= 0; i--) {
    let snowflake = snowflakes[i];
    let d = dist(
      xPos / scaleValue,
      yPos / scaleValue + 150,
      snowflake.posX,
      snowflake.posY
    );

    if (d < snowflake.size / 2 + 20) {
      // 20 是预设的阈值，可以根据实际情况调整
      snowflakes.splice(i, 1); // 移除碰撞到的粒子
    }
  }
}
function hat() {
  if (hatpan == 0) {
    // 让帽子从天而降
    push();
    fill(0);

    scale(0.5);

    rect(hatx, haty, 70, 100);
    ellipse(hatx + 45, haty + 100, 100, 10);
    pop();
    // 增加帽子的垂直位置，模拟下落
    haty += 5; // 这里的2表示下落的速度，可以根据需要调整
    nosey += 5;
    // 当帽子落到屏幕底部时，重置到顶部重新下落
    if (haty / 2 > height) {
      haty = 0;
    }
  }
}
function nose() {
  if (nosepan == 0) {
    push();
    fill(255, 165, 0);
    triangle(250, 0 + triangleY, 250, 15 + triangleY, 290, 30 + triangleY);

    // 增加三角形的垂直位置，模拟下落
    triangleY += 2; // 这里的2表示下落的速度，可以根据需要调整

    // 当三角形落到屏幕底部时，重置到顶部重新下落
    if (triangleY > height) {
      triangleY = 0; // 这里可以设置三角形重新回到顶部的位置，可以根据需要修改
    }
    pop();
  }
}
function scarf() {
  if (scarfpan == 0) {
    push();
    fill(0, 0, 255);
    rect(70, scarfy, 90, 20);
    rect(70, scarfy, 20, 80);
    scarfy += 5;
    if (scarfy > height) {
      scarfy = 0;
    }
    pop();
  }
}

function stick() {
  if (stickpan == 0) {
    push();
    stroke(0); // 设置线条颜色为黑色
    strokeWeight(5); // 设置线条粗细
    line(stickx, sticky, stickx + lineLength, sticky + 100); // 绘制斜线

    // 增加线条的垂直位置，模拟上下移动
    sticky += 2; // 这里的2表示线条下落的速度，可以根据需要调整

    // 当线条移动到屏幕底部时，重置到顶部重新上下移动
    if (sticky > height) {
      sticky = -50; // 重新回到顶部的位置，可以根据需要修改
      stickx = random(width);
    }
    pop();
  }
}
function drawCloud(x, y, size, cloudWidth, cloudHeight) {
  noStroke(); // No outline for the cloud
  fill(255); // White fill for the cloud

  // Draw multiple ellipses to create a cloud shape
  for (let i = 0; i < cloudWidth; i += 5) {
    for (let j = 0; j < cloudHeight; j += 5) {
      let offsetX = random(-5, 5);
      let offsetY = random(-5, 5);
      ellipse(x + i + offsetX, y + j + offsetY, size, size * 0.7);
    }
  }
}

function hideButton() {
  cloudpan = 1;
  button.hide(); // Hide the button when clicked
}
function circleb(x, y) {
  push();
  colorMode(HSB, 360, 100, 100);
  noStroke();
  let h = random(320);
  for (let r = 10; r > 0; --r) {
    fill(h, 100, 100, r * 8); // 设置拖尾粒子的透明度
    ellipse(x, y, r * 2, r * 2);
    h = (h + 0.8) % 320;
  }
  pop();
}
function sleighd() {
  sleighy += 2
  image(sleigh, 180, sleighy, 100, 100)
  if (sleighy >= height) {
    sleighy = 0
  }

}
function drawSnowman(snowmx2, snowmy2) {
  // snowman
  push()
  translate(snowmx2, snowmy2)
  fill(255);
  scale(0.3)

  ellipse(0, 0, 200, 200);
  ellipse(0, 0 - 125, 150, 150);
  ellipse(0, 0 - 225, 100, 100);

  // hat
  fill(0);
  rect(0 - 35, 0 - 360, 70, 100);
  ellipse(0, 0 - 260, 100, 10);

  // eyes
  ellipse(0 - 15, 0 - 235, 5, 5);
  ellipse(0 + 15, 0 - 235, 5, 5);

  // carrot
  fill(255, 165, 0);
  triangle(0, 0 - 225, 0, 0 - 215, 0 + 40, 0 - 200);

  // arms
  stroke(139, 69, 19);
  strokeWeight(5);
  line(0 - 70, 0 - 125, 0 - 150, 0 - 150);
  line(0 + 70, 0 - 125, 0 + 150, 0 - 150);

  // scarf
  strokeWeight(0);
  fill(0, 0, 255);
  rect(0 - 45, 0 - 190, 90, 20);
  rect(0 - 45, 0 - 190, 20, 80);
  push();
  noFill();
  strokeWeight(5)
  stroke(10);
  arc(0, 0 - 215, 80, 50, 0.2, PI - 0.2); // 在眼睛下方绘制弧形作为笑脸
  pop();
  image(sleigh, 0 - 150, 0, 300, 300)
  // buttons
  fill(0);
  push();
  colorMode(HSB, 360, 100, 100);
  noStroke();
  let h = random(320)
  for (let r = 10; r > 0; --r) {
    fill(h, 100, 100, r * 8); // 设置拖尾粒子的透明度
    ellipse(0, 0 - 110, r * 3, r * 3);
    h = (h + 0.8) % 320;
  }
  pop();
  circleb(0, 0 - 80)
  ellipse(0, 0 - 80, 7, 7);
  ellipse(0, 0 - 50, 7, 7);
  pop()
}
function showText() {
  displayText = true;
  startTime = millis();
}

function hideText() {
  displayText = false;
}
function setAppearanceTime() {
  // 产生一个随机的出现时间（在 1 到 5 秒之间）
  let seconds = int(random(9, 11));
  appearanceTime = seconds * 30; // 将秒数转换为帧数（1秒 = 60帧）
}
function tryagain() {
  scenechange = 1
}