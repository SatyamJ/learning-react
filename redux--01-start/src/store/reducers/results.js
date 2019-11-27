import * as actionTypes from '../actions';

const initialState = {
    results: []
};

const reducer = (currentState = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...currentState,
                results: currentState.results.concat({id: new Date(), value: action.result})
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