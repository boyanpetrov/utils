const calculateOffset = require('../calculateOffset')

describe('utils.calculateOffset', () => {
  it('When root node, then return its top offset', () => {
    const node = { offsetTop: 100, offsetParent: null };

    const offset = calculateOffset(node);

    expect(offset).toBe(100);
  });

  it('When child node, then add its parent top offset', () => {
    const node = { offsetTop: 100, offsetParent: { offsetTop: 25 } };

    const offset = calculateOffset(node);

    expect(offset).toBe(125);
  });

  it('When child node, then add its parents top offset', () => {
    const node = { offsetTop: 100, offsetParent: { offsetTop: 25, offsetParent: { offsetTop: 10 } } };

    const offset = calculateOffset(node);

    expect(offset).toBe(135);
  });
});
