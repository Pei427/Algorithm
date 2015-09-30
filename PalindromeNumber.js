/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(typeof x !== "number"){
        return false;
      } 
    if (x<0){
        return false;
    }
      
    var compare = x.toString();
    var length = compare.length;

    if( length == 1 ){
        return true;
    } 
    
    for(var i=0;i<length/2;i++) {
        if(compare.charAt(i) !== compare.charAt(length-1-i)) {
            return false;
        }
    }
    return true;
};