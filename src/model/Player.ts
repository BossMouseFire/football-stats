import { PlayerDTO } from '../dto/PlayerDTO';

export class Player {
    id: number;
    name: string;
    position: string;
    dateOfBirth: string;
    nationality: string;

    constructor(dto: PlayerDTO) {
        this.id = dto.id;
        this.name = dto.name;
        this.position = dto.position;
        this.dateOfBirth = dto.dateOfBirth;
        this.nationality = dto.nationality;
    }
}
