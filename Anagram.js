function processData(input) {
    //Enter your code here
    var arr = input.split('\n');
    var ret = [];
    var word = '';
        
    for (i = 1; i <= arr[0]; i++) {
       var numChanges = 0;
       word = arr[i];
       var stringArr = [];

       if (word.length%2 == 0) {
        stringArr = word.split('');

        for (pos = 0; pos < stringArr.length/2; pos++) {

           console.log('Buscando: ' + stringArr[pos]);
           console.log(stringArr.join('-'));
           if (stringArr.lastIndexOf(stringArr[pos]) >= stringArr.length/2) { //Se concontrou Anagrama                                    
                stringArr.splice(stringArr.lastIndexOf(stringArr[pos]), 1);
                stringArr.splice(pos, 1);                                     
                pos--;
           } else {  
                numChanges++;  
           }        
        }     
       } else {
           numChanges = -1;
       }      
            
       ret.push(numChanges); 
                
    }
    console.log(ret.join('\n'));
} ;

var teste = ['1',
            'aadffdaa'
            ];

processData(teste.join('\n'));

//var fatiar = 'xyyx';
//var strArr = fatiar.split('');
//strArr = strArr.splice(0, 1);
//console.log(strArr.join('-'));


