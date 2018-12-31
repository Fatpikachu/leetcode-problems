/**
 * @param {string} s
 * @return {boolean}
 */
//https://leetcode.com/problems/valid-parentheses/
var isValid = function(s) {
    s = s.split('');
    let key = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
    let open = [];
    let close = '';
    for(var i = 0; i < s.length; i++){
        if(key.hasOwnProperty(s[i])){
            open.push(s[i]);
        } else {
            if(open.length === 0){
            return false;
            }
            if(key[open.pop()] !== s[i]){
                return false;
            }
        }
    }
    if(open.length > 0){
            return false;
    }
    return true;
}
