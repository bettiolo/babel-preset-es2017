import {assert} from 'chai';

async function asyncTimeout(delay = 10) {
  return new Promise((resolve) => {
    setTimeout(() => resolve('OK'), delay);
  });
}

describe('ES2017', () => {
  // mocha automatically awaits the async code and does the try catch around it. WIN!11!!1
  it('async functions', async () => {
    assert.equal(await asyncTimeout(), 'OK');
  });

  it('Object.entries()', () => {
    assert.deepEqual(Object.entries({q: 1, w: 2, e: 3}), [['q', 1], ['w', 2], ['e', 3]]);
  });

  it('Object.values()', () => {
    assert.deepEqual(Object.values({q: 1, w: 2, e: 3}), [1, 2, 3]);
  });


  it('String.padStart()', () => {
    assert.equal('abc'.padStart(6, '-'), '---abc');
  });

  it('String.padEnd()', () => {
    assert.equal('xyz'.padEnd(6, '-'), 'xyz---');
  });
});
