import operate from '../logic/operate';

describe('calculate operations betwen 2 numbers', () => {
  test('10 plus 10', () => {
    const result = operate(10, 10, '+');
    expect(result).toBe('20');
  });
  test('10 minus 10', () => {
    const result = operate(10, 10, '-');
    expect(result).toBe('0');
  });
  test('10 multiplyied 10', () => {
    const result = operate(10, 10, 'x');
    expect(result).toBe('100');
  });
  test('10 divided 10', () => {
    const result = operate(10, 10, '÷');
    expect(result).toBe('1');
  });
});
