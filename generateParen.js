/**
 * @param {number} n
 * @return {string[]}
 */
//https://leetcode.com/problems/generate-parentheses/
var generateParenthesis = function(n) {
    let result = [];
    let permutate = function(open, close, prefix){
        if(open === 0 && close === 0){
            result.push(prefix);
            return;
        }
        if(close >= open && open > 0){
            permutate(open - 1, close, prefix + '(')
        }
        if(close > open){
            permutate(open, close - 1, prefix + ')')
        }
    }
    permutate(n, n, '')
    return result;
};
