import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    salad: 1,
    meat: 1.5,
    bacon: 2,
    cheese: 0.5
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            bacon: 0,
            cheese: 0
        },
        totalPrice: 3,
        purchasable: false,
        purchasing: false
    };

    updatePurchasable = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(ingredientKey => ingredients[ingredientKey])
            .reduce((currentSum, currentValue) => currentSum + currentValue, 0);
        this.setState({
            purchasable: sum > 0
        })
    };

    addIngredientHandler = (type) => {
        const ingredients = {...this.state.ingredients};
        const updatedQuantity = ingredients[type] + 1;
        const updatedIngredients = {...ingredients};
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        updatedIngredients[type] = updatedQuantity;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
        this.updatePurchasable(updatedIngredients);
    };

    removeIngredientHandler = (type) => {
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
        this.updatePurchasable(updatedIngredients);
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
        alert('checking you out!')
    };

    render() {
        const disableInfo = {
            ...this.state.ingredients
        };

        for (let disableInfoKey in disableInfo) {
            disableInfo[disableInfoKey] = disableInfo[disableInfoKey] < 1
        }

        return (
            <Aux>
                <Modal
                    show={this.state.purchasing}
                    cancelPurchase={this.cancelPurchasingHandler}>
                    <OrderSummary
                        price={this.state.totalPrice}
                        ingredients={this.state.ingredients}
                        cancelPurchase={this.cancelPurchasingHandler}
                        continuePurchase={this.continuePurchasingHandler}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientAdd={this.addIngredientHandler}
                               ingredientRemove={this.removeIngredientHandler}
                               disableInfo={disableInfo}
                               price={this.state.totalPrice}
                               purchasable={this.state.purchasable}
                               purchasing={this.purchasingHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;