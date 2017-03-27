    var n = parseInt(readLine());
    
    var bin = Number(n).toString(2);    
    var arr = bin.split('0').filter(x => x != '');
    arr = arr.map(x => x.length);
    console.log(Math.max(...arr));