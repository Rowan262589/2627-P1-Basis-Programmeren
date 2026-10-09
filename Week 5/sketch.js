let nuBijDitScherm = "startscherm";
let antwoordA;
let antwoordB;
let antwoordC;
let antwoordD;
let startSchermButton;
let vorigeSchermButton;
let volgendeSchermButton;
let opnieuwButton;

const schermen = [
  "startscherm",
  "vraag1",
  "vraag2",
  "vraag3",
  "vraag4",
  "vraag5",
  "vraag6",
  "vraag7",
  "vraag8",
  "vraag9",
  "vraag10",
  "eindscherm"
];

function zetButtonStijl(button) {
  button.style('font-size', '16px');
  button.style('background-color', 'transparent');
  button.style('color', '#000000');
  button.style('border', '1px solid #000000');
  button.style('border-radius', '4px');
  button.style('padding', '8px 16px');
}

function setup() {
  createCanvas(800, 800);

  startSchermButton = createButton('Start met de vragen.');
  startSchermButton.position(300, 300);
  zetButtonStijl(startSchermButton);
  startSchermButton.mousePressed(startSchermButtonClick);

  antwoordA = createButton('A');
  antwoordA.position(100, 200);
  zetButtonStijl(antwoordA);
  antwoordB = createButton('B');
  antwoordB.position(200, 200);
  zetButtonStijl(antwoordB);
  antwoordC = createButton('C');
  antwoordC.position(100, 300);
  zetButtonStijl(antwoordC);
  antwoordD = createButton('D');
  antwoordD.position(200, 300);
  zetButtonStijl(antwoordD);
  antwoordB.mousePressed(goedFunctie);

  vorigeSchermButton = createButton('Vorige');
  vorigeSchermButton.position(100, 400);
  zetButtonStijl(vorigeSchermButton);
  vorigeSchermButton.mousePressed(vorigeScherm);

  volgendeSchermButton = createButton('Volgende');
  volgendeSchermButton.position(200, 400);
  zetButtonStijl(volgendeSchermButton);
  volgendeSchermButton.mousePressed(volgendeScherm);

  opnieuwButton = createButton('Terug naar startscherm');
  opnieuwButton.position(300, 300);
  zetButtonStijl(opnieuwButton);
  opnieuwButton.mousePressed(function() {
    nuBijDitScherm = "startscherm";
  });
}

function startSchermButtonClick() {
  nuBijDitScherm = "vraag1";
}

function vorigeScherm() {
  const huidigeIndex = schermen.indexOf(nuBijDitScherm);
  if (huidigeIndex > 0) {
    nuBijDitScherm = schermen[huidigeIndex - 1];
  }
}

function volgendeScherm() {
  const huidigeIndex = schermen.indexOf(nuBijDitScherm);
  if (huidigeIndex < schermen.length - 1) {
    nuBijDitScherm = schermen[huidigeIndex + 1];
  }
}

function goedFunctie() {
  antwoordB.style('background-color', 'transparent');
}

