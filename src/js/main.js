import { Starfield } from "./starfield.js";
var container = document.getElementById('container');
var starfield = new Starfield(container);
starfield.start();

document.getElementById("randomise").onclick = randomise();

function randomise() {
  starfield.stop();
  starfield.stars = Math.random() * 1000 + 50;
  starfield.minVelocity = Math.random() * 30 + 5;
  starfield.maxVelocity = Math.random() * 50 + starfield.minVelocity;
  starfield.start();
}