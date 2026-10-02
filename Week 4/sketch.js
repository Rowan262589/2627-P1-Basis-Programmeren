
let particles = [];
let gestart = false;

 
function setup() {
  //achtergrond
  createCanvas(800, 800);
  colorMode(HSB, 360, 100, 100);
  noFill();
  background(0);
noCursor();

}

function draw() {
  if (gestart == false) return;

  background(0, 0, 0, 0.1 );

 //vormen
  for (let p of particles) {
    stroke(p.kleur, 100, 100);

    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > width) p.vx *= -1;
    if (p.y < 0 || p.y > height) p.vy *= -1;
for (let s = 40; s > 0; s -= 5) {
      if (p.vorm == 0) {
        circle(p.x, p.y, s);
      } else {
        rect(p.x - s/2, p.y - s/2, s, s);
      } 
    }
    
  }
//muis
 circle(mouseX, mouseY, 20);
circle(mouseX, mouseY, 16);
circle(mouseX, mouseY, 12);
circle(mouseX, mouseY, 8);
circle(mouseX, mouseY, 4);
}



//start
function keyPressed() {
  if (keyCode == BACKSPACE) {
    particles = [];
    background(0);
//beweeging
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: random(800),
        y: random(800),
        vx: random(-1, 1),
        vy: random(-1, 1),
        kleur: random(360),
        vorm: floor(random(2))
      
      });
    }

    gestart = true;
    return false;
  }
}