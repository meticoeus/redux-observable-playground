
import { combineEpics } from 'redux-observable';
import fetchUserEpic from './epic_user_fetch';


export const rootEpic = combineEpics(
    fetchUserEpic
);