function draw() {
  background(220);
  textSize(32);
  textAlign(CENTER);

  startSchermButton.hide();
  antwoordA.hide();
  antwoordB.hide();
  antwoordC.hide();
  antwoordD.hide();
  vorigeSchermButton.hide();
  volgendeSchermButton.hide();
  opnieuwButton.hide();

  if (nuBijDitScherm === "startscherm") {
    text("Startscherm", width / 2, 150);
    startSchermButton.show();
  } else if (nuBijDitScherm === "eindscherm") {
    text("Eindscherm", width / 2, 150);
    vorigeSchermButton.show();
    opnieuwButton.show();
  } else {
    const vraagNummer = schermen.indexOf(nuBijDitScherm);
    text("Vraag " + vraagNummer, width / 2, 150);
    antwoordA.show();
    antwoordB.show();
    antwoordC.show();
    antwoordD.show();
    vorigeSchermButton.show();
    volgendeSchermButton.show();
  }
}
// De quiz bestaat uit een lijst met vragen.
// Elk object bevat: de vraagtekst, het juiste antwoord en 4 mogelijke keuzes.
const questions = [
  {
    question: "Welk wapen heeft iedere Helldiver standaard?",
    answer: "AR-23 Liberator",
    choices: ["AR-23 Liberator", "R-63 Diligence", "SMG-37 Defender", "SG-8 Punisher"]
  },
  {
    question: "Waar staat SEAF voor?",
    answer: "Super Earth Armed Forces",
    choices: [
      "Super Earth Armed Forces",
      "Strategic Elite Assault Fleet",
      "Super Earth Alliance Federation",
      "Special Expeditionary Army Front"
    ]
  },
  {
    question: "Welk schip haalt je op aan het einde van een missie?",
    answer: "Pelican-1",
    choices: ["Pelican-1", "Eagle-1", "Shuttle-01", "Destroyer-1"]
  },
  {
    question: "Hoeveel Helldivers zijn er gestorven in de Slag om Malevelon Creek?",
    answer: "25 miljoen Helldivers",
    choices: [
      "25 miljoen Helldivers",
      "2,5 miljoen Helldivers",
      "50 miljoen Helldivers",
      "25 duizend Helldivers"
    ]
  },
  {
    question: "Welke Terminid stormt op je af met een zwaar pantser?",
    answer: "Charger",
    choices: ["Charger", "Bile Titan", "Brood Commander", "Stalker"]
  },
  {
    question: "Welke zwaar bepantserde Automaton heeft onder meer een raketvariant?",
    answer: "Hulk",
    choices: ["Hulk", "Devastator", "Berserker", "Factory Strider"]
  },
  {
    question: "Welke van deze namen hoort bij een echte plaats?",
    answer: "Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch II",
    choices: [
      "Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch II",
      "Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch IV",
      "Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch Prime",
      "Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch Creek"
    ]
  },
  {
    question: "Wat doet de armor passive 'Democracy Protects'?",
    answer: "50% kans om te blijven leven",
    choices: [
      "50% kans om te blijven leven",
      "50% minder schade door explosies",
      "Je kunt niet worden onderbroken tijdens stimgebruik",
      "Je krijgt 50% meer maximale gezondheid"
    ]
  },
  {
    question: "Welke studio heeft Helldivers 2 gemaakt?",
    answer: "Arrowhead Game Studios",
    choices: [
      "Arrowhead Game Studios",
      "Bungie Studios",
      "Ghost Ship Games",
      "Guerrilla Games"
    ]
  },
  {
    question: "Wie zorgt er volgens de community voor dat planeten worden aangevallen?",
    answer: "Joel",
    choices: ["Joel", "The Game Master", "General Brasch", "Super Earth Command"]
  }
];

// De canvas afmetingen en de state van de applicatie.
// De variabelen houden bij welke scherm we tonen, welke vraag actief is en hoeveel punten zijn gescoord.
const canvasWidth = 1000;
const canvasHeight = 720;
const answerButtons = [];
let screen = "start";
let questionIndex = 0;
let score = 0;
let selectedAnswer = null;

// Setup wordt één keer uitgevoerd bij het starten van het programma.
// Hier maken we de canvas aan en tekenen we het eerste scherm één keer.
function setup() {
  createCanvas(canvasWidth, canvasHeight);
  textFont("Arial");
  textAlign(LEFT, TOP);
  noLoop();
  redraw();
}

// draw() beslist welk scherm getoond moet worden.
// Zo blijft de code overzichtelijk: elke schermfunctie heeft één taak.
function draw() {
  background("#08121f");
  drawHeader();

  if (screen === "start") {
    drawStartScreen();
  } else if (screen === "quiz") {
    drawQuestion();
  } else {
    drawResult();
  }
}

// De header bovenaan de pagina geeft de titel en een scheidingslijn weer.
function drawHeader() {
  noStroke();
  fill("#f2c744");
  textSize(16);
  textStyle(BOLD);
  text("HELLDIVERS 2 // KENNISQUIZ", 56, 34);
  textStyle(NORMAL);
  stroke("#344253");
  line(56, 66, width - 56, 66);
}

