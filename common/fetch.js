'use strict';

const http = require('http');
const https = require('https');

const url1 = 'http://glacial-reef-89371.herokuapp.com/';


const fetch = url => new Promise((resolve, reject) => {
  const protocol = url.startsWith('https') ? https : http;
  protocol.get(url, res => {
    if (res.status !== 200) {
      const { statusCode, statusMessage } = res;
      reject(new Error(`Status: ${statusCode} ${statusMessage}`));
    }
    res.setEncoding('utf8');
    const buffer = [];
    res.on('data', chunk => buffer.push(chunk));
    res.on('end'), () => resolve(buffer.join());
  });
});

fetch(url1)
  .then(res => console.log(res))
  .catch(err => console.log(err));
