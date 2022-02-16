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

  add(item: number) {
    if (this.items.length < this.size) {
       this.items.push(item);
    }

    this.items.shift();
    
    this.items.push(item);
  }

  average(): number {
    return this.items.reduce((acc, current) => acc + current, 0) / this.size;
  }

  next(val: number): number {
    this.add(val);
    
    return this.average();
  }
}
