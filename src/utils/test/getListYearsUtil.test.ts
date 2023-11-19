import { getListYears } from '../getListYears';

describe('getListYears', () => {
    test('Корректное значение', () => {
        expect(getListYears(4)).toEqual([2023, 2022, 2021, 2020]);
    });
    test('Некорректное значение', () => {
        expect(getListYears(4)).not.toEqual([2023, 2022, 2021]);
    });
    test('Некорректное значение', () => {
        expect(getListYears(4)).not.toEqual([2023, '2022', 2021, 2020]);
    });
    test('Некорректное значение', () => {
        expect(getListYears(4)).not.toEqual([2023, undefined, 2021, 2020]);
    });
    test('Некорректное значение', () => {
        expect(getListYears(4)).not.toEqual([]);
    });
});
