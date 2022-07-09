// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let target = head;
  let next: ListNode | null = target ? target.next : null;
  while (target && next !== null) {
    if (target.val === next.val) {
      next = next.next;
      target.next = next;
    } else {
      target = next;
    }
  }
  return head;
};

// Runtime: 130 ms, faster than 28.71% of TypeScript online submissions for Remove Duplicates from Sorted List.
// Memory Usage: 45.6 MB, less than 11.99% of TypeScript online submissions for Remove Duplicates from Sorted List.


// 다른이 풀이

function deleteDuplicates1(head: ListNode | null): ListNode | null {
  if (!head) return null
  if (!head.next) return head

  let prev = head
  let curr = head.next

  while (curr) {
    while (curr && curr.val === prev.val) { curr = curr.next as ListNode }

    prev.next = curr
    prev = curr

    if (curr) { curr = curr.next as ListNode }
  }

  return head
}
