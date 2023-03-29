var rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});
var a = [];
for(i=0; i <= 10; i++) {

rl.on("line", function (line) {
    a[i]= line;

});
console.log(a[i]);
}