// Het startscherm laat de speler zien wat de quiz inhoudt en biedt een button om te beginnen.
function drawStartScreen() {
  fill("#f4f6f8");
  textSize(46);
  textStyle(BOLD);
  text("Ben jij klaar voor de", 56, 190);
  text("ultieme Helldivers-test?", 56, 244);

  textStyle(NORMAL);
  fill("#afbdcc");
  textSize(20);
  text("10 vragen. Vier lastige opties per vraag. Hoeveel weet jij echt?", 56, 322);
  text("Je krijgt pas door na je antwoord of je het goed had.", 56, 354);

  drawButton(56, 430, 250, 64, "START DE QUIZ", "#f2c744", "#08121f");
}

// Het actieve quizscherm toont de huidige vraag, de voortgang en de antwoordknoppen.
function drawQuestion() {
  const question = questions[questionIndex];

  fill("#afbdcc");
  textSize(16);
  textStyle(BOLD);
  text("VRAAG " + (questionIndex + 1) + " / " + questions.length, 56, 96);
  textAlign(RIGHT, TOP);
  text("SCORE  " + score, width - 56, 96);
  textAlign(LEFT, TOP);
  textStyle(NORMAL);

  drawProgress();

  fill("#f4f6f8");
  textSize(29);
  textStyle(BOLD);
  drawWrappedText(question.question, 56, 165, width - 112, 42);
  textStyle(NORMAL);

  // Reset de lijst met mogelijke klikvlakken voordat de antwoorden opnieuw worden getekend.
  answerButtons.length = 0;
  const positions = [
    { x: 56, y: 310 },
    { x: 510, y: 310 },
    { x: 56, y: 416 },
    { x: 510, y: 416 }
  ];

  // Elk antwoord krijgt een vaste plek op het scherm en wordt als button getekend.
  question.choices.forEach(function(choice, index) {
    const bounds = { ...positions[index], w: 434, h: 82, choice: choice };
    answerButtons.push(bounds);

    let fillColor = "#172638";
    let borderColor = "#526174";
    let textColor = "#f4f6f8";

    if (selectedAnswer !== null && choice === question.answer) {
      fillColor = "#164b3a";
      borderColor = "#43c58a";
    } else if (selectedAnswer === choice) {
      fillColor = "#5a2930";
      borderColor = "#f06b72";
    }

    drawButton(bounds.x, bounds.y, bounds.w, bounds.h, choice, fillColor, textColor, borderColor);
  });

  // Zodra de speler een antwoord heeft gekozen, tonen we feedback en een verderknop.
  if (selectedAnswer !== null) {
    const isCorrect = selectedAnswer === question.answer;
    fill(isCorrect ? "#65dda5" : "#ff858a");
    textSize(18);
    textStyle(BOLD);
    text(isCorrect ? "Correct! Goede inzet, Helldiver." : "Fout. Het juiste antwoord is: " + question.answer, 56, 535, width - 112);
    textStyle(NORMAL);

    const isLastQuestion = questionIndex === questions.length - 1;
    drawButton(
      56,
      590,
      270,
      60,
      isLastQuestion ? "BEKIJK RESULTAAT" : "VOLGENDE VRAAG",
      "#f2c744",
      "#08121f"
    );
  }
}

// De voortgangsbalk geeft visueel weer hoeveel vragen al zijn beantwoord.
function drawProgress() {
  const x = 56;
  const y = 127;
  const barWidth = width - 112;
  noStroke();
  fill("#263649");
  rect(x, y, barWidth, 8, 4);
  fill("#f2c744");
  rect(x, y, barWidth * (questionIndex / questions.length), 8, 4);
}

