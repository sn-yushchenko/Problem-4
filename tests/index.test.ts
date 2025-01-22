import { recursionApproach, cycleApproach, formulaApproach } from '../index'

describe('test sum approaches', () => {
    const n = 15;
    let result: number;
    beforeAll(() => {
        result = formulaApproach(n);
    })

    test(`should return sum of consecutive numbers to ${n}(formula)`, () => {
        expect(formulaApproach(n)).toEqual(result);
    });

    test(`should return sum of consecutive numbers to ${n}(cycle)`, () => {
        expect(recursionApproach(n)).toEqual(result);
    });

    test(`should return sum of consecutive numbers to ${n}(cycle)`, () => {
        expect(cycleApproach(n)).toEqual(result);
    });
});