import reducer from '../competition/competitionReducer';
import { errorMock400 } from '../../mock/error';
import { InitialStateCompetition } from '../competition/competitionType';
import { competitionMock } from '../../mock/competition';
import {
    fetchCompetition,
    fetchCompetitionMatches,
    fetchCompetitionStandings,
    fetchCompetitionTeams,
} from '../competition/competitionCreator';
import { standingsMockRefactor } from '../../mock/standing';
import { matchesMock } from '../../mock/match';
import { teamsMock } from '../../mock/team';

describe('competitionSlice', () => {
    const previousState: InitialStateCompetition = {
        isLoadingCompetition: false,
        isLoadingCompetitionStanding: false,
        isLoadingCompetitionMatches: false,
        isLoadingCompetitionTeams: false,

        errorCompetition: undefined,
        errorCompetitionStanding: undefined,
        errorCompetitionMatches: undefined,
        errorCompetitionTeams: undefined,

        competition: null,
        standings: [],
        matches: [],
        teams: [],

        dateFrom: null,
        dateTo: null,
        season: undefined,
    };

    test('fetchCompetition.pending', () => {
        const currentState = reducer(previousState, fetchCompetition.pending);
        expect(currentState.isLoadingCompetition).toBe(true);
    });

    test('fetchCompetition.fulfilled', () => {
        const currentState = reducer(
            previousState,
            fetchCompetition.fulfilled(competitionMock, '', '2014'),
        );
        expect(currentState.competition).toEqual(competitionMock);
        expect(currentState.isLoadingCompetition).toBe(false);
    });

    test('fetchCompetition.rejected', () => {
        const currentState = reducer(
            previousState,
            fetchCompetition.rejected(null, '', '2014', errorMock400),
        );
        expect(currentState.errorCompetition).toEqual(errorMock400);
        expect(currentState.isLoadingCompetition).toBe(false);
    });

    test('fetchCompetitionStandings.pending', () => {
        const currentState = reducer(
            previousState,
            fetchCompetitionStandings.pending,
        );
        expect(currentState.isLoadingCompetitionStanding).toBe(true);
        expect(currentState.isLoadingCompetition).toBe(true);
    });

    test('fetchCompetitionStandings.fulfilled', () => {
        const currentState = reducer(
            previousState,
            fetchCompetitionStandings.fulfilled(standingsMockRefactor, '', {
                id: '2014',
                season: '2020',
            }),
        );
        expect(currentState.standings).toEqual(standingsMockRefactor.standings);
        expect(currentState.competition).toEqual(
            standingsMockRefactor.competition,
        );
        expect(currentState.isLoadingCompetitionStanding).toBe(false);
    });

    test('fetchCompetitionStandings.rejected', () => {
        const currentState = reducer(
            previousState,
            fetchCompetitionStandings.rejected(
                null,
                '',
                {
                    id: '2014',
                    season: '2020',
                },
                errorMock400,
            ),
        );
        expect(currentState.errorCompetition).toEqual(errorMock400);
        expect(currentState.errorCompetitionStanding).toEqual(errorMock400);
        expect(currentState.isLoadingCompetitionStanding).toBe(false);
    });

    test('fetchCompetitionMatches.pending', () => {
        const currentState = reducer(
            previousState,
            fetchCompetitionMatches.pending,
        );
        expect(currentState.isLoadingCompetitionMatches).toBe(true);
    });

    test('fetchCompetitionMatches.fulfilled', () => {
        const currentState = reducer(
            previousState,
            fetchCompetitionMatches.fulfilled(matchesMock, '', {
                id: '2014',
                season: '2022',
                dateFrom: '12.10.2022',
                dateTo: '14.01.2023',
            }),
        );
        expect(currentState.matches).toEqual(matchesMock);
        expect(currentState.isLoadingCompetitionMatches).toBe(false);
    });

    test('fetchCompetitionMatches.rejected', () => {
        const currentState = reducer(
            previousState,
            fetchCompetitionMatches.rejected(
                null,
                '',
                {
                    id: '2014',
                    season: '2022',
                    dateFrom: '12.10.2022',
                    dateTo: '14.01.2023',
                },
                errorMock400,
            ),
        );
        expect(currentState.errorCompetitionMatches).toEqual(errorMock400);
        expect(currentState.isLoadingCompetitionMatches).toBe(false);
    });

    test('fetchCompetitionTeams.pending', () => {
        const currentState = reducer(
            previousState,
            fetchCompetitionTeams.pending,
        );
        expect(currentState.isLoadingCompetitionTeams).toBe(true);
    });

    test('fetchCompetitionTeams.fulfilled', () => {
        const currentState = reducer(
            previousState,
            fetchCompetitionTeams.fulfilled(teamsMock, '', {
                id: '2014',
                season: '2022',
            }),
        );
        expect(currentState.teams).toEqual(teamsMock);
        expect(currentState.isLoadingCompetitionTeams).toBe(false);
    });

    test('fetchCompetitionTeams.rejected', () => {
        const currentState = reducer(
            previousState,
            fetchCompetitionTeams.rejected(
                null,
                '',
                {
                    id: '2014',
                    season: '2022',
                },
                errorMock400,
            ),
        );
        expect(currentState.errorCompetitionTeams).toEqual(errorMock400);
        expect(currentState.isLoadingCompetitionTeams).toBe(false);
    });
});
