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
  test('Use 0 when next is 0', () => {
    const myObj = {
      total: '120',
      next: '0',
      operation: '+',
    };
    const btnName = '0';
    const restul = calculate(myObj, btnName);
    expect(restul).toEqual({});
  });
  test('if there is operation and user uses 0 and next is no 0', () => {
    const myObj = {
      total: '120',
      next: '100',
      operation: '+',
    };
    const btnName = '0';
    const restul = calculate(myObj, btnName);
    expect(restul).toEqual({ ...myObj, next: myObj.next + btnName });
  });
  test('Use 0 and there is not operation or next is also 0', () => {
    const myObj = {
      total: '120',
      next: null,
      operation: '+',
    };
    const btnName = '0';
    const restul = calculate(myObj, btnName);
    expect(restul).toEqual({ ...myObj, next: btnName });
  });
  test('Use 0 when there is no operation', () => {
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
  test('next  equals btnName', () => {
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
  test('Use . and next has .', () => {
    const myObj = {
      total: null,
      next: '100.',
      operation: null,
    };
    const btnName = '.';
    const restul = calculate(myObj, btnName);
    expect(restul).toEqual({
      ...myObj,
    });
  });
  test('Use . and next does not have .', () => {
    const myObj = {
      total: null,
      next: '100',
      operation: null,
    };
    const btnName = '.';
    const restul = calculate(myObj, btnName);
    expect(restul).toEqual({
      ...myObj, next: `${myObj.next}.`,
    });
  });
  test('Use . and there is operation', () => {
    const myObj = {
      total: null,
      next: '0.',
      operation: '+',
    };
    const btnName = '.';
    const restul = calculate(myObj, btnName);
    expect(restul).toEqual({
      ...myObj, next: '0.',
    });
  });
  test('Use . and there is total', () => {
    const myObj = {
      total: '120',
      next: '0.',
      operation: '+',
    };
    const btnName = '.';
    const restul = calculate(myObj, btnName);
    expect(restul).toEqual({
      ...myObj, next: '0.',
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
  test('Use +/-', () => {
    const myObj = {
      total: '120',
      next: '120',
      operation: '+',
    };
    const btnName = '+/-';
    const restul = calculate(myObj, btnName);
    expect(restul).toEqual({
      ...myObj, next: (-1 * parseFloat(myObj.next)).toString(),
    });
  });
});
