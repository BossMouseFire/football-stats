import { getDateToString, isDateValid } from './date';

export const dateCompetition = (startDate: string, endDate: string) => {
    if (!startDate || !endDate) {
        return undefined;
    }

    if (!isDateValid(startDate) || !isDateValid(endDate)) {
        return undefined;
    }

    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);

    return `${getDateToString(startDateObj)}-${getDateToString(endDateObj)}`;
};
