'use strict';


const wrapAsync = fn => (...args) => setTimeout(
  () => fn(...args), Math.floor(Math.random() * 1000));


const add = (a, b) => {
  const res = a + b;
  console.log(res);
};



const deleyPrint = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('data');
  }, 2000);
});

console.log(deleyPrint);

console.log(global);
console.log(__dirname);
