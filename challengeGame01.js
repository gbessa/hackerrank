var A = [];

A[0] = 4;
A[1] = 5;
A[2] = 3;
A[3] = 7;
A[4] = 2;
console.log(A);

function jogada(A) {   
    for (var i = 0; i < A.length; i++) {
        if (A[0]%2==0) {            
            A.splice(0, 1);
            break;
        } else {
            if ((A[0] + A[1]) %2==0) {            
                A.splice(0, 2);
                break;
            }    
        }
    }
}

jogada(A);
console.log(A);

jogada(A);
console.log(A);

jogada(A);
console.log(A);