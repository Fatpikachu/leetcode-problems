/**
 * @param {string} s
 * @return {number}
 */
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let start = 0;
    if(s.length === 1){
        return 1;
    }
    if(s === " "){
        return 1;
    }
    for(var i = 1; i < s.length; i++){
        if(i === s.length - 1){
            if(s.substring(start, i).includes(s[i])){
               if((i - start) > longest){
                longest = i- start;
                } 
            } else {
                    if((i - start + 1) > longest){
                    longest = i- start + 1;
                    }
            }
        } else if(s.substring(start, i).includes(s[i])){ 
            if((i - start) > longest){
                longest = i- start;
            }
            start = (start + s.substring(start, i).indexOf(s[i]) + 1) || 1;
        }
      
    }
    return longest;
};
