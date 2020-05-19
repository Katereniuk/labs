'use strict';

const http = require('http');

const url = 'http://glacial-reef-89371.herokuapp.com/';

http.get(url, res => {
  console.log(res.req.header);
  console.log(res.headers);
  res.setEncoding('utf8');
  const data = [];
  res.on('data', chunk => {
    data.push(chunk);
  });
  res.on('end', () => {
    console.log(data);
  });
});
