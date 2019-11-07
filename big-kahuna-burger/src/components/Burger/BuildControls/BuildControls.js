import React from 'react';

import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const buildControls = (props) => {
    const controls = [
        {label: 'Salad', type: 'salad'},
        {label: 'Meat', type: 'meat'},
        {label: 'Bacon', type: 'bacon'},
        {label: 'Cheese', type: 'cheese'}
    ];
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => {
                return <BuildControl key={ctrl.label}
                                     label={ctrl.label}
                                     add={() => props.ingredientAdd(ctrl.type)}
                                     remove={() => props.ingredientRemove(ctrl.type)}
                                     disable={props.disableInfo[ctrl.type]}
                />
            })}
            <button className={classes.OrderButton}
                    disabled={!props.purchasable}
                    onClick={props.purchasing}
            >
                ORDER NOW
            </button>
        </div>
    )
};

export default buildControls;
