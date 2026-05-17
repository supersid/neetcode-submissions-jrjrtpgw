// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let curr = head;
        let oldToNew = new Map();
        oldToNew.set(null, null);

        while (curr) {
            let copy = new Node(curr.val);
            oldToNew.set(curr, copy);
            curr = curr.next;
        }

        curr = head;
        while (curr) {
            let copy = oldToNew.get(curr);
            copy.next = oldToNew.get(curr.next);
            copy.random = oldToNew.get(curr.random);
            curr = curr.next;
        }
        return oldToNew.get(head);
    }
}
