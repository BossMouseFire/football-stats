import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Competition } from '../../model/Competition';
import {
    fetchCompetition,
    fetchCompetitionStandings,
    fetchCompetitionMatches,
    fetchCompetitionTeams,
} from './competitionCreator';
import { Standing } from '../../model/Standing';
import { Match } from '../../model/Match';
import { Team } from '../../model/Team';
import { CompetitionStandings } from '../../api/competition/types';
import { ErrorData } from '../../errors/ErrorData';
import { Dayjs } from 'dayjs';

interface InitialStateCompetitions {
    isLoadingCompetition: boolean;
    isLoadingCompetitionStanding: boolean;
    isLoadingCompetitionMatches: boolean;
    isLoadingCompetitionTeams: boolean;

    errorCompetition: ErrorData | undefined;
    errorCompetitionStanding: ErrorData | undefined;
    errorCompetitionMatches: ErrorData | undefined;
    errorCompetitionTeams: ErrorData | undefined;

    competition: Competition | null;
    standings: Standing[];
    matches: Match[];
    teams: Team[];

    dateFrom: Dayjs | null;
    dateTo: Dayjs | null;
    season?: string;
}

const initialState: InitialStateCompetitions = {
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

export const competitionSlice = createSlice({
    name: 'competition',
    initialState,
    reducers: {
        fetchCompetitionCompleted: (state) => {
            state.isLoadingCompetition = false;
            state.errorCompetition = undefined;
        },
        fetchCompetitionStandingCompleted: (state) => {
            state.isLoadingCompetitionStanding = false;
            state.errorCompetitionStanding = undefined;
        },
        fetchCompetitionMatchesCompleted: (state) => {
            state.isLoadingCompetitionMatches = false;
            state.errorCompetitionMatches = undefined;
        },
        fetchCompetitionTeamsCompleted: (state) => {
            state.isLoadingCompetitionTeams = false;
            state.errorCompetitionTeams = undefined;
        },
        setDateFrom: (state, action: PayloadAction<Dayjs | null>) => {
            state.dateFrom = action.payload;
        },
        setDateTo: (state, action: PayloadAction<Dayjs | null>) => {
            state.dateTo = action.payload;
        },
        setSeason: (state, action: PayloadAction<string | undefined>) => {
            state.season = action.payload;
        },
    },
    extraReducers: {
        [fetchCompetition.pending.type]: (state) => {
            state.isLoadingCompetition = true;
        },
        [fetchCompetition.fulfilled.type]: (
            state,
            action: PayloadAction<Competition>,
        ) => {
            state.competition = action.payload;
        },
        [fetchCompetition.rejected.type]: (
            state,
            action: PayloadAction<ErrorData>,
        ) => {
            state.errorCompetition = action.payload;
        },
        [fetchCompetitionStandings.pending.type]: (state) => {
            state.isLoadingCompetitionStanding = true;
            state.isLoadingCompetition = true;
        },
        [fetchCompetitionStandings.fulfilled.type]: (
            state,
            action: PayloadAction<CompetitionStandings>,
        ) => {
            state.standings = action.payload.standings;
            state.competition = action.payload.competition;
        },
        [fetchCompetitionStandings.rejected.type]: (
            state,
            action: PayloadAction<ErrorData>,
        ) => {
            state.errorCompetition = action.payload;
            state.errorCompetitionStanding = action.payload;
        },
        [fetchCompetitionMatches.pending.type]: (state) => {
            state.isLoadingCompetitionMatches = true;
        },
        [fetchCompetitionMatches.fulfilled.type]: (
            state,
            action: PayloadAction<Match[]>,
        ) => {
            state.matches = action.payload;
        },
        [fetchCompetitionMatches.rejected.type]: (
            state,
            action: PayloadAction<ErrorData>,
        ) => {
            state.errorCompetitionMatches = action.payload;
        },
        [fetchCompetitionTeams.pending.type]: (state) => {
            state.isLoadingCompetitionTeams = true;
        },
        [fetchCompetitionTeams.fulfilled.type]: (
            state,
            action: PayloadAction<Team[]>,
        ) => {
            state.teams = action.payload;
        },
        [fetchCompetitionTeams.rejected.type]: (
            state,
            action: PayloadAction<ErrorData>,
        ) => {
            state.errorCompetitionTeams = action.payload;
        },
    },
});
