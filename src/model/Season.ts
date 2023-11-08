import { SeasonDto } from '../dto/SeasonDto';

export class Season {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner: null | string;

    constructor(dto: SeasonDto) {
        this.id = dto.id;
        this.startDate = dto.startDate;
        this.endDate = dto.endDate;
        this.currentMatchday = dto.currentMatchday;
        this.winner = dto.winner;
    }
}
