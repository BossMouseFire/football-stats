import { competitionsMock } from '../../mock/competitions';
import reducer from '../competitions/competitionsReducer';
import actions from '../competitions/competitionsAction';
import { fetchCompetitions } from '../competitions/competitionsCreator';
import { InitialStateCompetitions } from '../competitions/competitionsType';
import { errorMock400 } from '../../mock/error';
import { mockedVoidFunc } from '../../test/helpers/mockeVoidFunc';

const mockFilterNameRight = 'Pr';
const mockFilterNameWrong = 'afsfsfd';

describe('competitionSlice', () => {
    let previousState: InitialStateCompetitions = {
        isLoading: false,
        competitions: [],
        filterCompetitions: [],
        filterName: '',
        error: undefined,
    };

    test('fetchCompetitions.pending', () => {
        const currentState = reducer(previousState, fetchCompetitions.pending);
        expect(currentState.isLoading).toBe(true);
    });

    test('fetchCompetitions.fulfilled', () => {
        const currentState = reducer(
            previousState,
            fetchCompetitions.fulfilled(competitionsMock, ''),
        );
        expect(currentState.competitions).toEqual(competitionsMock);
        expect(currentState.filterCompetitions).toEqual(competitionsMock);
        expect(currentState.isLoading).toBe(false);
    });

    test('fetchCompetitions.rejected', () => {
        const currentState = reducer(
            previousState,
            fetchCompetitions.rejected(null, '', mockedVoidFunc, errorMock400),
        );
        expect(currentState.error).toEqual(errorMock400);
        expect(currentState.isLoading).toBe(false);
    });

    test('Фильтрация по корректному значению', () => {
        previousState = {
            ...previousState,
            competitions: competitionsMock,
            filterCompetitions: competitionsMock,
        };

        const currentState = reducer(
            previousState,
            actions.setFilter(mockFilterNameRight),
        );
        const lengthFilterCompetitions = currentState.filterCompetitions.length;
        expect(lengthFilterCompetitions).toBe(3);
    });

    test('Фильтрация по неизвестному значению', () => {
        previousState = {
            ...previousState,
            competitions: competitionsMock,
            filterCompetitions: competitionsMock,
        };

        const currentState = reducer(
            previousState,
            actions.setFilter(mockFilterNameWrong),
        );
        const lengthFilterCompetitions = currentState.filterCompetitions.length;
        expect(lengthFilterCompetitions).toBe(0);
    });
});
