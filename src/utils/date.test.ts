import { getDateToString } from './date';

describe('getDateToString', () => {
    test('Корректное значение', () => {
        expect(getDateToString(new Date('2023-04.15'))).toBe('15.04.2023');
    });
    test('Пустое значение', () => {
        expect(getDateToString(undefined)).toBe('');
    });
});
