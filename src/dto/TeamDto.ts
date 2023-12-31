import { CoachDTO } from './CoachDTO';
import { PlayerDTO } from './PlayerDTO';

export interface TeamDto {
    id: number;
    name: string | null;
    shortName: string | null;
    tla: string | null;
    crest: string | null;
    address: string | null;
    website: string | null;
    founded: number | null;
    clubColors: string | null;
    venue: string | null;
    coach?: CoachDTO;
    squad?: PlayerDTO[];
}
