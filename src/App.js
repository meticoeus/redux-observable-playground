import React, { Component } from 'react';
import {combineReducers, createStore, applyMiddleware, bindActionCreators} from 'redux';
import { combineEpics, createEpicMiddleware } from "redux-observable"
import { fetchUser } from "./actions";
import 'rxjs';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";

class App extends Component {
    static defaultProps = {
      users: [],
    };
    constructor(props) {
       super(props);
    }
    render() {
    return (
      <div className="App">
          <div>
              <h1>Fetch User Demo</h1>
              <button onClick={() => this.props.fetchUser("Deviad")}>
                  Fetch User Info
              </button>
              <div>
              <textarea>{JSON.stringify(fetchUser, null, 2)}</textarea>
                  <ul>
                    {this.props.users.map(user => (
                      <li key={user.id}>
                        {user.login}
                      </li>
                    ))}
                  </ul>
              </div>
          </div>
      </div>
    );
    }
}
function mapStateToProps(state) {
    return {
        users: state.users ? Object.values(state.users) : []
    };
}

function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be passed
    // to all of our reducers
    return bindActionCreators({ fetchUser: fetchUser }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
