import * as ActionTypes from '../ActionTypes';
import {fetchUserFulfilled} from "../actions";
import 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';
export default function fetchUserEpic(action$) {
    return action$.ofType(ActionTypes.FETCH_USER)
        .flatMap(action =>
            ajax.getJSON(`https://api.github.com/users/${action.payload}`)
                .map(response => {console.log("dsadasdas");fetchUserFulfilled(response)})
        );
}