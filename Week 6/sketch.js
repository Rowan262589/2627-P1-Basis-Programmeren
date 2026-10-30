let honger = 100;
let gezondeheid = 100;
let energie = 100;
let blijheid = 100;
let woonkamer;

function preload() {
  woonkamer = loadImage("assets/living-room.png");
}

function setup() {
  createCanvas(400, 400);
  let voeden_button = createButton('voeden');
  voeden_button.addClass('voeden-button');
  voeden_button.position(110, 60);
  voeden_button.mousePressed(voeden);

  let rusten_button = createButton('rusten');
  rusten_button.addClass('energie-button');
  rusten_button.position(176, 60);
  rusten_button.mousePressed(rusten);

  let helpen_button = createButton('helpen');
  helpen_button.addClass('gezondheid-button');
  helpen_button.position(234, 60);
  helpen_button.mousePressed(helpen);

  let speelen_button = createButton('speelen');
  speelen_button.addClass('blijheid-button');
  speelen_button.position(295, 60);
  speelen_button.mousePressed(speelen);

  if (getItem("honger") == null) {
    honger = 100;
  } else {
    honger = getItem("honger");
  }

  if (getItem("gezondeheid") == null) {
    gezondeheid = 100;
  } else {
    gezondeheid = getItem("gezondeheid");
  }

  if (getItem("energie") == null) {
    energie = 100;
  } else {
    energie = getItem("energie");
  }

  if (getItem("blijheid") == null) {
    blijheid = 100;
  } else {
    blijheid = getItem("blijheid");
  }
}

function voeden() {
  honger = honger + 20;
}

function rusten() {
  energie = energie + 20;
}

function helpen() {
  gezondeheid = gezondeheid + 20;
}

function speelen() {
  blijheid = blijheid + 20;
}

function reset() {
  honger = 100;
  energie = 100;
  gezondeheid = 100;
  blijheid = 100;
}

function draw() {
  image(woonkamer, 0, 0, width, height);
  storeItem("honger", honger);
  storeItem("energie", energie);
  storeItem("gezondeheid", gezondeheid);
  storeItem("blijheid", blijheid);

  fill("brown");
  honger = honger - 0.05;
  if (honger < 0) { honger = 0; }
  if (honger > 100) { honger = 100; }
  rect(10, 10, 10, honger);

  fill("yellow");
  rect(30, 10, 10, energie);
  energie = energie - 0.05;
  if (energie < 0) { energie = 0; }
  if (energie > 100) { energie = 100; }

  fill("red");
  rect(50, 10, 10, gezondeheid);
  gezondeheid = gezondeheid - 0.1;
  if (gezondeheid < 0) {
    gezondeheid = 0;
  }

  if (gezondeheid > 100) {
    gezondeheid = 100;
  }

  fill("green");
  rect(70, 10, 10, blijheid);
  blijheid = blijheid - 0.05;
  if (blijheid < 0) { blijheid = 0; }
  if (blijheid > 100) { blijheid = 100; }

  fill("white");
  ellipse(200, 200, 100, 100);
  ellipse(180, 190, 20, 20);
  ellipse(220, 190, 20, 20);
  fill("black");
  ellipse(180, 190, 10, 10);
  ellipse(220, 190, 10, 10);

  noFill();
  stroke("black");
  arc(200, 210, 50, 20, 0, PI);

  if (energie < 20) {
    push();
    fill("blue");
    triangle(165, 170, 160, 180, 170, 180);
    ellipse(165, 180, 10, 10);
    pop();
  }

  if (gezondeheid == 0) {
    push();
    fill('white');
    text('X', 176, 194);
    text('X', 216, 194);
    strokeWeight(0);
    pop();
  }
}
