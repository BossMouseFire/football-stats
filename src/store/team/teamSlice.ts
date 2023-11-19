import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Match } from '../../model/Match';
import { Team } from '../../model/Team';
import { ErrorData } from '../../errors/ErrorData';
import { InitialStateTeam } from './teamType';
import { fetchTeam, fetchTeamMatches } from './teamCreator';
import { Dayjs } from 'dayjs';

const initialState: InitialStateTeam = {
    isLoadingTeam: false,
    isLoadingTeamMatches: false,

    errorTeam: undefined,
    errorTeamMatches: undefined,

    team: null,
    matches: [],

    venue: 'HOME',
    dateFrom: null,
    dateTo: null,
};

export const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {
        fetchTeamCompleted: (state) => {
            state.isLoadingTeam = false;
            state.errorTeam = undefined;
        },
        fetchTeamMatchesCompleted: (state) => {
            state.isLoadingTeamMatches = false;
            state.errorTeamMatches = undefined;
        },
        setDateFrom: (state, action: PayloadAction<Dayjs | null>) => {
            state.dateFrom = action.payload;
        },
        setDateTo: (state, action: PayloadAction<Dayjs | null>) => {
            state.dateTo = action.payload;
        },
        setVenue: (state, action: PayloadAction<'HOME' | 'AWAY'>) => {
            state.venue = action.payload;
        },
    },
    extraReducers: {
        [fetchTeam.pending.type]: (state) => {
            state.isLoadingTeam = true;
        },
        [fetchTeam.fulfilled.type]: (state, action: PayloadAction<Team>) => {
            state.team = action.payload;
        },
        [fetchTeam.rejected.type]: (
            state,
            action: PayloadAction<ErrorData>,
        ) => {
            state.errorTeam = action.payload;
        },
        [fetchTeamMatches.pending.type]: (state) => {
            state.isLoadingTeamMatches = true;
        },
        [fetchTeamMatches.fulfilled.type]: (
            state,
            action: PayloadAction<Match[]>,
        ) => {
            state.matches = action.payload;
        },
        [fetchTeamMatches.rejected.type]: (
            state,
            action: PayloadAction<ErrorData>,
        ) => {
            state.errorTeamMatches = action.payload;
        },
    },
});
