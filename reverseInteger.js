ram {number} x
 * @return {number}
 */
//https://leetcode.com/problems/reverse-integer/
var reverse = function(x) {
    x=x.toString();
    var ind=0;
    var sign=1;
    if(x[0]==="-"){
        ind=1;
        sign=-1;
    }
    var op="";
    var len=x.length-1;
    while(len!==ind-1){
        op+=x[len];
        len--;
    }
    op=parseInt(op)*sign;
    if(op<-2147483647 || op >2147483647){
        return 0;
    }
    else{
        return op;
    }
};
