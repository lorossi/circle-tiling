class Particle {
  constructor(width, height) {
    this._x = random_int(width);
    this._y = random_int(height);

    this._alpha = random(2, 6) / 100;
    this._channel = random_interval(80, 20);
    this._scl = 2;
  }

  show(ctx) {
    ctx.save();
    ctx.translate(this._x, this._y);
    ctx.fillStyle = `rgba(${this._channel}, ${this._channel}, ${this._channel}, ${this._alpha})`;
    ctx.fillRect(0, 0, this._scl, this._scl);
    ctx.restore();
  }
}