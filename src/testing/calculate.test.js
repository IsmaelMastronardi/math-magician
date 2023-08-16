import calculate from '../logic/calculate';

describe('Calculates', () => {
  test('Use Ac to clear calculator', () => {
    const myObj = {
      total: '120',
      next: null,
      operation: '+',
    };
    const btnName = 'AC';
    const restul = calculate(myObj, btnName);
    expect(restul).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
  test('Use = to show result', () => {
    const myObj = {
      total: '120',
      next: '120',
      operation: '+',
    };
    const btnName = '=';
    const restul = calculate(myObj, btnName);
    expect(restul).toEqual({
      total: '240',
      next: null,
      operation: null,
    });
  });
  test('Use = to show result', () => {
    const myObj = {
      total: '120',
      next: '0',
      operation: '+',
    };
    const btnName = '0';
    const restul = calculate(myObj, btnName);
    expect(restul).toEqual({});
  });
  test('Use = to show result', () => {
    const myObj = {
      total: '120',
      next: '100',
      operation: '+',
    };
    const btnName = '0';
    const restul = calculate(myObj, btnName);
    expect(restul).toEqual({ ...myObj, next: myObj.next + btnName });
  });
  test('Use = to show result', () => {
    const myObj = {
      total: '120',
      next: null,
      operation: '+',
    };
    const btnName = '0';
    const restul = calculate(myObj, btnName);
    expect(restul).toEqual({ ...myObj, next: btnName });
  });
  test('Use = to show result', () => {
    const myObj = {
      total: '120',
      next: '100',
      operation: null,
    };
    const btnName = '0';
    const restul = calculate(myObj, btnName);
    expect(restul).toEqual({
      next: myObj.next + btnName,
      total: null,
    });
  });
  test('Use = to show result', () => {
    const myObj = {
      total: '120',
      next: null,
      operation: null,
    };
    const btnName = '100';
    const restul = calculate(myObj, btnName);
    expect(restul).toEqual({
      next: btnName,
      total: null,
    });
  });
  test('Use = to show result', () => {
    const myObj = {
      total: '120',
      next: '100.',
      operation: null,
    };
    const btnName = '.';
    const restul = calculate(myObj, btnName);
    expect(restul).toEqual({
      ...myObj,
    });
  });
  test('Use = to show result', () => {
    const myObj = {
      total: '120',
      next: '100',
      operation: null,
    };
    const btnName = '.';
    const restul = calculate(myObj, btnName);
    expect(restul).toEqual({
      ...myObj, next: `${myObj.next}.`,
    });
  });
});
