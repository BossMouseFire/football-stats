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

interface InitialStateCompetitions {
    isLoadingCompetition: boolean;
    isLoadingCompetitionStanding: boolean;
    isLoadingCompetitionMatches: boolean;
    isLoadingCompetitionTeams: boolean;

    competition: Competition | null;
    standings: Standing[];
    matches: Match[];
    teams: Team[];

    dateFrom?: string;
    dateTo?: string;
    season?: string;
}

const initialState: InitialStateCompetitions = {
    isLoadingCompetition: false,
    isLoadingCompetitionStanding: false,
    isLoadingCompetitionMatches: false,
    isLoadingCompetitionTeams: false,

    competition: null,
    standings: [],
    matches: [],
    teams: [],

    dateFrom: undefined,
    dateTo: undefined,
    season: undefined,
};

export const competitionSlice = createSlice({
    name: 'competition',
    initialState,
    reducers: {
        fetchCompetitionCompleted: (state) => {
            state.isLoadingCompetition = false;
        },
        fetchCompetitionStandingCompleted: (state) => {
            state.isLoadingCompetitionStanding = false;
        },
        fetchCompetitionMatchesCompleted: (state) => {
            state.isLoadingCompetitionMatches = false;
        },
        fetchCompetitionTeamsCompleted: (state) => {
            state.isLoadingCompetitionTeams = false;
        },
        setDateFrom: (state, action: PayloadAction<string | undefined>) => {
            state.dateFrom = action.payload;
        },
        setDateTo: (state, action: PayloadAction<string | undefined>) => {
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
        [fetchCompetitionStandings.pending.type]: (state) => {
            state.isLoadingCompetitionStanding = true;
        },
        [fetchCompetitionStandings.fulfilled.type]: (
            state,
            action: PayloadAction<Standing[]>,
        ) => {
            state.standings = action.payload;
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
        [fetchCompetitionTeams.pending.type]: (state) => {
            state.isLoadingCompetitionTeams = true;
        },
        [fetchCompetitionTeams.fulfilled.type]: (
            state,
            action: PayloadAction<Team[]>,
        ) => {
            state.teams = action.payload;
        },
    },
});
