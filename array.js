var ar = [5, 7, 8, 3, 2, 1];
var arr = [ar.length];
ar.sort();
for (var i =ar.length-1; i>0; i--) {
    arr.push(ar[i]);
}
console.log(arr);
