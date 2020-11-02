var hr,mn,sec;
var secondHand , minuteHand , hourHand;



function setup() {
  createCanvas(450,450);
  //createSprite(400, 200, 50, 50);

  angleMode(DEGREES);
}

function draw() {
  background(1);  

  translate(200,200)
  rotate (-90);

  hr = hour();
  mn = minute();
  sec = second();

  
  
  strokeWeight(10);
  noFill();
  
  stroke("blue");
  secondHand = map(sec,0,60,0,360);
  arc(0,0,300,300,0,secondHand);

  stroke("yellow");
  minuteHand = map(mn,0,60,0,360);
  arc(0,0,280,280,0,minuteHand);

  stroke("white");
  hourHand = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,hourHand);

  push();
  rotate(secondHand);
  stroke("blue");
  line(0,0,100,0);
  pop();
  
  
  push();
  rotate(minuteHand);
  stroke("yellow");
  line(0,0,75,0);
  pop();
  
  push();
  rotate(hourHand);
  stroke("white");
  line(0,0,50,0);
  pop();

}