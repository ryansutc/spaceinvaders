/*
  Starfield lets you take a div and turn it into a starfield.
*/

class Star {
  constructor(x, y, size, velocity) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.velocity = velocity;
  }
}
//	Define the starfield class and initialize.
class Starfield {
  constructor(div) {
    this.fps = 30;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.minVelocity = 15;
    this.maxVelocity = 30;
    this.stars = 100;
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
    var stars = [];
    for (var i = 0; i < this.stars; i++) {
      stars[i] = new Star(Math.random() *
        this.width, Math.random() *
        this.height, Math.random() * 3 + 1,
        (Math.random() * (this.maxVelocity - this.minVelocity)) + this.minVelocity);
    }
    this.stars = stars;

    var _this = this;

    //	Start the timer.
    _this.intervalId = setInterval(function() {
      _this.update();
      _this.draw();
    }, 1000 / this.fps);
  };

  stop() {
    clearInterval(this.intervalId);
  };

  update() {
    var dt = 1 / this.fps;

    for (var i = 0; i < this.stars.length; i++) {
      var star = this.stars[i];
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
    var ctx = this.canvas.getContext("2d");

    //	Draw the background.
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, this.width, this.height);

    //	Draw stars.
    ctx.fillStyle = '#ffffff';
    for (var i = 0; i < this.stars.length; i++) {
      var star = this.stars[i];
      ctx.fillRect(star.x, star.y, star.size, star.size);
    }
  };
} // end Starfield

export { Starfield, Star };