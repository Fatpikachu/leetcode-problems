/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var legends = {
                 'I': 1,
                 'IV': 4,
                 'V': 5,
                 'IX': 9,
                 'X': 10,
                 'XL': 40,
                 'L': 50,
                 'XC': 90,
                 'C': 100,
                 'CD': 400,
                 'D': 500,
                 'CM': 900,
                 'M': 1000}
    let result = '';
    var keys = Object.keys(legends);
    for(var i = keys.length - 1; i >= 0; i--){
        while(num - legends[keys[i]] >= 0){
            result += keys[i];
            num = num - legends[keys[i]];
        }
    }
    return result;
//     let result = '';
//     var romNum = Object.keys(legends).reverse();
//     for(var i = 0; i < 7; i++){
//         var mult = Math.floor(num/romNum[i]);
//         if(mult >= 1){  
//             if(mult === 4){
//                 result += uniq[4 * romNum[i]];
//             } else if(Math.floor(num/romNum[i + 1]) === 9){
//                result += uniq[9 * romNum[i + 1]];
//                 mult = 9
//                i++;
//             } else {
//                 var times = mult
//                 while(times){
//                     result += legends[romNum[i]];
//                     times--;
//                 }
                
//             }
//             num = num - (mult *romNum[i]);
//         }
//     }
 
//     return result;
    
};

















