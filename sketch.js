var boyimg, boy;
var gameState = 0;
//var timeDelay=0;
//var randTime=0;
var count = 0;
function preload() {
  boyknifeimg = loadAnimation(
    "knife.png",
    "KNIFE2.png",
    "KNIFE3.png",
    "KNIFE4.png",
    "KNIFE6.png"
  );
  boyjetpackimg = loadAnimation("JETPACK1.png", "JETPACK2.png", "JETPACK3.png");
  boygunimg = loadAnimation("GUN1.png", "GUN2.png", "GUN3.png");
  jetpackimg = loadImage("JETPACKICON.png");
  knifeimg = loadImage("KNIFEICON.png");
  gunimg = loadImage("GUNICON.png");
  boyimg = loadAnimation(
    "RUNNING1.png",
    "RUNNING2.png",
    "RUNNING3.png",
    "RUNNING4.png",
    "RUNNING5.png",
    "RUNNING6.png",
    "RUNNING7.png"
  );
  bg = loadImage("bg3.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  boy = createSprite(windowWidth / 8, 100);
  boy.addAnimation("running", boyimg);
  boy.addAnimation("boyjetpack", boyjetpackimg);
  boy.addAnimation("boyknife", boyknifeimg);
  boy.addAnimation("boygun", boygunimg);
  boy.setCollider("circle", 0, 0, 30);

  jetpack = createSprite(windowWidth/1.2, 100);
  jetpack.addImage(jetpackimg);
  jetpack.setCollider("circle", 0, 0, 40);

  knife = createSprite(windowWidth/2, 100);
  knife.addImage(knifeimg);
  knife.setCollider("circle", 0, 0, 40);

  gun = createSprite(windowWidth/6, 100);
  gun.addImage(gunimg);
  gun.setCollider("circle", 0, 0, 40);


  about = createSprite(100, 100, 50, 50);
  story = createSprite(100, 200, 50, 50);
  forward = createSprite(windowWidth - 100, 100, 50, 50);
  backward = createSprite(windowWidth - 100, 200, 50, 50);
  startButton = createSprite(windowWidth / 2, windowHeight / 2, 50, 20);
  startButton.shapeColor = "white";
  randPosX = Math.round(random(windowWidth - 100, windowHeight - 100));
  randPosY = Math.round(random(windowWidth - 100, windowHeight - 100));

  reactionTimeButton = createSprite(randPosX, randPosY, 100, 100);
}

function draw() {
  background("black");

  if (boy.isTouching(jetpack)) {
    boy.changeAnimation("boyjetpack", boyjetpackimg);
  }

  if (boy.isTouching(knife)) {
    boy.changeAnimation("boyknife", boyknifeimg);
    boyimg.velocityX = 10
  }

  if (boy.isTouching(gun)) {
    boy.changeAnimation("boygun", boygunimg);
  }
  if (mousePressedOver(startButton)) {
    startButton.visible = false;
    reactionTimeButton.visible = true;
    boy.velocityX = 8;

  }
  if ((reactionTimeButton.visible = true)) {
    count = count + 1;
  }
  if (mousePressedOver(reactionTimeButton)) {
    reactionTimeButton.visible = false;
  }
  text("REACTION TIME IN MS: " + count);

  drawSprites();
}
