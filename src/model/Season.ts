import { SeasonDto } from '../dto/SeasonDto';
import { Team } from './Team';

export class Season {
    id: number;
    startDate: string | null;
    endDate: string | null;
    currentMatchday: number | null;
    winner: null | Team = null;

    constructor(dto: SeasonDto) {
        this.id = dto.id;
        this.startDate = dto.startDate;
        this.endDate = dto.endDate;
        this.currentMatchday = dto.currentMatchday;
        if (dto.winner) {
            this.winner = new Team(dto.winner);
        }
    }
}
