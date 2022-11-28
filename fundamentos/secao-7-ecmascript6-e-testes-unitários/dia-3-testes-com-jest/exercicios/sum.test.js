const sum = require('./sum');

describe('Tests sum function', () => {
  it('returns 9 when sum(4, 5)', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('returns 0 when sum(0, 0)', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('throws an error when sum(4, "5")', () => {
    expect(() => {sum(4, "5")}).toThrow();
  });
    
  it('throws "parameters must be numbers" when sum(4, "5")', () => {
    expect(() => {sum(4, "5")}).toThrow('parameters must be numbers');
  });
});
