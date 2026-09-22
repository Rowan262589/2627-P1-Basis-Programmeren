let beurt = "X";
let spelKlaar = false;

let hokje1 = "";
let hokje2 = "";
let hokje3 = "";
let hokje4 = "";
let hokje5 = "";
let hokje6 = "";
let hokje7 = "";
let hokje8 = "";
let hokje9 = "";

function setup() {
  createCanvas(400, 450);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);

  // Bord
  fill("black");
  rect(25, 25, 350, 350, 20);

  fill("gray");
  rect(40, 40, 100, 100, 5);
  rect(150, 40, 100, 100, 5);
  rect(260, 40, 100, 100, 5);

  rect(40, 150, 100, 100, 5);
  rect(150, 150, 100, 100, 5);
  rect(260, 150, 100, 100, 5);

  rect(40, 260, 100, 100, 5);
  rect(150, 260, 100, 100, 5);
  rect(260, 260, 100, 100, 5);

  // Vakjes tekenen
  tekenVak(hokje1, 90, 90);
  tekenVak(hokje2, 200, 90);
  tekenVak(hokje3, 310, 90);

  tekenVak(hokje4, 90, 200);
  tekenVak(hokje5, 200, 200);
  tekenVak(hokje6, 310, 200);

  tekenVak(hokje7, 90, 310);
  tekenVak(hokje8, 200, 310);
  tekenVak(hokje9, 310, 310);

  // Tekst onder het bord
  fill("black");
  textSize(20);

  if (spelKlaar) {
    text("Spel afgelopen! Klik om opnieuw te spelen.", 200, 410);
  } else {
    text("Beurt van: " + beurt, 200, 410);
  }
}

function tekenVak(vakje, x, y) {
  if (vakje == "X") {
    fill("blue");
    textSize(70);
    text("X", x, y);
  }

  if (vakje == "O") {
    fill("red");
    textSize(70);
    text("O", x, y);
  }
}

function mouseClicked() {

  // Als het spel klaar is: opnieuw beginnen
  if (spelKlaar) {
    opnieuw();
    return;
  }

  // Vakje 1
  if (mouseX > 40 && mouseX < 140 && mouseY > 40 && mouseY < 140) {
    if (hokje1 == "") {
      hokje1 = beurt;
      wisselBeurt();
    }
  }

  // Vakje 2
  if (mouseX > 150 && mouseX < 250 && mouseY > 40 && mouseY < 140) {
    if (hokje2 == "") {
      hokje2 = beurt;
      wisselBeurt();
    }
  }

  // Vakje 3
  if (mouseX > 260 && mouseX < 360 && mouseY > 40 && mouseY < 140) {
    if (hokje3 == "") {
      hokje3 = beurt;
      wisselBeurt();
    }
  }

  // Vakje 4
  if (mouseX > 40 && mouseX < 140 && mouseY > 150 && mouseY < 250) {
    if (hokje4 == "") {
      hokje4 = beurt;
      wisselBeurt();
    }
  }

  // Vakje 5
  if (mouseX > 150 && mouseX < 250 && mouseY > 150 && mouseY < 250) {
    if (hokje5 == "") {
      hokje5 = beurt;
      wisselBeurt();
    }
  }

  // Vakje 6
  if (mouseX > 260 && mouseX < 360 && mouseY > 150 && mouseY < 250) {
    if (hokje6 == "") {
      hokje6 = beurt;
      wisselBeurt();
    }
  }

  // Vakje 7
  if (mouseX > 40 && mouseX < 140 && mouseY > 260 && mouseY < 360) {
    if (hokje7 == "") {
      hokje7 = beurt;
      wisselBeurt();
    }
  }

  // Vakje 8
  if (mouseX > 150 && mouseX < 250 && mouseY > 260 && mouseY < 360) {
    if (hokje8 == "") {
      hokje8 = beurt;
      wisselBeurt();
    }
  }

  // Vakje 9
  if (mouseX > 260 && mouseX < 360 && mouseY > 260 && mouseY < 360) {
    if (hokje9 == "") {
      hokje9 = beurt;
      wisselBeurt();
    }
  }
}

function wisselBeurt() {
  // Eerst controleren op winnaar
  if (winnaar(beurt)) {
    spelKlaar = true;
    return;
  }

  // Controleren op gelijkspel
  if (
    hokje1 != "" && hokje2 != "" && hokje3 != "" &&
    hokje4 != "" && hokje5 != "" && hokje6 != "" &&
    hokje7 != "" && hokje8 != "" && hokje9 != ""
  ) {
    spelKlaar = true;
    return;
  }

  // Wisselen tussen X en O
  if (beurt == "X") {
    beurt = "O";
  } else {
    beurt = "X";
  }
}

function winnaar(speler) {

  // Horizontaal
  if (
    hokje1 == speler && hokje2 == speler && hokje3 == speler ||
    hokje4 == speler && hokje5 == speler && hokje6 == speler ||
    hokje7 == speler && hokje8 == speler && hokje9 == speler
  ) {
    return true;
  }

  // Verticaal
  if (
    hokje1 == speler && hokje4 == speler && hokje7 == speler ||
    hokje2 == speler && hokje5 == speler && hokje8 == speler ||
    hokje3 == speler && hokje6 == speler && hokje9 == speler
  ) {
    return true;
  }

  // Diagonaal
  if (
    hokje1 == speler && hokje5 == speler && hokje9 == speler ||
    hokje3 == speler && hokje5 == speler && hokje7 == speler
  ) {
    return true;
  }

  return false;
}

function opnieuw() {
  hokje1 = "";
  hokje2 = "";
  hokje3 = "";
  hokje4 = "";
  hokje5 = "";
  hokje6 = "";
  hokje7 = "";
  hokje8 = "";
  hokje9 = "";

  beurt = "X";
  spelKlaar = false;
}