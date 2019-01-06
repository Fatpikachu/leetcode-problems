/**
 * @param {number} n
 * @return {string}
 */
//https://leetcode.com/problems/count-and-say/
var countAndSay = function(n) {
    let ans = '';
    let strng = '11';
    if(n === 1){
        return '1';
    }
    while(n > 2){
        let uniq = 0;
        for(var i = 1; i < strng.length; i++){
           if(strng[i] !== strng[i - 1]){
               ans += (i - uniq) + strng[i - 1];
               uniq = i;
           } 
           if(i === strng.length - 1){
               if(uniq === i){
                   ans += 1 + strng[i];
               } else {
                 ans += (i - uniq + 1) + strng[i];
               }
           }
        }
        strng = ans;
        ans = '';
        n--;
    }
    return strng;
};
