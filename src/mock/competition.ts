export const competitionMock = {
    area: {
        id: 2224,
        name: 'Spain',
        code: 'ESP',
        flag: 'https://crests.football-data.org/760.svg',
    },
    id: 2014,
    name: 'Primera Division',
    code: 'PD',
    type: 'LEAGUE',
    emblem: 'https://crests.football-data.org/PD.png',
    currentSeason: {
        id: 1577,
        startDate: '2023-08-13',
        endDate: '2024-05-26',
        currentMatchday: 13,
        winner: null,
    },
    lastUpdated: '2022-03-20T09:20:08Z',
};

export const competitionMockWithWinner = {
    area: {
        id: 2267,
        name: 'World',
        code: 'INT',
        flag: null,
    },
    id: 2000,
    name: 'FIFA World Cup',
    code: 'WC',
    type: 'CUP',
    emblem: 'https://crests.football-data.org/qatar.png',
    currentSeason: {
        id: 1382,
        startDate: '2022-11-20',
        endDate: '2022-12-18',
        currentMatchday: 8,
        winner: {
            id: 762,
            name: 'Argentina',
            shortName: 'Argentina',
            tla: 'ARG',
            crest: 'https://crests.football-data.org/762.png',
            address: 'Viamonte 1366/76 Buenos Aires, Buenos Aires 1053',
            website: 'http://www.afa.org.ar',
            founded: 1893,
            clubColors: 'Sky Blue / White / Black',
            venue: null,
            lastUpdated: '2022-05-17T21:09:25Z',
        },
    },
    lastUpdated: '2022-05-09T19:45:29Z',
};