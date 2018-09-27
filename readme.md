# Notes
***
##Truthiness
In tests you sometimes need to distinguish between undefined, null, and false, but you sometimes do not want to treat these differently. Jest contains helpers that let you be explicit about what you want.

toBeNull matches only null
toBeUndefined matches only undefined
toBeDefined is the opposite of toBeUndefined
toBeTruthy matches anything that an if statement treats as true
toBeFalsy matches anything that an if statement treats as false

***

## Numbers
Most ways of comparing numbers have matcher equivalents.

test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});
For floating point equality, use toBeCloseTo instead of toEqual, because you don't want a test to depend on a tiny rounding error.

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});

***

## Strings
You can check strings against regular expressions with toMatch:

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

***

##Arrays
You can check if an array contains a particular item using toContain:

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
];

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
});

***

## FULL REFERENCE DOCS

[https://jestjs.io/docs/en/expect](https://jestjs.io/docs/en/expect)

##Callbacks
There is an alternate form of test that fixes this. Instead of putting the test in a function with an empty argument, use a single argument called done. Jest will wait until the done callback is called before finishing the test.

test('the data is peanut butter', done => {
  function callback(data) {
    expect(data).toBe('peanut butter');
    done();
  }

  fetchData(callback);
});
If done() is never called, the test will fail, which is what you want to happen.

***

##Promises
If your code uses promises, there is a simpler way to handle asynchronous tests. Just return a promise from your test, and Jest will wait for that promise to resolve. If the promise is rejected, the test will automatically fail.

For example, let's say that fetchData, instead of using a callback, returns a promise that is supposed to resolve to the string 'peanut butter'. We could test it with:

test('the data is peanut butter', () => {
  expect.assertions(1);
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});
Be sure to return the promise - if you omit this return statement, your test will complete before fetchData completes.

If you expect a promise to be rejected use the .catch method. Make sure to add expect.assertions to verify that a certain number of assertions are called. Otherwise a fulfilled promise would not fail the test.

test('the fetch fails with an error', () => {
  expect.assertions(1);
  return fetchData().catch(e => expect(e).toMatch('error'));
});

***

##.resolves / .rejects
You can also use the .resolves matcher in your expect statement, and Jest will wait for that promise to resolve. If the promise is rejected, the test will automatically fail.

test('the data is peanut butter', () => {
  expect.assertions(1);
  return expect(fetchData()).resolves.toBe('peanut butter');
});
Be sure to return the assertion—if you omit this return statement, your test will complete before fetchData completes.

If you expect a promise to be rejected use the .rejects matcher. It works analogically to the .resolves matcher. If the promise is fulfilled, the test will automatically fail.

test('the fetch fails with an error', () => {
  expect.assertions(1);
  return expect(fetchData()).rejects.toMatch('error');
});