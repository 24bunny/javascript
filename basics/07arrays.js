const myarray =[1,2,4,3];
const myarray2=['hero','villian'];
const myarray3=new Array(1,2,3,4);

myarray.push(5);
console.log(myarray);
myarray.pop();
console.log(myarray);
myarray.unshift(9);
console.log(myarray);
myarray.shift();
console.log(myarray);
const newArr = myarray.join("_");
console.log(newArr);
console.log("A ", myarray);
const myn1 = myarray.slice(1, 3);
console.log(myn1);
const myn2 = myarray.splice(1, 3);
console.log(myn2);

const m1=[1,2,3,true,'hi'];
console.log(typeof m1);
console.log(typeof myarray);