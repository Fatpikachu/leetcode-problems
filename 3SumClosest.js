/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//https://leetcode.com/problems/3sum-closest/
var threeSumClosest = function(nums, target) {
    let currSum;
    let currDiff = Infinity;
    nums = nums.sort(function(a, b){
        return a - b;
    })
    for(var i = 0; i< nums.length - 2; i++){
        var j = i + 1;
        var k = nums.length - 1;
        while(j < k){
            var tmpSum = nums[i] + nums[j] + nums[k]
            var tmpDiff = Math.abs(target - tmpSum)
            if(tmpDiff < currDiff){
                currSum = tmpSum;
                currDiff = tmpDiff;
                if(currDiff === 0){
                    return currSum;
                }
            }
            if(tmpSum < target){
                j++
            } else {
                k--
            }
            
        }
    }
    return currSum
};
