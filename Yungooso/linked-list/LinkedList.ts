export interface INode<T> {
  value: T;
  next?: INode<T>;
}

export interface ILinkedList<T> {
  head?: INode<T>
  tail?: INode<T>
  addToTail(node: INode<T>): void
  removeHead(): void
  toString(): string
}

export default class LinkedList<T> implements ILinkedList<T> {
  public head?: INode<T> = undefined;
  public tail?: INode<T> = undefined;

  constructor() {
    this.addToTail = this.addToTail.bind(this);
    this.removeHead = this.removeHead.bind(this);
  }

  public addToTail(node: INode<T>): void {
    if (!this.tail) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  public removeHead(): void {
    const head = this.head;
    if (!head) {
      return;
    }

    if (head.next) {
      this.head = head.next;
    } else {
      this.head = undefined;
    }
  }

  public toString(): string {
    let str = "";
    let currentNode = this.head;
    while (currentNode) {
      str += `${currentNode.value}`;
      currentNode = currentNode.next;
    }
    return str;
  }
}
