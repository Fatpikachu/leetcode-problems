/**
 * @param {string[]} strs
 * @return {string}
 */
//https://leetcode.com/problems/longest-common-prefix/
var longestCommonPrefix = function(strs) {
    let result = strs[0];
    let letter = 0;
    let ans = '';
    let check = true;
    if(strs.length < 2){
        return strs[0] || '';
    }
    while(check){
        for(var i = 1; i < strs.length; i++){//iterate each word
            if((result[letter] !== strs[i][letter]) || (i === strs.length - 1 && letter === strs[i].length)){
                check = false;
                break;
                
            }
            
            
            if(i === strs.length - 1){
                   ans += strs[i][letter]; 
            }
            
        }
        letter++;
    }
    return ans;
//     if(!strs || strs.length == 0) {
//         return "";
//     }
    
//     let min = strs[0];
//     let max = strs[0];
//     strs.forEach(str => {
//         if(str < min) {
//             min = str;
//         } else if(str > max) {
//             max = str;
//         }
//     });
    
//     for(var i = 0;
//         i < min.length && i < max.length && min[i] === max[i];
//         i++) { }
    
//     return max.substring(0, i);
};
