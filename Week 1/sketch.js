function setup() {
  createCanvas(4000, 4000);
  background(220);

  //vlag
  fill('red');
  rect(400, 10, 100, 30);
  fill('white');
  rect(400, 40, 100, 30)
  fill('blue');
  rect(400, 70, 100, 30);
  text('2.', 380, 10, 40);
  //naam;
  fill('black')
  text('1.Rowan', 10, 10, 50);
  //schaakbord
  text('3.', 180, 10, 40);
  fill('black');
  square(200, 10, 50);
  fill('white');
  square(250, 10, 50);
  fill('black');
  square(300, 10, 50);
  fill('white');
  square(200, 60, 50);
  square(300, 60, 50);
  fill('black');
  square(250, 60, 50);
  square(200, 110, 50);
  square(300, 110, 50);
  fill('white');
  square(250, 110, 50);
  //huis
  push()
  noFill()
  square(10, 200, 50);
  triangle(9, 200, 61, 200, 35, 160)
  text('4.', 3, 180, 40)
  pop()
  //verkeerslicht 
  fill('black')
  rect(10, 260, 30, 100)
  fill('red')
  circle(25, 275, 25)
  fill('yellow')
  circle(25, 308, 25)
  fill('green')
  circle(25, 340, 25)
  fill('black')

  text('5.', 2, 250, 40)
  //dobelsteen 
  rect(20, 360, 10, 100)
  fill('white')
  square(250, 200, 75, 10)
  fill('black')
  circle(265, 215, 20,)
  circle(288, 238, 20,)
  circle(310, 260, 20,)
  text('6.', 240, 200, 40)
  //mario
  strokeWeight(0)
  fill('red')
  rect(400, 400, 150, 30)
  rect(370, 430, 270, 30)
  fill('#875526')
  rect(370, 460, 100, 30)
  rect(410, 490, 30, 30)
  rect(410, 520, 60, 30)
  rect(340, 490, 30, 60)
  rect(340, 550, 70, 30)
  fill('black')
  rect(520, 460, 30, 60)
  rect(550, 520, 30, 30)
  rect(520, 550, 120, 30)
  fill('#c99d73')
  rect(370, 490, 40, 60)
  rect(470, 460, 50, 30)
  rect(440, 490, 80, 30)
  rect(470, 520, 80, 30)
  rect(580, 520, 80, 30)
  rect(550, 490, 80, 30)
  rect(410, 550, 110, 30)
  rect(410, 580, 200, 30)
  fill('red')
  rect(490, 610, 90, 30)
  rect(380, 610, 60, 30)
  rect(350, 640, 90, 30)
  rect(320, 670, 120, 30)
  rect(380, 700, 30, 30)
  rect(490, 640, 60, 30)
  rect(580, 640, 60, 60)
  rect(640, 670, 60, 60)
  rect(610, 700, 30, 30)
  fill('blue')
  rect(440, 610, 50, 90)
  rect(550, 640, 30, 60)
  rect(490, 670, 60, 120)
  fill("yellow")
  rect(460, 700, 30, 30)
  rect(550, 700, 30, 30)
  fill('blue')
  rect(410, 700, 50, 90)
  rect(460, 730, 30, 60)
  rect(550, 730, 60, 60)
  rect(580, 700, 30, 30)
  rect(410, 790, 200, 30)
  rect(380, 760, 90, 90)
  rect(550, 760, 90, 90)
  fill('#2c1b0c')
  rect(580, 850, 90, 60)
  rect(350, 850, 90, 60)
  rect(320, 880, 30, 30)
  rect(670, 880, 30, 30)
  fill('#c99d73')
  rect(320, 700, 60, 90)
  rect(350, 730, 60, 30)
  rect(640, 700, 60, 90)
  rect(610, 730, 60, 30)
  fill('black')
  text('7.', 300, 700, 40)

  //packman
  fill('yellow')
  rect(500, 1000, 60, 120)
  rect(460, 1020, 60, 180)
  rect(500, 1010, 60, 100)
  rect(450, 1040, 10, 140)
  rect(440, 1060, 10, 100)
  rect(430, 1080, 10, 60)
  rect(560, 1020, 20, 90)
  rect(580, 1020, 20, 70)
  rect(600, 1040, 20, 50)
  rect(500, 1130, 50, 80)
  rect(510, 1170, 100, 10)
  rect(510, 1160, 100, 10)
  rect(510, 1180, 100, 10)
  rect(500, 1190, 100, 10)
  rect(480, 1200, 80, 10)
  rect(490, 1150, 100, 10)



  fill('black')
  rect(500, 1000, 60, 10)
  rect(480, 1010, 20, 10)
  rect(460, 1020, 20, 10)
  rect(450, 1030, 10, 10)
  rect(440, 1040, 10, 20)
  rect(430, 1060, 10, 20)
  rect(420, 1080, 10, 60)
  rect(430, 1140, 10, 20)
  rect(440, 1160, 10, 20)
  rect(450, 1180, 10, 10)
  rect(460, 1190, 20, 10)
  rect(480, 1200, 20, 10)
  rect(500, 1210, 60, 10)
  rect(560, 1010, 20, 10)
  rect(580, 1020, 20, 10)
  rect(580, 1190, 20, 10)
  rect(560, 1200, 20, 10)
  rect(600, 1180, 10, 10)
  rect(610, 1170, 10, 10)
  rect(600, 1030, 10, 10)
  rect(610, 1040, 10, 20)
  rect(620, 1060, 10, 20)
  rect(600, 1080, 20, 10)
  rect(580, 1090, 20, 10)
  rect(560, 1100, 20, 10)
  rect(540, 1110, 20, 10)
  rect(520, 1120, 20, 10)
  rect(530, 1130, 20, 10)
  rect(550, 1140, 20, 10)
  rect(570, 1150, 20, 10)
  rect(590, 1160, 20, 10)





  //oog
  fill('black')
  rect(530, 1090, 20, 10)
  rect(520, 1070, 40, 20)
  rect(520, 1060, 20, 10)
  rect(530, 1050, 10, 10)
  text('8.', 450, 1000, 40)

  fill('white')
  rect(540, 1050, 10, 20)
  rect(550, 1060, 10, 10)


  fill('blue')
  rect(540, 1060, 10, 10)

}

function draw() {
}