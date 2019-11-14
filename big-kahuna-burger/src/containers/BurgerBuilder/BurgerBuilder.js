import React, {Component} from 'react';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import ordersAxios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

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
        purchasing: false,
        loading: false
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
        this.setState({
            loading: true
        });
        const requestBody = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            deliveryMethod: 'drop',
            shippingMethod: 'expedited',
            customer: {
                name: 'Test user',
                address: {
                    street: `1201 3rd Ave`,
                    city: 'San Diego',
                    zipCode: '47921'
                },
                email: 'test@test.com'
            }
        };
        ordersAxios.post('/orders.json', requestBody)
            .then(response => {
                this.setState({
                    loading: false,
                    purchasing: false
                })
            })
            .catch(error => {
                this.setState({
                    loading: false,
                    purchasing: false
                })
            });

    };

    render() {
        const disableInfo = {
            ...this.state.ingredients
        };

        for (let disableInfoKey in disableInfo) {
            disableInfo[disableInfoKey] = disableInfo[disableInfoKey] < 1
        }

        let orderSummary = <OrderSummary
            price={this.state.totalPrice}
            ingredients={this.state.ingredients}
            cancelPurchase={this.cancelPurchasingHandler}
            continuePurchase={this.continuePurchasingHandler}/>;

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

export default withErrorHandler(BurgerBuilder, ordersAxios);