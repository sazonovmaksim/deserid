class Shape {
  constructor() {
    this._x1 = 0;
    this._y1 = 0;
  }

  setPoint(x, y) {
    // Ignore coincident points
    if (x === this._x1 && y === this._y1) return;

    // Update the point if it's not coincident
    this._x1 = x;
    this._y1 = y;
    console.log(`Point updated to (${x}, ${y})`);
  }
}

// Example usage:
const shape = new Shape();
shape.setPoint(5, 10); // Point updated to (5, 10)
shape.setPoint(5, 10); // No output (coincident point ignored)
shape.setPoint(20, 30); // Point updated to (20, 30)
