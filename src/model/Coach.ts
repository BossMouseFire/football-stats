import { CoachDTO } from '../dto/CoachDTO';

export class Coach {
    id: number;
    firstName: string;
    lastName: string;
    name: string;
    dateOfBirth: string;
    nationality: string;

    constructor(dto: CoachDTO) {
        this.id = dto.id;
        this.firstName = dto.firstName;
        this.lastName = dto.lastName;
        this.name = dto.name;
        this.dateOfBirth = dto.dateOfBirth;
        this.nationality = dto.nationality;
    }
}
