export interface CompetitionStandingProps {
    id: number;
    season?: string;
}

export interface CompetitionTeamsProps {
    id: number;
    season?: string;
}

export interface CompetitionMatchesProps {
    id: number;
    dateFrom?: string;
    dateTo?: string;
    season?: string;
}

export interface SetSeasonProps {
    season?: string;
}
