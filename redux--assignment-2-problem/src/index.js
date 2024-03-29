import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import personsReducer from './store/reducers/persons'

const store = createStore(combineReducers({
        personsReducer: personsReducer
    })
);

ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.getElementById('root')
);
registerServiceWorker();
