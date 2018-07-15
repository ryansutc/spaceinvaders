import { Starfield } from "./starfield";

let container = document.getElementById('container');
let starfield = new Starfield(container);
starfield.start();
window.onload = function () {
  console.log("I was run!");
  //document.getElementById("randomise").onclick = randomise();
  document.getElementById("randomise").addEventListener('click', randomise);

  function randomise() {
    starfield.stop();
    starfield.starCount = Math.random() * 1000 + 50;
    starfield.minVelocity = Math.random() * 30 + 5;
    starfield.maxVelocity = Math.random() * 50 + starfield.minVelocity;
    starfield.start();
  }
}
