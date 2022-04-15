import LinkedList, { ILinkedList, INode } from "./LinkedList";

function mergeTwoLinkedLists<T>(a: ILinkedList<T>, b: ILinkedList<T>): ILinkedList<T> {
  // TODO
  const newList = new LinkedList<T>();

  let aNode = a.head;
  let bNode = b.head;

  while (aNode && bNode) {
    if (aNode.value > bNode.value) {
      newList.addToTail(bNode);
      bNode = bNode.next;
    } else {
      newList.addToTail(aNode)
      aNode = aNode.next;
    }
  }

  if (aNode) {
    newList.addToTail(aNode);
  } else if (bNode) {
    newList.addToTail(bNode);
  }

  return newList;
}

const A = new LinkedList<number>();
A.addToTail({value: 3, next: undefined});
A.addToTail({value: 5, next: undefined});
A.addToTail({value: 9, next: undefined});

const B = new LinkedList<number>();
B.addToTail({value: 1, next: undefined});
B.addToTail({value: 2, next: undefined});
B.addToTail({value: 7, next: undefined});

const result = mergeTwoLinkedLists(A,B);
console.log(result);
console.log(result.toString());
