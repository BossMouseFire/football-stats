import { MatchDto } from '../dto/MatchDto';

export const matchesMock: MatchDto[] = [
    {
        season: {
            id: 1577,
            startDate: '2023-08-13',
            endDate: '2024-05-26',
            currentMatchday: 13,
            winner: null,
        },
        id: 438482,
        utcDate: '2023-08-11T17:30:00Z',
        status: 'FINISHED',
        homeTeam: {
            id: 267,
            name: 'UD Almería',
            shortName: 'Almería',
            tla: 'ALM',
            crest: 'https://crests.football-data.org/267.png',
        },
        awayTeam: {
            id: 87,
            name: 'Rayo Vallecano de Madrid',
            shortName: 'Rayo Vallecano',
            tla: 'RAY',
            crest: 'https://crests.football-data.org/87.svg',
        },
        score: {
            winner: 'AWAY_TEAM',
            duration: 'REGULAR',
            fullTime: {
                home: 0,
                away: 2,
            },
            halfTime: {
                home: 0,
                away: 2,
            },
        },
    },
    {
        season: {
            id: 1577,
            startDate: '2023-08-13',
            endDate: '2024-05-26',
            currentMatchday: 13,
            winner: null,
        },
        id: 438479,
        utcDate: '2023-08-11T20:00:00Z',
        status: 'FINISHED',
        homeTeam: {
            id: 559,
            name: 'Sevilla FC',
            shortName: 'Sevilla FC',
            tla: 'SEV',
            crest: 'https://crests.football-data.org/559.svg',
        },
        awayTeam: {
            id: 95,
            name: 'Valencia CF',
            shortName: 'Valencia',
            tla: 'VAL',
            crest: 'https://crests.football-data.org/95.svg',
        },
        score: {
            winner: 'AWAY_TEAM',
            duration: 'REGULAR',
            fullTime: {
                home: 1,
                away: 2,
            },
            halfTime: {
                home: 0,
                away: 0,
            },
        },
    },
];
