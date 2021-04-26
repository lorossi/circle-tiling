class Tile {
  constructor(x, y, scl, rect_color, arc_color) {
    this._x = x;
    this._y = y;
    this._scl = scl;
    this._colors = [rect_color, arc_color];
    this._phi = random_int(4) * Math.PI / 2;

    this._arc_points = 50;
  }

  show(ctx) {
    ctx.save();
    ctx.translate((this._x + 0.5) * this._scl, (this._y + 0.5) * this._scl);
    ctx.rotate(this._phi);
    ctx.fillStyle = this._colors[0];
    ctx.fillRect(-this._scl / 2, -this._scl / 2, this._scl, this._scl);
    ctx.fillStyle = this._colors[1];
    ctx.beginPath();
    ctx.moveTo(-this._scl / 2, -this._scl / 2);
    for (let i = 0; i <= this._arc_points; i++) {
      const theta = Math.PI / 2 * i / this._arc_points;
      const vx = this._scl * Math.cos(theta) - this._scl / 2;
      const vy = this._scl * Math.sin(theta) - this._scl / 2;
      ctx.lineTo(vx, vy);
    }
    ctx.fill();
    ctx.restore();
  }
}