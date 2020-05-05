'use strict';


const random = (max, min) => {
  if (min === undefined) {
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;

};

const possible = 'abcdefghijklmnopqrstuvwxyz0123456789';

const generateKey = (length, possible) => {
  const base = possible.length;
  let key = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * base);
    key += possible[index];
  }
  return key;
};


const iface = ob => {
  const fnKey = [];
  for (const key in ob) {
    const fn = ob[key];
    if (typeof fn === 'function') {
      fnKey.push([key, fn.length]);
    }
  }
  console.log(fnKey);
};




const hash = () => {
  const data = [];
  Object.defineProperty(data, 'add',  {
    enumerable: false,
    value(key, value) {
      data.push({ key: value });
      return data;
    }
  });
  return data;
};

console.dir(hash().add('key', generateKey(16, possible))
  .add('key', generateKey(16, possible))
  .add('key', generateKey(16, possible))
  .add('key', generateKey(16, possible)));



const partial = (fn, ...args) => (...rest) => fn(...args.concat(rest));

const sum = (a, b, c, d) => (a + b + c + d);

const res = partial(sum, 1, 5, 5);
const res1 = res(1);


// console.log(res1);



const curry = fn => (...args) => {
  if (fn.length < args.length) {
    const f = fn.bind(null, ...args);
    return curry(f);
  } else
    return fn(...args);
};

const seq = f => g => (typeof g === 'number' ? f(g) : seq(x => f(g(x))));



const array = () => {
  const data = [1, 2, 3, 4, 5];
  const get = i => data[i];
  get.push = x => data.push(x);
  get.pop = () => data.pop();
  return get;
};

const arr = array();

console.log(arr);

arr.push(2);
