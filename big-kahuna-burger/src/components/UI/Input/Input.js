import React from 'react';
import classes from './Input.css'

const input = (props) => {
    let inputElement = null;
    let inputClasses = [classes.InputElement];
    if (props.invalid && props.touched) {
        inputClasses.push(classes.Invalid);
    }
    switch (props.elementType) {
        case 'textarea':
            inputElement = <textarea onChange={props.changed}
                                     className={inputClasses.join(' ')}
                                     {...props.elementConfig} value={props.value}/>;
            break;
        case 'select':
            inputElement = <select className={inputClasses.join(' ')}
                                   {...props.elementConfig}
                                   value={props.value}
                                   onChange={props.changed}>
                {props.elementConfig.options.map(option => {
                    return <option value={option.value} key={option.value}>{option.displayValue}</option>
                })}
            </select>;
            break;
        default:
            inputElement = <input className={inputClasses.join(' ')}
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