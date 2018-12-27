/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//https://leetcode.com/problems/add-two-numbers/
var addTwoNumbers = function(l1, l2) {
    let num = 0;
    let curr  = new ListNode();
    let result = curr;
    while(l1 || l2 || num){
        curr = curr.next = new ListNode();
        if(l1){
            num += l1.val;
            l1 = l1.next;
        }
        if(l2){
            num+=l2.val;
            l2 = l2.next;
        }
        curr.val = num % 10;
        num = num > 9 ? 1 : 0;
    }
    return result.next;
};

