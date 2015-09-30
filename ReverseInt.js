var reverse = function(x) {
    var reversedInt = 0;
    
    if (x < 0) {
        return -reverse(-x);
    }
    
    while(x>0) {
        var a = x % 10;
        x = Math.floor(x / 10);
        reversedInt = reversedInt*10+a;
    }
    
    if(reversedInt >= 2147483648){
        return 0;
    } else{
        return reversedInt;
        
    }
};