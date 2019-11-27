import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer'
import counterReducer from './store/reducers/counter';
import resultsReducer from './store/reducers/results';

const store = createStore(combineReducers({
    counterReducer: counterReducer,
    resultsReducer: resultsReducer
}));
ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.getElementById('root')
);
registerServiceWorker();
