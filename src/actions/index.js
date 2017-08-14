import * as ActionTypes from "../ActionTypes"


export function fetchUser (username) { return {type: ActionTypes.FETCH_USER, payload: username }}
export function fetchUserFulfilled (payload){ return { type: ActionTypes.FETCH_USER_FULFILLED, payload }}







