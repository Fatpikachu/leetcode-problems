/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
//https://leetcode.com/problems/4sum/
var fourSum = function(nums, target) {
    let result = [];
    nums.sort(function(a, b){
        return a - b;
    })
    for(var i = 0; i < nums.length - 3; i++){
        if(i > 0){
            if(nums[i - 1] === nums[i]){
               continue;
               }
        }
        for(var j = i + 1; j < nums.length - 2; j++){
            if(j > i + 1){
                if(nums[j] === nums[j - 1]){
                    continue;
                }
            }
            for(var k = j + 1; k < nums.length - 1; k++){
                if(k > j + 1){
                    if(nums[k] === nums[k - 1]){
                        continue;
                    }
                }
                var threeSum = nums[i] + nums[j] + nums[k];
                var diff = target - threeSum;
                if(diff <= nums[nums.length - 1] && diff >= nums[k + 1]){
                    for(var l = k + 1; l < nums.length; l++){
                        if(l > k + 1){
                            if(nums[l] === nums[l - 1]){
                                continue;
                            }
                        }
                        if(nums[l] === diff){
                            result.push([nums[i], nums[j], nums[k], nums[l]]);
                            continue;
                        }
                    }
                } else {
                    continue;
                }
            }
        }
    }
    return result;
    let combination = (arr, combo) => {
        if(combo.length === 4){
            var sum = combo.reduce(function(acc, num){
                return acc += num;
            }, 0)
        }
        arr.map(function(num, indx){
           return combination() 
        })
    }
    };
