export const getDate = (dateToStr: string) => {
    if (!isDateValid(dateToStr)) {
        return '';
    }

    const date = new Date(dateToStr);
    return getDateToString(date);
};

export const getDateToString = (date?: Date) => {
    if (date) {
        const dateNum = date.getDate();
        const dateMonth = date.getMonth() + 1;

        const dateNumStr = dateNum > 10 ? dateNum : `0${dateNum}`;
        const dateMonthStr = dateMonth > 10 ? dateMonth : `0${dateMonth}`;

        return `${dateNumStr}.${dateMonthStr}.${date.getFullYear()}`;
    }
    return '';
};

export function isDateValid(dateToStr: string) {
    const timestamp = Date.parse(dateToStr);
    return !isNaN(timestamp);
}
