class MyHashMap {
    constructor() {
        this.obj = [];
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let found = false;
        for (let item of this.obj) {
            if (item.length > 0 && item[0] === key) {
                found = true;
                item[1] = value;
            }
        }
        if (!found) this.obj.push([key, value]);
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        for (let item of this.obj) {
            if (item[0] === key) {
                return item[1];
            }
        }
        return -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        for (let item of this.obj) {
            if (item[0] === key) {
                const idx = this.obj.indexOf(item);
                this.obj.splice(idx, 1);
                return;
            }
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
