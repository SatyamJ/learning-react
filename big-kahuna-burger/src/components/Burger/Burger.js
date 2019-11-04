import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.css'

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingredient => [...Array(props.ingredients[ingredient])]
            .map((_, i) => <BurgerIngredient key={ingredient+i} type={ingredient}/>))
        .reduce((previousValue, currentValue) => {
            return previousValue.concat(currentValue);
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start addding ingreditents!</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
};


export default burger;