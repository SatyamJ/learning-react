import React from 'react';
import Aux from '../../../hoc/Aux/Aux'
import Button from '../../../components/UI/Button/Button';

const orderSummary = (props) => {
    const ingredientList = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return (
                <li key={ingredientKey}>
                    <span style={{textTransform: 'capitalize'}}>
                        {ingredientKey}
                    </span>
                    : {props.ingredients[ingredientKey]}
                </li>
            )
        });
    return (
        <Aux>
            <p>Order summary of your delicious burger!</p>
            <ul>
                {ingredientList}
            </ul>
            <h3>Final Price: ${props.price.toFixed(2)}</h3>
            <p>Proceed to checkout?</p>
            <Button clicked={props.continuePurchase} buttonType='Success'>CONTINUE</Button>
            <Button clicked={props.cancelPurchase} buttonType='Danger'>CANCEL</Button>
        </Aux>
    )
};

export default orderSummary;