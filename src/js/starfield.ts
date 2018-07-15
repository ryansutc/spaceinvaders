/*
  Starfield lets you take a div and turn it into a starfield.
*/

class Star {
  x: number;
  y: number;
  readonly size: number;
  readonly velocity: number;
  constructor(x: number, y: number, size: number, velocity: number) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.velocity = velocity;
  }
}
//	Define the starfield class and initialize.
class Starfield {
  static readonly fps = 30;
  width: number;
  height: number;
  minVelocity: number;
  maxVelocity: number;
  stars: Star[]; //array of star objects
  starCount: number;
  intervalId: any;
  containerDiv: HTMLElement;
  canvas: any;

  constructor(div: HTMLElement) {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.minVelocity = 15;
    this.maxVelocity = 30;
    this.starCount = 100;
    this.intervalId = 0;
    this.containerDiv = div;

    this.canvas = document.createElement('canvas');
    div.appendChild(this.canvas);
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    // arrow function means we don't need to assign this = _this
    window.addEventListener('resize', (event) => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      this.draw();
    });
  }

  start() {
    //	Create the stars.
    let stars = [];
    for (let i = 0; i < this.starCount; i++) {
      stars[i] = new Star(Math.random() *
        this.width, Math.random() *
        this.height, Math.random() * 3 + 1,
        (Math.random() * (this.maxVelocity - this.minVelocity)) + this.minVelocity);
    }
    this.stars = stars;

    let _this = this; // not sure how to avoid this closure in typescript, is there better way?

    //	Start the timer.
    this.intervalId = setInterval(function () {
      _this.update();
      _this.draw();
    }, 1000 / Starfield.fps);
  };

  stop() {
    clearInterval(this.intervalId);
  };

  update() {
    let dt = 1 / Starfield.fps;

    for (let i = 0; i < this.stars.length; i++) {
      let star = this.stars[i];
      star.y += dt * star.velocity;
      //	If the star has moved from the bottom of the screen, spawn it at the top.
      if (star.y > this.height) {
        this.stars[i] = new Star(Math.random() * this.width, 0, Math.random() * 3 + 1,
          (Math.random() * (this.maxVelocity - this.minVelocity)) + this.minVelocity);
      }
    }
  };

  draw() {

    //	Get the drawing context.
    let ctx = this.canvas.getContext("2d");

    //	Draw the background.
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, this.width, this.height);

    //	Draw stars.
    ctx.fillStyle = '#ffffff';
    for (let i = 0; i < this.stars.length; i++) {
      let star = this.stars[i];
      ctx.fillRect(star.x, star.y, star.size, star.size);
    }
  };
} // end Starfield

export { Starfield, Star };