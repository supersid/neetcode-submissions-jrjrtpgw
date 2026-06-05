class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let result = [];

        for (let i = 0; i < numbers.length; i++) {
            result.push(i + 1);
            let complement = target - numbers[i];
            if (numbers.includes(complement)) {
                result.push(numbers.indexOf(complement) + 1);
                break;
            } else {
                result = [];
            }
        }
        return result;
    }
}
