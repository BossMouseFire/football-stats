import { dateCompetition } from '../dateCompetition';

describe('dateCompetition', () => {
    test('Корректное значение', () => {
        expect(dateCompetition('2023-04-15', '2023-05-20')).toBe(
            '15.04.2023-20.05.2023',
        );
    });
    test('Отсутствует первый аргумент', () => {
        expect(dateCompetition('', '2023-05-20')).toBe(undefined);
    });
    test('Отсутствует второй аргумент', () => {
        expect(dateCompetition('2023-04-15', '')).toBe(undefined);
    });
    test('Отсутствуют оба аргумента', () => {
        expect(dateCompetition('', '')).toBe(undefined);
    });
    test('Неверный первый аргумент', () => {
        expect(dateCompetition('ававававава', '2023-05-20')).toBe(undefined);
    });
    test('Неверный второй аргумент', () => {
        expect(dateCompetition('2023-04-15', 'апаапапапап')).toBe(undefined);
    });
    test('Неверные оба аргумента', () => {
        expect(dateCompetition('авава', 'вававав')).toBe(undefined);
    });
});
