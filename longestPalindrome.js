/**
 * @param {string} s
 * @return {string}
 */
// https://leetcode.com/problems/longest-palindromic-substring/
var longestPalindrome = function(s) {

    if(s === null || s.length < 1){
        return '';
    }
    var longest = s[0];
    var duplicate;
    let expand = function(left, right, s){
       while(s[left] !== undefined && s[left] === s[right]){
                left--;
                right++;
        }
       return right - left - 1;
        
    }
    var start = 0;
    var end = 0;
    for(var i = 0; i < s.length - 1; i++){
        var one = 0;
        var second = 0;
        if(s[i] === s[i + 1]){
           one = expand(i , i + 1, s);
        }
        if(s[i - 1] === s[i + 1]){
            second = expand(i - 1, i + 1, s);
        }
        let len = Math.max(one, second);
        if(len > (end - start)){
            start = i - (Math.ceil(len / 2) - 1);
            end = i + Math.floor(len / 2);
        }
    }
    return s.slice(start, end + 1);
};


