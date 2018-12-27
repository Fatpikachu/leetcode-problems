/**
 * @param {number} x
 * @return {boolean}
 */
//https://leetcode.com/problems/palindrome-number/
var isPalindrome = function(x) {
    var str = x.toString();
    if(str.length == 1){
        return true;
    }    
    var i = str.length - 1;
    var k = 0;
    while(i > k) {
        if(str[i] != str[k]){
            return false;
        }
        i--;
        k++
    }
    return true;
}; 
