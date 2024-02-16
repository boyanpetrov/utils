import { calculateOffset } from '../calculateOffset';

type MockHTMLElement = HTMLElement & {
  offsetTop: number;
  offsetParent: MockHTMLElement | null;
};

describe('utils.calculateOffset', () => {
  it('When root node, then return its top offset', () => {
    const node: MockHTMLElement | null = {
      offsetTop: 100,
      offsetParent: null,
    } as MockHTMLElement;

    const offset = calculateOffset(node);

    expect(offset).toBe(100);
  });

  it('When child node, then add its parent top offset', () => {
    const node: MockHTMLElement | null = {
      offsetTop: 100,
      offsetParent: { offsetTop: 25 },
    } as MockHTMLElement;

    const offset = calculateOffset(node);

    expect(offset).toBe(125);
  });

  it('When child node, then add its parents top offset', () => {
    const node: MockHTMLElement | null = {
      offsetTop: 100,
      offsetParent: { offsetTop: 25, offsetParent: { offsetTop: 10 } },
    } as MockHTMLElement;

    const offset = calculateOffset(node);

    expect(offset).toBe(135);
  });
});
