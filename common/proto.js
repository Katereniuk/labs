'use strict';

const antarctica = [
  ['Belgrano II', 'Argentina', '12'],
  ['Mawson', 'Australia', '22'],
  ['Commandante Ferraz', 'República Federativa do Brasil', '12'],
  ['Capitan Arturo Prat', 'República de Chile', '8'],
  ['Scott Base)', 'New Zealand', '8']
];


class Station {
  get name() {
    return this[0];
  }
  get country() {
    return this[1];
  }
  get scientists() {
    return this[2];
  }
  toString() {
    return `Station ${this.name} - country ${this.country}  \n`;
  }
}


const query = station => (
  station.scientists > 10
);


antarctica.forEach(station => {
  Object.setPrototypeOf(station, Station.prototype);
});

const print = antarctica.filter(query);

console.log(print + '');
