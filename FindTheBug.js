//Find the Bug

let grid = ['OOOOO', 'OXOOO', 'OOOOO', 'OOOOO', 'OOOOO'];

let result = findTheBug(grid);
console.log(result.join(','));

function findTheBug(grid) {
    let notBug = 'O'.repeat(grid.length);
    grid.forEach(function(line, i){    
        if (line !== notBug) {        
            line.split('').forEach(function(_char, j){
                if (_char === 'X') {                
                    inResult = [i,j];                    
                }
            })
        }
    })
    return inResult;
}