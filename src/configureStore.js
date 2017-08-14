// import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
// import { routerMiddleware } from 'react-router-redux';
import { rootReducer } from './reducers';
import { rootEpic } from './epics';
// const history = createBrowserHistory();

const epicMiddleware = createEpicMiddleware(rootEpic);

export default function configureStore() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        rootReducer,
        composeEnhancers(
            applyMiddleware(
                epicMiddleware,
                // routerMiddleware(history)
            )
        )
    );
    return store;
}