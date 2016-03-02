import {assert} from 'chai';

describe('ES2016/ES7', () => {
  it('Array.prototype.includes', () => {
    assert.ok(['a', 'b', 'c'].includes('a'));
  });

  it('Exponentiation operator (**)', () => {
    assert.equal(3 ** 2, Math.pow(3, 2));
  });
});
