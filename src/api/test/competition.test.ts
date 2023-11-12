import api from '../config';
import { competitionsMock } from '../../mock/competitions';
import { Competition } from '../../model/Competition';
import { CompetitionApi } from '../competition/competition';
import {
    competitionMock,
    competitionMockWithWinner,
} from '../../mock/competition';
import { errorMock400, errorMock403, errorMock404 } from '../../mock/error';
import { Match } from '../../model/Match';
import { matchesMock } from '../../mock/match';
import { teamsMock } from '../../mock/team';
import { Team } from '../../model/Team';
import { standingsMock, standingsMockRefactor } from '../../mock/standing';
import { Standing } from '../../model/Standing';

jest.mock('api');

describe('getCompetitions', () => {
    let responseTest: Competition[];
    beforeEach(() => {
        const mockedApiGet = api.get as jest.Mock;
        const response = { competitions: competitionsMock };
        mockedApiGet.mockResolvedValue(response);

        responseTest = competitionsMock.map((item) => new Competition(item));
    });

    test('Корректное значение', () => {
        return CompetitionApi.getCompetitions().then((data) =>
            expect(data).toEqual(responseTest),
        );
    });

    test('Не пустое значение', () => {
        return CompetitionApi.getCompetitions().then((data) =>
            expect(data).not.toEqual([]),
        );
    });
});

describe('getCompetition', () => {
    const mockedApiGet = api.get as jest.Mock;

    test('Корректное значение без объекта winner', () => {
        mockedApiGet.mockResolvedValue(competitionMock);

        const competitionTest = new Competition(competitionMock);
        return CompetitionApi.getCompetition('2013').then((data) =>
            expect(data).toEqual(competitionTest),
        );
    });

    test('Корректное значение c объектом winner', () => {
        mockedApiGet.mockResolvedValue(competitionMockWithWinner);

        const competitionTest = new Competition(competitionMockWithWinner);
        return CompetitionApi.getCompetition('2013').then((data) =>
            expect(data).toEqual(competitionTest),
        );
    });

    test('Ошибка 400', () => {
        mockedApiGet.mockRejectedValue(errorMock400);

        return CompetitionApi.getCompetition('20303232').catch((error) =>
            expect(error).toEqual(errorMock400),
        );
    });

    test('Ошибка 403', () => {
        mockedApiGet.mockRejectedValue(errorMock403);

        return CompetitionApi.getCompetition('2030').catch((error) =>
            expect(error).toEqual(errorMock403),
        );
    });

    test('Ошибка 404', () => {
        mockedApiGet.mockRejectedValue(errorMock404);

        return CompetitionApi.getCompetition('999').catch((error) =>
            expect(error).toEqual(errorMock404),
        );
    });
});

describe('getCompetitionMatches', () => {
    const mockedApiGet = api.get as jest.Mock;
    let responseTest: Match[];
    beforeEach(() => {
        const response = { matches: matchesMock };
        mockedApiGet.mockResolvedValue(response);

        responseTest = matchesMock.map((item) => new Match(item));
    });

    test('Корректное значение', () => {
        return CompetitionApi.getCompetitionMatches('2015').then((data) =>
            expect(data).toEqual(responseTest),
        );
    });

    test('Не пустое значение', () => {
        return CompetitionApi.getCompetitionMatches('2015').then((data) =>
            expect(data).not.toEqual([]),
        );
    });

    test('Ошибка 400', () => {
        mockedApiGet.mockRejectedValue(errorMock400);

        return CompetitionApi.getCompetitionMatches('20303232').catch((error) =>
            expect(error).toEqual(errorMock400),
        );
    });

    test('Ошибка 403', () => {
        mockedApiGet.mockRejectedValue(errorMock403);

        return CompetitionApi.getCompetitionMatches('2030').catch((error) =>
            expect(error).toEqual(errorMock403),
        );
    });

    test('Ошибка 404', () => {
        mockedApiGet.mockRejectedValue(errorMock404);

        return CompetitionApi.getCompetitionMatches('999').catch((error) =>
            expect(error).toEqual(errorMock404),
        );
    });
});

describe('getCompetitionTeams', () => {
    const mockedApiGet = api.get as jest.Mock;
    let responseTest: Team[];
    beforeEach(() => {
        const response = { teams: teamsMock };
        mockedApiGet.mockResolvedValue(response);

        responseTest = teamsMock.map((item) => new Team(item));
    });

    test('Корректное значение', () => {
        return CompetitionApi.getCompetitionTeams('2015').then((data) =>
            expect(data).toEqual(responseTest),
        );
    });

    test('Не пустое значение', () => {
        return CompetitionApi.getCompetitionTeams('2015').then((data) =>
            expect(data).not.toEqual([]),
        );
    });

    test('Ошибка 400', () => {
        mockedApiGet.mockRejectedValue(errorMock400);

        return CompetitionApi.getCompetitionTeams('20303232').catch((error) =>
            expect(error).toEqual(errorMock400),
        );
    });

    test('Ошибка 403', () => {
        mockedApiGet.mockRejectedValue(errorMock403);

        return CompetitionApi.getCompetitionTeams('2030').catch((error) =>
            expect(error).toEqual(errorMock403),
        );
    });

    test('Ошибка 404', () => {
        mockedApiGet.mockRejectedValue(errorMock404);

        return CompetitionApi.getCompetitionTeams('999').catch((error) =>
            expect(error).toEqual(errorMock404),
        );
    });
});

describe('getCompetitionStandings', () => {
    const mockedApiGet = api.get as jest.Mock;
    let responseTest: { standings: Standing[]; competition: Competition };
    beforeEach(() => {
        mockedApiGet.mockResolvedValue(standingsMock);

        responseTest = standingsMockRefactor;
    });

    test('Корректное значение', () => {
        return CompetitionApi.getCompetitionStanding('2015').then((data) =>
            expect(data).toEqual(responseTest),
        );
    });

    test('Не пустое значение', () => {
        return CompetitionApi.getCompetitionStanding('2015').then((data) =>
            expect(data).not.toEqual([]),
        );
    });

    test('Ошибка 400', () => {
        mockedApiGet.mockRejectedValue(errorMock400);

        return CompetitionApi.getCompetitionStanding('20303232').catch(
            (error) => expect(error).toEqual(errorMock400),
        );
    });

    test('Ошибка 403', () => {
        mockedApiGet.mockRejectedValue(errorMock403);

        return CompetitionApi.getCompetitionStanding('2030').catch((error) =>
            expect(error).toEqual(errorMock403),
        );
    });

    test('Ошибка 404', () => {
        mockedApiGet.mockRejectedValue(errorMock404);

        return CompetitionApi.getCompetitionStanding('999').catch((error) =>
            expect(error).toEqual(errorMock404),
        );
    });
});
