// Given the head of a linked list, remove the nth node from the end of the list and return its head.
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Input: head = [1], n = 1
// Output: []

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// https://www.youtube.com/watch?v=GVLmucMYiAs

function removeNthFromEnd(head, n) {
 const dummyNode = new ListNode(0);
 dummyNode.next = head;
 let front = dummyNode;
 let back = dummyNode;

 for(let i =0 ;i < n; i++) {
    front = front.next;
 }

 while(front.next !== null) {
    front = front.next;
    back = back.next;
 }

 back.next = back.next.next;
 return dummyNode.next;
}

removeNthFromEnd([[1,2,3,4,5]], 2);