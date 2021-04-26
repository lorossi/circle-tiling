class Particle {
  constructor(width, height) {
    this._x = random_int(width);
    this._y = random_int(height);

    const channel = random() > 0.5 ? 200 : 55;
    const alpha = random(2, 8) / 100;
    this._color = `rgba(${channel}, ${channel}, ${channel}, ${alpha})`;
    this._radius = 1;
  }

  show(ctx) {
    ctx.save();
    ctx.fillStyle = this._color;
    ctx.beginPath();
    ctx.arc(this._x, this._y, this._radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();
  }
}