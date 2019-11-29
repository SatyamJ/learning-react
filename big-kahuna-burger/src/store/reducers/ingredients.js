import * as actionTypes from '../actions';

const initialState = {
    ingredients: null
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            const updatedIngredients = {
                ...state.ingredients
            };
            updatedIngredients[action.key] = updatedIngredients[action.key] + 1;
            return {
                ingredients: updatedIngredients
            };
        case actionTypes.REFRESH_INGREDIENTS:
            return {
                ingredients: {
                    ...action.ingredients
                }
            };
        case actionTypes.REMOVE_INGREDIENT:
            const newIngredients = {
                ...state.ingredients
            };
            newIngredients[action.key] = newIngredients[action.key] - 1;
            return {
                ingredients: newIngredients
            };
        default:
            return state;
    }
};

export default reducer;