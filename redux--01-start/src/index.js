import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer'
import counterReducer from './store/reducers/counter';
import resultsReducer from './store/reducers/results';

const logger = store => {
    return next => {
        return action => {
            console.log('Logger middleware | Dispatching', action);
            const result = next(action);
            console.log('Logger middleware | next state', store.getState());
            return result;
        }
    }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        counterReducer: counterReducer,
        resultsReducer: resultsReducer
    }),
    composeEnhancers(applyMiddleware(logger)));

ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.getElementById('root')
);
registerServiceWorker();
