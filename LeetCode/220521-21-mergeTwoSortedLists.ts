/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const result = new ListNode(0);
  let target = result;
  let L1 = list1;
  let L2 = list2;
  while (L1 || L2) {
    if (!L1) {
      target.next = L2;
      L2 = L2.next;
    } else if (!L2) {
      target.next = L1;
      L1 = L1.next;
    } else if (L1.val > L2.val) {
      target.next = L2;
      L2 = L2.next;
    } else {
      target.next = L1;
      L1 = L1.next;
    }

    target = target.next;
  }
  return result.next;
};
