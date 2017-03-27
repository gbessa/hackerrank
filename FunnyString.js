function processData(input) {
    //Enter your code here
    var arr = input.split('\n');
    var ret = [];
    var word = '';
    
    for (i = 1; i <= arr[0]; i++) {
       var typeFun = 'Funny';
       word = arr[i];
        
       //acxz
       for (pos = 0; pos < Math.abs(word.length/2); pos++) {
           if (
               Math.abs(word.charCodeAt(pos+1) - word.charCodeAt(pos)) 
            != Math.abs(word.charCodeAt(word.length-2-pos) - word.charCodeAt(word.length-1-pos))
            ) {
             typeFun = 'Not Funny';
             break;
           }           
       } 
            
       ret.push(typeFun); 
                
    }
    console.log(ret.join('\n'));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});