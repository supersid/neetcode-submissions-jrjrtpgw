class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for(let i of strs){
            const ordered = i.split('').sort().join('');
            if(!map.has(ordered)){
                map.set(ordered, [i])
            } else {
                map.get(ordered).push(i);
            }
        }

        return Array.from(map.values());
    }
}
