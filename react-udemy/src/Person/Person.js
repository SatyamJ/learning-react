import React from 'react';
import Radium from 'radium'
import './Person.css';

const person = (props) => {
    const style = {
      '@media(min-width: 500px)': {
          width: '450px'
      }
    };
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>
                my name is {props.name} and age is {props.age}
            </p>
            <p>{props.children}</p>
            <input onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default Radium(person);