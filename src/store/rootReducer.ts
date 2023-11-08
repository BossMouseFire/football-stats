import { combineReducers } from '@reduxjs/toolkit';
import competitionsReducer from './competitions/competitionsReducer';
import competitionReducer from './competition/competitionReducer';

export const rootReducer = combineReducers({
    competitionsReducer: competitionsReducer,
    competitionReducer: competitionReducer,
});
