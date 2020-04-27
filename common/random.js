'use strict';


const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const id = () => `f${(~~(Math.random() * 1e8)).toString(16)}`; // ~~ Math.floor
// const idDate = () => `f${(+new Date()).toString(16)}`;


const randomId = length => [...new Array(length)].map(() => id());


// module.exports = { random, randomId };
