import { combineReducers } from '@reduxjs/toolkit';
import competitionReducer from './competition/competitionReducer';

export const rootReducer = combineReducers({
    competitionReducer: competitionReducer,
});
