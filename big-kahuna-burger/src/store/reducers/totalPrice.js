import * as actionTypes from '../actions';

const initialState = {
    totalPrice: 3
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_AMOUNT:
            return {
                totalPrice: state.totalPrice + action.value
            };
        case actionTypes.SUBTRACT_AMOUNT:
            return {
                totalPrice: state.totalPrice - action.value
            };
        default:
            return state;
    }
};

export default reducer;