var yourself = {
    fibonacci : function(n) {
        if (n === 0) {
            return 0;
        }
        if (n === 1) {
            return 1;
        }
        else {
            return this.fibonacci(n - 1) +
                this.fibonacci(n - 2);
        }
    }
};

//0 1 1 2 3 5 8 13
//0 1 2 3 4 5 6 7
var myself = {
    fibonacci : function(n) {
        var fibo = 0;
        var v1 = 0;
        var v2 = 1;
        if (n <= 1) {
            fibo = n;
        } else {
            for (var index = 2; index <= n; index++) {                
                fibo = v1 + v2;
                v1 = v2;
                v2 = fibo;
            }            
        }        
        return fibo;
    }
};

var startTime = new Date();

//console.log(yourself.fibonacci(40));
console.log(myself.fibonacci(100));


var endTime = new Date();
// time difference in ms
var timeDiff = endTime - startTime;
// strip the ms
timeDiff /= 1000;
var seconds = Math.round(timeDiff % 60);
console.log(seconds + ' sec')