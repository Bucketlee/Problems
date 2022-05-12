class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let sumValue: number = l1.val + l2.val;
  let ceil: boolean = sumValue >= 10 ? true : false;

  const node: ListNode = new ListNode((sumValue)%10);

  let tempNode = node;


  while (l1.next || l2.next) {
    l1 = l1.next ? l1.next : new ListNode(0);
    l2 = l2.next ? l2.next : new ListNode(0);

    sumValue = l1.val + l2.val + (ceil ? 1 : 0);
    ceil = sumValue >= 10 ? true : false;

    const newNode: ListNode = new ListNode((sumValue)%10);
    tempNode.next = newNode;
    tempNode = tempNode.next;
    console.log(node);
    console.log(l1, l2);
  }

  if (ceil) {
    tempNode.next = new ListNode(1);
  }

  return node;
};

// Runtime: 118 ms, faster than 79.81% of TypeScript online submissions for Add Two Numbers.
// Memory Usage: 48 MB, less than 83.32% of TypeScript online submissions for Add Two Numbers.

