//Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// Output: Intersected at '8'

//https://leetcode.com/problems/intersection-of-two-linked-lists/description/

//https://www.youtube.com/watch?v=c7dOI-hDa2Q

function intersection(headA, headB) {
    let pointer1 = headA;
    let pointer2 = headB;

    while(pointer1 !== pointer2) {
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;

        if(pointer1 === pointer2) {
            return pointer1;
        }

        if(pointer1 === null) {
            pointer1 = headB;
        }

        if(pointer2 === null) {
            pointer2 = headA;
        }
    }

        return pointer1;
}