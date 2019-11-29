import React, {Component} from 'react';
import {connect} from 'react-redux';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actionTypes from '../../store/actions';

const INGREDIENT_PRICES = {
    salad: 1,
    meat: 1.5,
    bacon: 2,
    cheese: 0.5
};

class BurgerBuilder extends Component {
    state = {
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    };

    componentDidMount() {
        axios.get('/ingredients.json')
            .then(response => {
                if (response && response.data) {
                    this.props.refreshIngredients(response.data);
                    this.setState({
                        error: false
                    })
                } else {
                    this.setState({
                        error: true
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });

    }

    updatePurchasable = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(ingredientKey => ingredients[ingredientKey])
            .reduce((currentSum, currentValue) => currentSum + currentValue, 0);
        this.setState({
            purchasable: sum > 0
        })
    };

    addIngredientHandler = (type) => {
        this.props.addIngredient(type);
        this.props.addAmount(INGREDIENT_PRICES[type]);

        /*
        const ingredients = {...this.state.ingredients};
        const updatedQuantity = ingredients[type] + 1;
        const updatedIngredients = {...ingredients};
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        updatedIngredients[type] = updatedQuantity;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
        */
        this.updatePurchasable(this.props.ingredients);
    };

    removeIngredientHandler = (type) => {
        if (this.props.ingredients[type] < 1) {
            return;
        }
        this.props.removeIngredient(type);
        this.props.subtractAmount(INGREDIENT_PRICES[type]);

        /*
        const ingredients = {...this.state.ingredients};

        if (ingredients[type] < 1) {
            return;
        }
        const updatedQuantity = ingredients[type] - 1;
        const updatedIngredients = {...ingredients};
        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        updatedIngredients[type] = updatedQuantity;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
        */
        this.updatePurchasable(this.props.ingredients);
    };

    purchasingHandler = () => {
        this.setState({
            purchasing: true
        })
    };

    cancelPurchasingHandler = () => {
        this.setState({
            purchasing: false
        })
    };

    continuePurchasingHandler = () => {
        /*
        let queryParams = [];
        for (const ingredient in this.props.ingredients) {
            queryParams.push(encodeURI(ingredient) + '=' + encodeURI(this.props.ingredients[ingredient]))
        }
        queryParams.push(encodeURI('totalPrice') + '=' + encodeURI(this.props.totalPrice));
        const query = queryParams.join('&');
        */
        this.props.history.push({
            pathname: '/checkout'
        });
    };

    render() {
        const disableInfo = {
            ...this.props.ingredients
        };

        for (let disableInfoKey in disableInfo) {
            disableInfo[disableInfoKey] = disableInfo[disableInfoKey] < 1
        }

        let orderSummary = null;
        let burgerPreview = <Spinner/>;
        if (this.props.ingredients) {
            burgerPreview = <Burger ingredients={this.props.ingredients}/>;
            orderSummary = <OrderSummary
                price={this.props.totalPrice}
                ingredients={this.props.ingredients}
                cancelPurchase={this.cancelPurchasingHandler}
                continuePurchase={this.continuePurchasingHandler}/>;
        }

        if (this.state.loading) {
            orderSummary = <Spinner/>
        }

        return (
            <Aux>
                <Modal
                    show={this.state.purchasing}
                    cancelPurchase={this.cancelPurchasingHandler}>
                    {orderSummary}
                </Modal>
                {this.state.error ?
                    <p>Something went wrong while loading the application</p> :
                    <Aux>
                        {burgerPreview}
                        <BuildControls ingredientAdd={this.addIngredientHandler}
                                       ingredientRemove={this.removeIngredientHandler}
                                       disableInfo={disableInfo}
                                       price={this.props.totalPrice}
                                       purchasable={this.state.purchasable}
                                       purchasing={this.purchasingHandler}/>
                    </Aux>
                }
            </Aux>
        );
    }
}

const mapPropsToState = state => {
    return {
        ingredients: state.ingredientsReducer.ingredients,
        totalPrice: state.totalPriceReducer.totalPrice
    }
};

const mapPropsToDispatch = (dispatch) => {
    return {
        addIngredient: (type) => dispatch({type: actionTypes.ADD_INGREDIENT, key: type}),
        removeIngredient: (type) => dispatch({type: actionTypes.REMOVE_INGREDIENT, key: type}),
        refreshIngredients: (ingredients) => dispatch({
            type: actionTypes.REFRESH_INGREDIENTS,
            ingredients: ingredients
        }),
        addAmount: (amount) => dispatch({type: actionTypes.ADD_AMOUNT, value: amount}),
        subtractAmount: (amount) => dispatch({type: actionTypes.SUBTRACT_AMOUNT, value: amount})
    }
};

export default withErrorHandler(connect(mapPropsToState, mapPropsToDispatch)(BurgerBuilder), axios);