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
        if (typeof val === "number") {
            if (this.min === null || val <= this.min) {
                this.min = val;
                this.prevMin.push(val);
            }
        }

        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        const lastVal = this.stack[this.stack.length - 1];
        if (typeof lastVal === "number") {
            if (this.min === lastVal) {
                this.prevMin.pop();
                this.min = this.prevMin.length > 0 ? this.prevMin[this.prevMin.length - 1] : null;
            }
        }
        this.stack = this.stack.splice(0, this.stack.length - 1);
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
