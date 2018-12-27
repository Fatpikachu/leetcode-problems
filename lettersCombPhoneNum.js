/**
 * @param {string} digits
 * @return {string[]}
 */
//https://leetcode.com/problems/letter-combinations-of-a-phone-number/
var letterCombinations = function(digits) {
    if(digits === ''){
        return []
    }
    var legends = {
        1: '',
        0: '',
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'] 
    }
    let allArrays = []
    for(var i = 0; i < digits.length; i++){
      allArrays .push(legends[digits[i]]);  
    }
    
function getPermutation(array, prefix) {
    prefix = prefix || '';
    if (!array.length) {
        return prefix;
    }

    var result = array[0].reduce(function (
                                 result, value) {
        return result.concat(getPermutation(array.slice(1), prefix + value));
    }, []);
    return result;
}
    return getPermutation(allArrays)
};
