class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */

    // area = width * min(height of left , height of right)
    maxArea(heights) {
        let area = 0;
        let left = 0;
        let right = heights.length - 1;

        while (left < right) {
            area = Math.max(area, (right - left) * Math.min(heights[left], heights[right]));
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return area;
    }
}
