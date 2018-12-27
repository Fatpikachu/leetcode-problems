//https://leetcode.com/problems/two-sum/
var twoSum = function(nums, target) {
    var exists = {};
    for(var i = 0; i < nums.length; i++){
        if(exists[target - nums[i]] !== undefined){
           return [i, exists[target - nums[i]]]
        } else {
         exists[nums[i]] = i
        }
    }
};
