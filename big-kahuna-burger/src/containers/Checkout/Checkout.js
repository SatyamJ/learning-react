import React, {Component} from "react";
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from "./ContactData/ContactData";
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'

class Checkout extends Component {

    componentDidMount() {}

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    };

    checkoutContinueHandler = () => {
        this.props.history.push(this.props.match.url + '/contact-data');
    };

    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.props.ingredients}
                                 checkoutCancelled={this.checkoutCancelledHandler}
                                 checkoutContinue={this.checkoutContinueHandler}/>
                <Route path={this.props.match.url + "/contact-data"}
                       render={() => <ContactData ingredients={this.props.ingredients}
                                                  price={this.props.price} {...this.props}/>}
                />
            </div>
        );
    }
}

const mapPropsToState = state => {
    return {
        ingredients: state.ingredientsReducer.ingredients,
        price: state.totalPriceReducer.totalPrice
    }
};

export default connect(mapPropsToState)(Checkout);