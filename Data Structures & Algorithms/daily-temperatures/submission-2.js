class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0);
        let stack = [];
        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length > 0 && temperatures[i] > temperatures[stack.at(-1)]) {
                const topIdx = stack.pop();
                result[topIdx] = i - topIdx;
            }
            stack.push(i);
        }
        return result;
    }
}
