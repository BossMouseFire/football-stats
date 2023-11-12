import { getDate, getDateToString, isDateValid } from '../date';

describe('getDateToString', () => {
    test('Корректное значение', () => {
        expect(getDateToString(new Date('2023-04-15'))).toBe('15.04.2023');
    });
    test('Пустое значение', () => {
        expect(getDateToString(undefined)).toBe('');
    });
});

describe('getDate', () => {
    test('Корректное значение', () => {
        expect(getDate('2023-04-15')).toBe('15.04.2023');
    });
    test('Пустое значение', () => {
        expect(getDate('')).toBe('');
    });
    test('Некорректно значение', () => {
        expect(getDate('авававава')).toBe('');
    });
});

describe('isDateValid', () => {
    test('Корректное значение', () => {
        expect(isDateValid('2023-04-15')).toBe(true);
    });
    test('Пустое значение', () => {
        expect(isDateValid('')).toBe(false);
    });
    test('Некорректно значение', () => {
        expect(isDateValid('авававава')).toBe(false);
    });
});
