class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push({ value: value, timestamp: timestamp });
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const allValues = this.keyStore.get(key);
        let l = 0;
        let r = allValues?.length - 1;
        let res = "";
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (timestamp < allValues[mid].timestamp) {
                r = mid - 1;
            } else if (timestamp >= allValues[mid].timestamp) {
                res = allValues[mid].value;
                l = mid + 1;
            }
        }
        return res;
    }
}
