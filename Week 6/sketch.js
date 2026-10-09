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

const canvasWidth = 1000;
const canvasHeight = 720;
const answerButtons = [];
let screen = "start";
let questionIndex = 0;
let score = 0;
let selectedAnswer = null;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  textFont("Arial");
  textAlign(LEFT, TOP);
  noLoop();
  redraw();
}

function draw() {
  background("#111111");
  drawHeader();

  if (screen === "start") {
    drawStartScreen();
  } else if (screen === "quiz") {
    drawQuestion();
  } else {
    drawResult();
  }
}

function drawHeader() {
  noStroke();
  fill("#f4f4f4");
  textSize(16);
  textStyle(BOLD);
  text("HELLDIVERS 2 // KENNISQUIZ", 56, 34);
  textStyle(NORMAL);
  stroke("#555555");
  line(56, 66, width - 56, 66);
}

function drawStartScreen() {
  fill("#f4f4f4");
  textSize(46);
  textStyle(BOLD);
  text("Ben jij klaar voor de", 56, 190);
  text("ultieme Helldivers-test?", 56, 244);

  textStyle(NORMAL);
  fill("#bdbdbd");
  textSize(20);
  text("10 vragen. Vier lastige opties per vraag. Hoeveel weet jij echt?", 56, 322);
  text("Je krijgt pas door na je antwoord of je het goed had.", 56, 354);

  drawButton(56, 430, 250, 64, "START DE QUIZ", "#f2c744", "#08121f");
}

function drawQuestion() {
  const question = questions[questionIndex];

  fill("#bdbdbd");
  textSize(16);
  textStyle(BOLD);
  text("VRAAG " + (questionIndex + 1) + " / " + questions.length, 56, 96);
  textAlign(RIGHT, TOP);
  text("SCORE  " + score, width - 56, 96);
  textAlign(LEFT, TOP);
  textStyle(NORMAL);

  drawProgress();

  fill("#f4f4f4");
  textSize(29);
  textStyle(BOLD);
  drawWrappedText(question.question, 56, 165, width - 112, 42);
  textStyle(NORMAL);

  answerButtons.length = 0;
  const positions = [
    { x: 56, y: 310 },
    { x: 510, y: 310 },
    { x: 56, y: 416 },
    { x: 510, y: 416 }
  ];

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

function drawProgress() {
  const x = 56;
  const y = 127;
  const barWidth = width - 112;
  noStroke();
  fill("#444444");
  rect(x, y, barWidth, 8, 4);
  fill("#bdbdbd");
  rect(x, y, barWidth * (questionIndex / questions.length), 8, 4);
}

function drawResult() {
  const percentage = Math.round((score / questions.length) * 100);
  let message = "Training aanbevolen. Terug naar de basis, Helldiver.";

  if (score >= 9) {
    message = "Legendarisch! Super Earth is trots op je.";
  } else if (score >= 7) {
    message = "Sterk werk. Jij bent klaar voor het front.";
  } else if (score >= 4) {
    message = "Niet slecht, maar er is nog werk aan de winkel.";
  }

  fill("#f4f6f8");
  textSize(42);
  textStyle(BOLD);
  text("Missie voltooid", 56, 176);

  fill("#bdbdbd");
  textSize(76);
  text(score + " / " + questions.length, 56, 250);

  fill("#bdbdbd");
  textSize(22);
  text(percentage + "% correct", 60, 348);
  fill("#f4f4f4");
  textSize(20);
  textStyle(NORMAL);
  text(message, 56, 398, width - 112);

  drawButton(56, 490, 250, 64, "OPNIEUW SPELEN", "#f2c744", "#08121f");
}

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

function isInside(x, y, buttonWidth, buttonHeight) {
  return mouseX >= x && mouseX <= x + buttonWidth &&
    mouseY >= y && mouseY <= y + buttonHeight;
}
