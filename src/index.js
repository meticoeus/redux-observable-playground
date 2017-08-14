import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { createBrowserHistory } from 'history'
import './index.css';
import 'rxjs'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';
const store = configureStore();
// const history = createBrowserHistory();

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
