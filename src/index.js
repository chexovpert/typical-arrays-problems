
exports.min = function min (array) {
    if (typeof array=="undefined") {
        a=0;
        return a;
    }
    var a=0;
    array.forEach(element => {
        if (element<a) {
            a=element
        }
       /* else 
        a=0;*/
    }
    
    );
  return a;
}

exports.max = function max (array) {
    if (typeof array=="undefined") {
        a=0;
        return a;
    }
    var a=0;
    array.forEach(element => {
        if (element>a) {
            a=element
        }
    }
    )
    
return a;
}

exports.avg = function avg (array) {
    if (typeof array=="undefined") {
        a=0;
        return a;
    }
    
    if (array.length!=0) {
        var count=array.length;
    var avrg=array.reduce(function(sum,current) {
       
       return sum+current;
    },0)
    return a=avrg/count;
}
  return a;
}
