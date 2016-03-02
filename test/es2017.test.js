import {assert} from 'chai';

async function asyncTimeout(delay = 10) {
  return new Promise((resolve) => {
    setTimeout(() => resolve('OK'), delay);
  });
}

describe('ES2017', () => {
  it('async functions', async () => {
    assert.equal(await asyncTimeout(), 'OK');
  });
});
