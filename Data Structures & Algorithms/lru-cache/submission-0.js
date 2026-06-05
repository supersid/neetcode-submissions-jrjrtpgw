class ListNode {
    constructor(key, val, prev, next) {
        this.key = key;
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.head = new ListNode(0, 0);
        this.tail = new ListNode(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.map.has(key)) {
            return -1;
        } else {
            const node = this.map.get(key);
            this.remove(node);
            this.insertAtFront(node);
            return node.val;
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (!this.map.has(key)) {
            if (this.map.size === this.capacity) {
                const node = this.tail.prev;
                this.remove(node);
                this.map.delete(node.key);
            }
            const newNode = new ListNode(key, value);
            this.insertAtFront(newNode);
            this.map.set(key, newNode);
        } else {
            const node = this.map.get(key);
            this.remove(node);
            node.val = value;
            this.insertAtFront(node);
            this.map.set(key, node);
        }
    }

    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    insertAtFront(node) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
    }
}
