import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from  'react-redux'
import {combineReducers, createStore} from  'redux'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import totalPriceReducer from './store/reducers/totalPrice';
import ingredientsReducer from './store/reducers/ingredients';

const store = createStore(combineReducers({
    totalPriceReducer: totalPriceReducer,
    ingredientsReducer: ingredientsReducer
}));

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
