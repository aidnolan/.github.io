var names = ["Jonathan", "Tom", "George"];

function reverse (factor) {
    var o = '';
    for (i = factor.length - 1; i >=0; i--) {
		var p = '';
        for (j = factor[i].length - 1; j >=0; j--) {
        p += factor[i][j];
        }
        o += p + ' '; 
    }
    console.log(o);
}

var p = '';
for (j = factor[i].length - 1; j >=0; j--) {
    p += factor[i][j];
    
}