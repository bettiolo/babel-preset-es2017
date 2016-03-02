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
});
