// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// function ListNode(val, next) {
//         this.val = (val===undefined ? 0 : val)
//          this.next = (next===undefined ? null : next)
//   }

function mergeTwoList(l1, l2) {
    let dummy = new ListNode(-1);
    let head = dummy;

    while(l1 && l2) {
        if(l1.val <= l2.val) {
            dummy.next = l1;
            l1 = l1.next;
        } else {
            dummy.next = l2;
            l2 = l2.next;
        }
        dummy = dummy.next;
    }

    if(l1) {
        dummy.next = l1;
    }
    if(l2) {
        dummy.next = l2;
    }
    return head.next;
}