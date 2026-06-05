/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let curr1 = l1;
        let curr2 = l2;
        let carry = 0;
        let result = new ListNode(0);
        let dummy = result;

        while (curr1 || curr2 || carry !== 0) {
            let v1 = curr1 ? curr1.val : 0;
            let v2 = curr2 ? curr2.val : 0;

            dummy.next = new ListNode((v1 + v2 + carry) % 10);
            carry = Math.floor((v1 + v2 + carry) / 10);
            curr1 = curr1 ? curr1.next : null;
            curr2 = curr2 ? curr2.next : null;
            dummy = dummy.next;
        }
        return result.next;
    }
}
