class MinStack {
    constructor() {
        this.stack = [];
        this.min = null;
        this.prevMin = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if (this.min === null || val <= this.min) {
            this.min = val;
            this.prevMin.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        const lastVal = this.stack[this.stack.length - 1];
        if (this.min === lastVal) {
            this.prevMin.pop();
            this.min = this.prevMin.length > 0 ? this.prevMin[this.prevMin.length - 1] : null;
        }
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min;
    }
}
