class MyHashSet {
    constructor() {
        this.obj = [];
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if (!this.obj.includes(key)) this.obj.push(key);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const idx = this.obj.indexOf(key);
        if (idx > -1) this.obj.splice(idx, 1);
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.obj.includes(key);
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
