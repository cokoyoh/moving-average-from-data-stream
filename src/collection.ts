interface MovingAverageInterface {
  next: (number) => number
}

class Colletion implements MovingAverageInterface {
  private size: number;
  private items: Array<number>

  constructor(size: number) {
    this.size = size;
    this.items = [];
  }

  private add(item: number) {
    if (this.items.length === this.size) {
        this.items.shift();
    }
  
    this.items.push(item);
  }

  private average(): number {
    return this.items.reduce((acc, current) => acc + current, 0) / this.items.length
  }

  next(val: number): number {
    this.add(val);

    return this.average();
  }
}

export { Colletion };
