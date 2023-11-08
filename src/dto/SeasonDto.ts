export interface SeasonDto {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner: null | string;
}
