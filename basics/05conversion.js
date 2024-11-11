const { stringify } = require("querystring");

let a=23;
a=String(a);

console.log(a);
console.log(typeof a);

let b=undefined;
b=Boolean(b);
console.log(typeof b);
console.log(b);
c=" ";
c=Boolean(c);
console.log(c);
console.log(typeof c);