import * as ActionTypes from "../ActionTypes"


export const fetchUser = username => ({ type: ActionTypes.FETCH_USER, payload: username });
export const fetchUserFulfilled = payload => ({ type: ActionTypes.FETCH_USER_FULFILLED, payload });







