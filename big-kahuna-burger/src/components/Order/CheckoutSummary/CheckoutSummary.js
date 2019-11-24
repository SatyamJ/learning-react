import React, {Component} from "react";
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

class CheckoutSummary extends Component {
    render() {
        return (
            <div className={classes.CheckoutSummary}>
                <Burger ingredients={this.props.ingredients}/>
                <div>
                    <Button buttonType="Danger"
                            clicked={this.props.checkoutCancelled}>
                        CANCEL
                    </Button>
                    <Button buttonType="Success"
                            clicked={this.props.checkoutContinue}>
                        CONTINUE
                    </Button>
                </div>
            </div>
        );
    }
}

export default CheckoutSummary;