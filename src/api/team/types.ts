import { MatchDto } from '../../dto/MatchDto';

export interface TeamMatchesResponse {
    matches: MatchDto[];
}

export interface TeamMatchesParams {
    venue: 'HOME' | 'AWAY';
    dateFrom?: string;
    dateTo?: string;
}
