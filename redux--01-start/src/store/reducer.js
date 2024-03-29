import * as actionTypes from '../store/actions';

const initialState = {
    counter: 0,
    results: []
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
        case actionTypes.STORE_RESULT:
            return {
                ...currentState,
                results: currentState.results.concat({id: new Date(), value: currentState.counter})
            };
        case actionTypes.DELETE_RESULT:
            /*
            const elementIndex = currentState.results.findIndex(result => result.id === action.id);
            const updatedResults = currentState.results.slice();
            updatedResults.splice(elementIndex, 1);
            */
            const updatedResults = currentState.results.filter(result => result.id !== action.id);
            return {
                ...currentState,
                results: updatedResults
            };
        default:
            return currentState
    }
};

export default reducer;