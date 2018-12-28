/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//https://leetcode.com/problems/swap-nodes-in-pairs/
var swapPairs = function(head) {
    let currNode = head;
    let values = [];
    while(currNode){
        values.push(currNode.val);
        currNode = currNode.next;
    }
    if(values.length === 1){
        return new ListNode(values[0]);
    }
    for(var i = 0; i < values.length; i+=2){
        var tmp = values[i + 1];
        if(tmp !== undefined){
            values[i + 1] = values[i]
            values[i] = tmp;
        }
    }

    let indx = 0;
    let start = new ListNode();
    currNode = start;
    while(values[indx] !== undefined){
        currNode.next = new ListNode(values[indx]);
        currNode = currNode.next;
        indx++;
    }
    return start.next;
};
