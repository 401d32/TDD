'use strict';

// const greet = require('../lib/greet');

describe('Showcasing TDD with Jest', () => {
  test('Different ways to use the expect function', () => {
    const aNumber = 4;
    expect(aNumber).toEqual(4);
  });
});

// describe('greet.test.js', () => {
//   describe('greet.hi', () => {
//     test('Should return Hello NAME', () => {
//       expect(greet.hi('Billie')).toEqual('Hello, Billie!');
//     });
//     test('Should return -1 in case of error', () => {
//       expect(greet.hi('')).toequal(-1);
//       expect(greet.hi()).toEqual(-1);
//     });
//     test('Should return Best Doge', () => {
//       expect(greet.hi('Billie')).toEqual('Best Doge');
//     });
//   });
// });
