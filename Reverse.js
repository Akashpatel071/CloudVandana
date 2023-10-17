var r = "This is sunny day";
var st1 = r.split(" ");
var res = "";
for (var i = 0; i < st1.length; i++) {
    var n = st1[i];
    for (var j = n.length - 1; j >= 0; j--) {
        res = res + n[j] + "";
    }
    res = res + " ";
}
console.log(res);
