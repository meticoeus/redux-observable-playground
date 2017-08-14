import * as ActionTypes from "../ActionTypes";

export default function UserReducer(state={}, action) {
    switch (action.type) {
        case ActionTypes.FETCH_USER_FULFILLED:
            return {
                ...state,
                // `login` is the username
                [action.payload.login]: action.payload
            };

        default:
            return state;
    }
};