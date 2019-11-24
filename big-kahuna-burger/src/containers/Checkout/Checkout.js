import React, {Component} from "react";
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from "./ContactData/ContactData";
import {Route} from 'react-router-dom'

class Checkout extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            meat: 0,
            cheese: 0
        },
        price: 0
    };

    componentDidMount() {
        const ingredients = {};
        let price = 0;
        const query = new URLSearchParams(this.props.location.search);
        for (const param of query.entries()) {
            if (param[0] === 'totalPrice') {
                price = +param[1]
            } else {
                ingredients[param[0]] = +param[1]
            }
        }
        this.setState({
            ingredients: ingredients,
            price: price
        })
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    };

    checkoutContinueHandler = () => {
        this.props.history.push(this.props.match.url + '/contact-data');
    };

    render() {
        console.log(this.state.ingredients);
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}
                                 checkoutCancelled={this.checkoutCancelledHandler}
                                 checkoutContinue={this.checkoutContinueHandler}/>
                <Route path={this.props.match.url + "/contact-data"}
                       render={() => <ContactData ingredients={this.state.ingredients}
                                                  price={this.state.price} {...this.props}/>}
                />
            </div>
        );
    }
}

export default Checkout;