import React from 'react'
import classes from './Order.css';

const order = (props) => {
    const ingredients = [];
    for (const key in props.ingredients) {
        ingredients.push(
            {
                ingredientName: key,
                amount: props.ingredients[key]
            }
        )
    }
    const ingredientsOutput = ingredients.map(ig => {
        return (
            <span style={{
                textTransform: 'Capitalize',
                display: 'inline-block',
                margin: '0 8px',
                padding: '5px',
                border: '1px solid #ccc'
            }}>
                {ig.ingredientName} ({ig.amount})
            </span>
        )
    });
    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientsOutput}</p>
            <p>Price: <strong>USD {props.price}</strong></p>
        </div>
    )
};

export default order;