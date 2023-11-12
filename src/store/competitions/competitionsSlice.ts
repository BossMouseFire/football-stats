import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Competition } from '../../model/Competition';
import { fetchCompetitions } from './competitionsCreator';
import { ErrorData } from '../../errors/ErrorData';
import { fetchCompetitionStandings } from '../competition/competitionCreator';

interface InitialStateCompetitions {
    isLoading: boolean;
    competitions: Competition[];
    filterCompetitions: Competition[];
    filterName: string;
    error: ErrorData | undefined;
}

const initialState: InitialStateCompetitions = {
    isLoading: false,
    competitions: [],
    filterCompetitions: [],
    filterName: '',
    error: undefined,
};

export const competitionsSlice = createSlice({
    name: 'competitions',
    initialState,
    reducers: {
        fetchCompleted: (state) => {
            state.isLoading = false;
            state.error = undefined;
        },
        setFilter: (state, action: PayloadAction<string>) => {
            state.filterName = action.payload;

            if (!action.payload) {
                state.filterCompetitions = state.competitions;
            } else {
                const filterNameLower = state.filterName.toLowerCase();
                state.filterCompetitions = state.competitions.filter(
                    (item) =>
                        item?.name?.toLowerCase().indexOf(filterNameLower) !==
                        -1,
                );
            }
        },
    },
    extraReducers: {
        [fetchCompetitions.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchCompetitions.fulfilled.type]: (
            state,
            action: PayloadAction<Competition[]>,
        ) => {
            state.competitions = action.payload;
            state.filterCompetitions = action.payload;
        },
        [fetchCompetitions.rejected.type]: (
            state,
            action: PayloadAction<ErrorData>,
        ) => {
            state.error = action.payload;
        },
    },
});
