import Stack, { IStack } from './Stack';

export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T | undefined;
}

export default class Queue<T> implements IQueue<T> {
  private stack1 = new Stack<T>();
  private stack2 = new Stack<T>();

  constructor() {
    this.enqueue = this.enqueue.bind(this);
    this.dequeue = this.dequeue.bind(this);
  }

  public enqueue(item: T): void {
    this.stack1.push(item);
  }

  public dequeue(): T | undefined {
    if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        const item = this.stack1.pop();
        if (item) {
          this.stack2.push(item);
        }
      }
    }

    const result = this.stack2.pop();

    return result;
  }
}
