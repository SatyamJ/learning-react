import React from 'react';
import classes from './Input.css'

const input = (props) => {
    let inputElement = null;
    switch (props.elementType) {
        case 'textarea':
            inputElement = <textarea onChange={props.changed} className={classes.InputElement} {...props.elementConfig} value={props.value}/>;
            break;
        case 'select':
            inputElement = <select className={classes.InputElement}
                                   {...props.elementConfig}
                                   value={props.value}
                                   onChange={props.changed}>
                {props.elementConfig.options.map(option => {
                    return <option value={option.value} key={option.value}>{option.displayValue}</option>
                })}
            </select>;
            break;
        default:
            inputElement = <input className={classes.InputElement}
                                  {...props.elementConfig}
                                  value={props.value}
                                  onChange={props.changed}/>;
            break;
    }
    return (
        <div className={classes.Input}>
            <label>{props.label}</label>
            {inputElement}
        </div>
    );

};

export default input;