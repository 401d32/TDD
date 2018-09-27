'use strict';

const greet = require('../lib/greet');

// random jest test showcasing

describe('Showcasing TDD with Jest', () => {
  test('Different ways to use the expect function', () => {
    const aNumber = 4;
    expect(aNumber).toEqual(4);
    const aNullValue = null;
    expect(aNullValue).toBeNull();
    const fifty = 50;
    expect(fifty).toBeLessThan(100);
    expect(fifty).toBeGreaterThan(25);
  });
  test('Showcasing how to add another test', () => {
    const aTruthyValue = 'hi';
    expect(aTruthyValue).toBeTruthy();
    const aFalsyValue = 0;
    expect(aFalsyValue).toBeFalsy();
  });
});

describe('greet.test.js', () => {
  describe('greet.hi', () => {
    test('Should return Hello, NAME', () => {
      expect(greet.hi('Billie')).toEqual('Hello, Billie!');
    });
    // test('Should return -1 in case of error', () => {
    //   expect(greet.hi('')).toEqual(-1);
    //   expect(greet.hi()).toEqual(-1);
    // });
    test('Should return Best Doge', () => {
      expect(greet.hi('Billie')).toEqual('Best Doge');
    });
    test('Should return null when non-string value', () => {
      expect(greet.hi('')).toBeNull();
    });
    describe('greet.bye', () => {
      test('Should return Bye, NAME', () => {
        expect(greet.bye('Billie')).toEqual('Bye, Billie!');
      });
    });
  });
});
