var format = function (str, obj) {
    if(Array.isArray(obj)){
        let numBrackets = /\{\d\}/g;
        let num = /\d/
        return str.replace(numBrackets, function(e){
            return obj[e.match(num)[0]]
        })} else {
            let foo = /{foo}/g;
            let bar = /{bar}/g;
            return str.replace(foo, obj.foo).replace(bar, obj.bar)
        }    
};

