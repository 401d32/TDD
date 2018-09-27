// Arithmetic Module Tests
// Test each method for proper use (invoked with number arguments)
// Test each method for inproper use (invoked with one or more non-number arguments)

'use stict';

const arithmetic = require('../lib/arithmetic');

describe('Arithmetic', () => {
  describe('arithmetic.add', () => {
    test('Should return null if typeof is not a number', () => {
      expect(arithmetic.add('')).toBeNull();
    });
    test('Should do the addition', () => {
      expect(arithmetic.add(1, 2)).toEqual(3);
    });
  });
  describe('arithmetic.sub', () => {
    test('Should return null if typeof is not a number', () => {
      expect(arithmetic.sub('')).toBeNull();
    });
    test('Should return subtracted nums', () => {
      expect(arithmetic.sub(2, 1)).toEqual(1);
    });
  });
});

