import { combineReducers } from '@reduxjs/toolkit';
import competitionsReducer from './competitions/competitionsReducer';
import competitionReducer from './competition/competitionReducer';
import teamReducer from './team/teamReducer';

export const rootReducer = combineReducers({
    competitionsReducer: competitionsReducer,
    competitionReducer: competitionReducer,
    teamReducer: teamReducer,
});
