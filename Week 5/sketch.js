let particles = [];

function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 360, 100, 100);
  noFill();
  smooth(8);

  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    let hue = random(360);
    particles.push(new Particle(x, y, hue));
  }
}

function draw() {
  background(0, 5); // Add a slight background fade for a trail effect

  for (let particle of particles) {
    particle.update();
    particle.display();
  }
}

class Particle {
  constructor(x, y, hue) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.hue = hue;
    this.size = random(10, 40);
    this.life = random(100, 400);
  }

  update() {
    this.pos.add(this.vel);
    this.life--;

    if (this.life <= 0) {
      this.respawn();
    }

    if (this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.pos.y > height) {
      this.respawn();
    }
  }

  respawn() {
    this.pos.x = random(width);
    this.pos.y = random(height);
    this.hue = random(360);
    this.size = random(10, 40);
    this.life = random(100, 400);
    this.vel.set(random(-1, 1), random(-1, 1));
  }

  display() {
    stroke(this.hue, 100, 100, this.life / 400 * 100); // Vary opacity with life
    strokeWeight(1);
    for (let i = 0; i < this.size; i += 5) {
      ellipse(this.pos.x, this.pos.y, this.size - i, this.size - i);
    }
  }
}
