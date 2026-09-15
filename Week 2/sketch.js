
let beweeg_zon = 0;
let beweeg_auto = 0;
let beweeg_wolk = 0;
let beweeg_auto2 = 0;
let beweeg_ufo = 0;
let timer = 0;
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0,200,255);

  
if (beweeg_zon > 900) {
  beweeg_zon = -100;
}
//zon

fill('yellow');
circle(0+beweeg_zon,100, 100, 100);
beweeg_zon += 0.05 * deltaTime;


//berg
fill('gray');
triangle(100, 500, 250, 100, 400, 500);
fill('#9d9595');
triangle(300, 500, 500, 200, 600, 500);

//stoplicht
fill('#060606');
rect(600, 430, 10, 70);
rect(590, 370, 30, 100)


if (timer > 300) {
 fill('red');
circle(605, 385, 20);
}


if (timer > 200 && timer < 300) {
    fill("yellow");
circle(605, 415, 20);
  beweeg_auto = beweeg_auto + 1
  beweeg_auto2 = beweeg_auto2 + 1
}
 if (timer < 200) {
  fill("green")
circle(605, 450, 20);
 beweeg_auto = beweeg_auto + 5
 beweeg_auto2 = beweeg_auto2 + 2
}

if (timer > 500) {
  timer = 0;
}

text('timer:' + timer, 10, 20);
timer = timer + 1


//weg
fill('#3d3a3a');
rect(0, 500, 800, 100);
fill('white');
rect(80, 540, 50, 10);
rect(200, 540, 50, 10);
rect(320, 540, 50, 10);
rect(440, 540, 50, 10);
rect(560, 540, 50, 10);
rect(680, 540, 50, 10);

//boom1
fill('brown');
rect(700, 400, 20, 100);
fill('green');
circle(710, 400, 80);

//auto2
fill('green');
rect(-100+beweeg_auto2, 550, 100, 30);
rect(-60+beweeg_auto2, 530, 10, 20);
fill('black');
circle(-100+beweeg_auto2  + 20, 580, 20);
circle(-100+beweeg_auto2 + 80, 580, 20);
fill('blue');
triangle(-100+beweeg_auto2 + 50, 530, -100+beweeg_auto2 + 50, 550, -100+beweeg_auto2 + 100, 550);
fill('gray');
rect(-180+beweeg_auto2, 560, 70, 20);
rect(-110+beweeg_auto2, 570, 10, 5);
fill('black');
circle(-145+beweeg_auto2 + 0, 580, 20);
beweeg_auto2 =beweeg_auto2 + 0
if (beweeg_auto2 > 1000) {
  beweeg_auto2 = -100;
}

//auto1
fill('red');
rect(-100+beweeg_auto, 470, 100, 30);
rect(-100+beweeg_auto, 450, 50, 20);
fill('black');
circle(-100+beweeg_auto  + 20, 500, 20);
circle(-100+beweeg_auto + 80, 500, 20);
fill('blue');
triangle(-100+beweeg_auto + 50, 470, -100+beweeg_auto + 50, 450, -100+beweeg_auto + 100, 470);
beweeg_auto =beweeg_auto + 0  
if (beweeg_auto > 900) {
  beweeg_auto = -100;
}

//wolk
fill('#dadada');
ellipse(810+beweeg_wolk, 230, 70, 70);
ellipse(850+beweeg_wolk, 230, 50, 50);
ellipse(770+beweeg_wolk, 230, 50, 50);
fill('white');
ellipse(800+beweeg_wolk, 220, 70, 70);
ellipse(840+beweeg_wolk, 220, 50, 50);
ellipse(760+beweeg_wolk, 220, 50, 50);
beweeg_wolk += -0.15 * deltaTime;
if (beweeg_wolk < -900) {
  beweeg_wolk = 100;
}

//ufo
fill('green');
circle(-400+beweeg_ufo, 80, 80);
fill('gray');
ellipse(-400+beweeg_ufo, 100, 200, 50);
fill('black');
rect(-500+beweeg_ufo, 95, 200, 10, 20);
beweeg_ufo += 2 * deltaTime;
if (beweeg_ufo > 25000) {
  beweeg_ufo = -100;
}
//boom2
fill('brown');
rect(200, 500, 20, 100);
fill('green');
circle(210, 500, 80);






























strokeWeight(0)
}
