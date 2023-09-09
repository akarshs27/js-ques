// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
// Input: head = [1,2,2,1]
// Output: true

function isPalindrome(head) {
    let fast = head;
    let slow = head;

    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    fast = head;
    slow = reverse(slow);

    while(slow !== null) {
        if(slow.val !== fast.val) {
            return false;
        }

        slow = slow.next;
        fast = fast.next;
    }

    return true;
}

function reverse(head) {
    let prevNode = null

    while(head !== null) {
        let nextNode = head.next;
        head.next = prevNode;
        prevNode = head;
        head = nextNode;
    }

    return prevNode;
}
