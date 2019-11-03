import React, {Component, useEffect} from 'react';

import Proptypes from 'prop-types';

import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withWrappedComponent from '../../../hoc/withWrappedComponent';

class Person extends Component {
    render() {
        console.log('Person.js | render');

        /*
        const rnd = Math.random();
        if (rnd > 0.7) {
            throw new Error ('something went wrong :(');
        }
        */

        return (
            /*<div className={classes.Person}>
                <p onClick={this.props.click}>
                    my name is {this.props.name} and age is {this.props.age}
                </p>
                <p>{this.props.children}</p>
                <input onChange={this.props.changed} value={this.props.name}/>
            </div>*/

            /*[
                <p key="i1" onClick={this.props.click}>
                    my name is {this.props.name} and age is {this.props.age}
                </p>,
                <p key="i2">{this.props.children}</p>,
                <input key="i3" onChange={this.props.changed} value={this.props.name}/>
            ]*/
            /*<Aux>
                <p onClick={this.props.click}>
                    my name is {this.props.name} and age is {this.props.age}
                </p>
                <p>{this.props.children}</p>
                <input onChange={this.props.changed} value={this.props.name}/>
            </Aux>*/
            <React.Fragment>
                <p onClick={this.props.click}>
                    my name is {this.props.name} and age is {this.props.age}
                </p>
                <p>{this.props.children}</p>
                <input onChange={this.props.changed} value={this.props.name}/>
            </React.Fragment>
        );
    }
}

Person.prototypes = {
    click: Proptypes.func,
    name: Proptypes.string,
    age: Proptypes.number,
    changed: Proptypes.func
};

// export default Person;
export default withWrappedComponent(Person, classes.Person);