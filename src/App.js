import React, { Component } from 'react';
import {combineReducers, createStore, applyMiddleware, bindActionCreators} from 'redux';
import { combineEpics, createEpicMiddleware } from "redux-observable"
import { fetchUser } from "./actions";
import 'rxjs';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";

class App extends Component {
    constructor(props) {
       super(props);
    }
    render() {
    return (
      <div className="App">
          <div>
              <h1>Fetch User Demo</h1>
              <button onClick={() => this.props.fetchUser()}>
                  Fetch User Info
              </button>
              <div>
              <textarea>{JSON.stringify(fetchUser, null, 2)}</textarea>
              </div>
          </div>
      </div>
    );
    }
}
function mapStateToProps(state) {
    return {
        username: state.username
    };
}

function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be passed
    // to all of our reducers
    return bindActionCreators({ fetchUser: fetchUser }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
