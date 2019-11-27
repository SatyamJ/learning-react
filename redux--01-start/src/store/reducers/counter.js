import * as actionTypes from '../actions';

const initialState = {
    counter: 0
};

const reducer = (currentState = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...currentState,
                counter: currentState.counter + 1
            };

        case actionTypes.DECREMENT:
            return {
                ...currentState,
                counter: currentState.counter - 1
            };
        case actionTypes.ADD:
            return {
                ...currentState,
                counter: currentState.counter + action.value
            };
        case actionTypes.SUB:
            return {
                ...currentState,
                counter: currentState.counter - action.value
            };
        default:
            return currentState
    }
};

export default reducer;