const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  counter: 0
};

// reducer
rootReducer = (currentState = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return {
              ...currentState,
                counter: currentState.counter + 1
            };

        case 'DECREMENT_COUNTER':
            return {
            ...currentState,
            counter: currentState.counter - 1
        };
        case 'ADD_COUNTER':
            return {
                ...currentState,
                counter: currentState.counter + action.value
            };
        case 'SUB_COUNTER':
            return {
                ...currentState,
                counter: currentState.counter - action.value
            };
        default:
            return currentState
    }
};

// create store
const store = createStore(rootReducer);
console.log(store.getState());

// subscription
store.subscribe(() => {
   console.log('[Subscription]', store.getState());
});

// dispatch action
store.dispatch({type: 'INCREMENT_COUNTER'});
// store.dispatch({type: 'DECREMENT_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
// store.dispatch({type: 'SUB_COUNTER', value: 10});
console.log(store.getState());
