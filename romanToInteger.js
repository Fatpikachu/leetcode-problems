/**
 * @param {string} s
 * @return {number}
 */
//https://leetcode.com/problems/roman-to-integer/
var romanToInt = function(s) {
//     let I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000;
        let ht = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
//     s = s.split('');  

    let ans = 0;
    for(var i = 0; i < s.length; i++){
        if((s[i] === 'I' && (s[i + 1] === 'X' || s[i + 1] === 'V'))
           || (s[i] === 'X' && (s[i + 1] === 'L' || s[i + 1] === 'C'))
            || (s[i] === 'C' && (s[i + 1] === 'D' || s[i + 1] === 'M'))){
               ans += ht[s[i + 1]] - ht[s[i]];
               i++;
         } else {
             ans += ht[s[i]];
         }   
    }
        return ans;
//     if (s.length === 0) return result;

//     let ht = {
//       'I': 1,
//       'V': 5,
//       'X': 10,
//       'L': 50,
//       'C': 100,
//       'D': 500,
//       'M': 1000
//     };
  
//     let n = s.length, result = ht[s[n-1]]; //init to last elem value
  
//     for (let i = n - 2; i >= 0; i--) { //start from 2nd last
//       let curChar = s[i];
//       if (ht[s[i+1]] > ht[curChar]) { //right char value > cur char value, special case
//           result -= ht[curChar];
//       } else {
//           result += ht[curChar];
//       }
//     }
  
//     return result;
}
