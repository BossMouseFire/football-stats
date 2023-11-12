export const getListYears = (countYears: number) => {
    const listYears: number[] = [];
    const currentYear = new Date().getFullYear();

    for (let i = 0; i < countYears; i++) {
        listYears.push(currentYear - i);
    }

    return listYears;
};
