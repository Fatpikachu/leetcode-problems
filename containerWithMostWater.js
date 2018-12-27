/**
 * @param {number[]} height
 * @return {number}
 */
// https://leetcode.com/problems/container-with-most-water/
var maxArea = function(height) {
    let maxArea = 0;
    // for(var i = 0; i < height.length - 1; i++){
    //     for(var j = i + 1; j < height.length; j++){
    //         var min = Math.min(height[i], height[j])
    //         if((min * (j - i)) > maxArea){
    //             maxArea = min * (j - i);
    //         }
    //     }
    // }
    // return maxArea;
    // for(var i = 0; i < height.length - 1; i++){
    //     var high = 0
    //     for(var j = height.length - 1; j > i; j--){
    //         if(height[j] >= height[i]){
    //             height[i] *(j - i) > maxArea ? maxArea = height[i] *(j - i) : null;
    //             j = i;
    //         } else if(height[j] > high){
    //             height[j] *(j - i) > maxArea ? maxArea = height[j] *(j - i) : null;
    //             high = height[j];
    //         }
    //     }
    // }
    let max = 0;
    let i = 0;
    let j = height.length - 1;
    
    while (j > i) {
        const a = height[i];
        const b = height[j];
        
        const area = Math.min(a, b) * (j - i);
        
        if (area > max)
            max = area;
        
        if (b > a)
            i++;
        else
            j--;
    }
    
    return max;  
};
