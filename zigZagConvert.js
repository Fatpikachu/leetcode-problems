/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
//https://leetcode.com/problems/zigzag-conversion/
var convert = function(s, numRows) {
    if(numRows === 1){
        return s;
    }
    var container = [];
    for(var j = 0; j < numRows; j++){
        container.push([]);
    }
    var contIdx = -1;
    var forward = true;

    for(var i = 0; i < s.length; i++){
        if(forward){
            contIdx++;
            container[contIdx].push(s[i]);
            if(contIdx === numRows - 1){
                forward = false;
            }
        } else {
            contIdx--;
            container[contIdx].push(s[i]);
            if(contIdx === 0){
                forward = true;
            }
        }
    }
    console.log([].concat.apply([], container))
    //return container.join('').split(',').join('');
    return [].concat.apply([], container).join('')
};
