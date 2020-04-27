'use strict';


const diff = (ob1, ob2) => {
  const diff = [];
  for (let item of ob1) {
    if (ob2.includes(item)) {
      diff.push(item);
    }
  }
  return diff;
};


const data1 = [ 1, 3, 5, 64, 65 ];
const data2 = [ 1, 3, 5, 62, 60 ];



console.log(diff(data1, data2));
