'use strict';

const logger = level => {
  const color = logger.colors[level] || logger.colors.info;
  return s => {
    const date = new Date().toISOString();
    console.log(color + date + '\n' + s);
  };
};

logger.colors = {
  warning: '\x1b[1;33m',
  error: '\x1b[0;31m',
  done: '\x1b[0;32m',
  info: '\x1b[0;36m'
};

const warning = logger('warning');
const error = logger('error');
const done = logger('done');
const debug = logger('info');
