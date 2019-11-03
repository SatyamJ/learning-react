import React, {Component, useEffect} from 'react';

import Proptypes from 'prop-types';

import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withWrappedComponent from '../../../hoc/withWrappedComponent';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElementRef.focus();
        this.inputElementRef.current.focus();
    }

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
                {/*<AuthContext.Consumer>
                    {(context) =>
                        context.isAuthenticated ? <p>i'm authenticated</p> : <p> Please login</p>
                    }
                </AuthContext.Consumer>*/}
                {this.context.isAuthenticated ? <p>i'm authenticated</p> : <p> Please login</p>}
                <p onClick={this.props.click}>
                    my name is {this.props.name} and age is {this.props.age}
                </p>
                <p>{this.props.children}</p>
                <input
                    // ref={(inputElementRef) => {this.inputElementRef = inputElementRef}}
                    ref={this.inputElementRef}
                    onChange={this.props.changed}
                    value={this.props.name}
                />
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