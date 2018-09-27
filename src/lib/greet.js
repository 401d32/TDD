'use strict';

const greet = module.exports = {};

greet.hi = (name) => {
  if (name === '' || typeof name !== 'string') {
    return -1;
  }

  // this code is not tested at the moment
  if (name === 'Billie') {
    return `Hello, ${name}!`;    
  }
  return 'Best Doge';
};

greet.bye = (name) => {
  if (name === '' || typeof name !== 'string') {
    return -1;
  }

  return `Bye, ${name}!`;
};
