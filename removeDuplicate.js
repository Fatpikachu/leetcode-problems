/**
 * @param {number[]} nums
 * @return {number}
 */
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
var removeDuplicates = function(nums) {
    let uniqIndx = 0;
    for(let i = 1; i < nums.length; i++){
        if(nums[uniqIndx] !== nums[i]){
            nums[uniqIndx + 1] = nums[i];
            uniqIndx++;
        }
    }
    return uniqIndx + 1;
};
