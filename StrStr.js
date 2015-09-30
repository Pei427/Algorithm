/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var len1 = haystack.length;      // "panda" len1=5
    var len2 = needle.length;        // "da" len2=2
    
    if (haystack === null || len1 < len2 ){
        return -1;
    }
    
    if(len2 === 0){
        return 0;
    }
    
    for (i = 0; i <= len1 - len2; i++){                     //i <=5-2 = 3    0 1 2 3 4
        if (haystack.substring(i,i+len2) === needle){      // panda.str(3,3+2= 5) ===     "da"
            return i;
        } 
    }
    
    return -1;
    
};