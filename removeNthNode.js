/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
//https://leetcode.com/problems/remove-nth-node-from-end-of-list/
var removeNthFromEnd = function(head, n) {
    let currNode = head;
    let valuesCount = 0;
    while(currNode){
        valuesCount++;
        currNode = currNode.next;
    }
    let remove = valuesCount - n - 1;
    
    if(valuesCount === 1 || remove < 0){
        return head.next;
    }
    currNode = head;
    let start = currNode;
    while(remove !== 0){
        currNode = currNode.next;
        remove--;
    }
    currNode.next = currNode.next.next;
    return start;
    
};
