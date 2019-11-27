const initialState = {
    counter: 0
};

const reducer = (currentState = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...currentState,
                counter: currentState.counter + 1
            };

        case 'DECREMENT':
            return {
                ...currentState,
                counter: currentState.counter - 1
            };
        case 'ADD':
            return {
                ...currentState,
                counter: currentState.counter + action.value
            };
        case 'SUB':
            return {
                ...currentState,
                counter: currentState.counter - action.value
            };
        default:
            return currentState
    }
};

export default reducer;