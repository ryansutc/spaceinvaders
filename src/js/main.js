import { Starfield } from "./starfield.js";

let container = document.getElementById('container');
let starfield = new Starfield(container);
starfield.start();

document.getElementById("randomise").onclick = randomise();

function randomise() {
  starfield.stop();
  starfield.stars = Math.random() * 1000 + 50;
  starfield.minVelocity = Math.random() * 30 + 5;
  starfield.maxVelocity = Math.random() * 50 + starfield.minVelocity;
  starfield.start();
}