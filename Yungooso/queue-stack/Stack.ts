export interface IStack<T> {
  push(item: T): void;
  pop(): T | undefined;
  isEmpty(): boolean;
}

export default class Stack<T> implements IStack<T> {
  private arr: Array<T> = [];

  constructor() {
    this.push = this.push.bind(this);
    this.pop = this.pop.bind(this);
  }

  public push(item: T): void {
    this.arr.push(item);
  }

  public pop(): T | undefined {
    const item = this.arr.pop();
    return item;
  }

  public isEmpty(): boolean {
    return this.arr.length === 0 ? true : false;
  }
}