// Aan het einde van de quiz verschijnt een samenvatting met score en passend commentaar.
function drawResult() {
  const percentage = Math.round((score / questions.length) * 100);
  let message = "Training aanbevolen. Terug naar de basis, Helldiver.";

  if (score >= 9) {
    message = "Legendarisch! Super Earth is trots op je.";
  } else if (score >= 7) {
    message = "Sterk werk. Jij bent klaar voor het front.";
  } else if (score >= 4) {
    message = "Niet slecht.";
  }

  fill("#f4f6f8");
  textSize(42);
  textStyle(BOLD);
  text("Missie voltooid", 56, 176);

  fill("#f2c744");
  textSize(76);
  text(score + " / " + questions.length, 56, 250);
  fill("#afbdcc");
  textSize(22);
  text(percentage + "% correct", 60, 348);
  fill("#f4f6f8");
  textSize(20);
  textStyle(NORMAL);
  text(message, 56, 398, width - 112);

  drawButton(56, 490, 250, 64, "OPNIEUW SPELEN", "#f2c744", "#08121f");
}

// Deze helper tekent een afgeronde knoop met tekst en een rand.
// Zo kunnen we dezelfde styling hergebruiken voor alle menu- en antwoordknoppen.
function drawButton(x, y, buttonWidth, buttonHeight, label, color, labelColor, borderColor) {
  const corners = 8;
  fill(color);
  stroke(borderColor || color);
  strokeWeight(2);
  rect(x, y, buttonWidth, buttonHeight, corners);

  noStroke();
  fill(labelColor);
  textSize(16);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  drawWrappedText(label, x + buttonWidth / 2, y + buttonHeight / 2, buttonWidth - 32, 19, buttonHeight - 12);
  textAlign(LEFT, TOP);
  textStyle(NORMAL);
}

// Tekst wordt omgebroken zodat langere vragen netjes binnen de beschikbare breedte passen.
function drawWrappedText(value, x, y, maxWidth, lineHeight, maxHeight) {
  const words = value.split(" ");
  let line = "";
  let lines = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let testLine = line ? line + " " + word : word;

    if (textWidth(testLine) <= maxWidth) {
      line = testLine;
      continue;
    }

    if (line) {
      lines.push(line);
      line = "";
    }

    while (textWidth(word) > maxWidth) {
      let splitAt = 1;
      while (splitAt < word.length && textWidth(word.slice(0, splitAt + 1)) <= maxWidth) {
        splitAt++;
      }
      lines.push(word.slice(0, splitAt));
      word = word.slice(splitAt);
    }

    line = word;
  }
  if (line) {
    lines.push(line);
  }

  const totalHeight = lines.length * lineHeight;
  let lineY = maxHeight ? y + Math.max(0, (maxHeight - totalHeight) / 2) : y;
  for (let i = 0; i < lines.length; i++) {
    text(lines[i], x, lineY);
    lineY += lineHeight;
  }
}

// Klikgedrag koppelt de muisaanwijzer aan de verschillende schermen en buttons.
function mousePressed() {
  if (screen === "start") {
    if (isInside(56, 430, 250, 64)) {
      startQuiz();
    }
    return;
  }

  if (screen === "result") {
    if (isInside(56, 490, 250, 64)) {
      screen = "start";
      redraw();
    }
    return;
  }

  if (selectedAnswer === null) {
    for (let i = 0; i < answerButtons.length; i++) {
      const button = answerButtons[i];
      if (isInside(button.x, button.y, button.w, button.h)) {
        selectedAnswer = button.choice;
        if (selectedAnswer === questions[questionIndex].answer) {
          score++;
        }
        redraw();
        return;
      }
    }
  } else if (isInside(56, 590, 270, 60)) {
    if (questionIndex === questions.length - 1) {
      screen = "result";
    } else {
      questionIndex++;
      selectedAnswer = null;
    }
    redraw();
  }
}

// startQuiz reset de quizstatus en shuffled de antwoordopties per vraag.
function startQuiz() {
  questionIndex = 0;
  score = 0;
  selectedAnswer = null;

  questions.forEach(function(question) {
    question.choices = shuffle(question.choices);
  });

  screen = "quiz";
  redraw();
}

// isInside controleert of de muis zich binnen een rechthoekige knop bevindt.
function isInside(x, y, buttonWidth, buttonHeight) {
  return mouseX >= x && mouseX <= x + buttonWidth &&
    mouseY >= y && mouseY <= y + buttonHeight;
}
