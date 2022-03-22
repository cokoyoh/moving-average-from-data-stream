interface MovingAverageInterface {
  next(val: number): number
}

class Colletion implements MovingAverageInterface {
  private readonly size: number;
  private items: Array<number>

  constructor(size: number) {
    this.size = size;
    this.items = [];
  }

  private add(item: number): Colletion {
    if (this.items.length === this.size) {
        this.items.shift();
    }
  
    this.items.push(item);

    return this;
  }

  private average(): number {
    const average = this.items.reduce((acc, current) => acc + current, 0) / this.items.length;

    return Number(average.toFixed(5));
  }

  next(val: number): number {
    return this.add(val).average();
  }
}

export { Colletion };
