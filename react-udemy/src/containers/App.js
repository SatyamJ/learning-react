import React, {Component, useState} from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import WithClass from '../hoc/WithClass'
import Aux from '../hoc/Aux'
import withWrappedComponent from '../hoc/withWrappedComponent';
import AuthContext from '../context/auth-context';

/*
const app = (props) => {
    const [personsState, setPersonsState] = useState({
        persons: [
            { name: "Raju", age: 6},
            { name: "Babu", age: 66},
            { name: "Gotya", age: 24}
        ]
    });

    const [otherState, setOtherState] = useState("this is other state");

    console.log(personsState, otherState);

    const switchNameHandler = () => {
        // console.log("Switch name clicked");
        // console.log(this.state);
        setPersonsState( {
            persons: [
                { name: "Rajesh", age: 6},
                { name: "Babu", age: 66},
                { name: "Gotya", age: 24}
            ]
        });
    };

    return (
        <div className="App">
            <h1>Hello world!</h1>
            <button onClick={switchNameHandler}>Switch name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>Yeh babu rao ka style hai!</Person>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
        </div>
    );
};

export  default app;*/


class App extends Component {

    constructor(props) {
        super(props);
        console.log('App.js | constructor');
    }

    state = {
        persons: [
            {id: 1, name: "Raju", age: 6},
            {id: 2, name: "Babu", age: 66},
            {id: 3, name: "Gotya", age: 24}
        ],
        showPersons: false,
        username: "",
        showCockpit: true,
        nameChangeCounter: 0,
        isAuthenticated: false
    };

    static getDerivedStateFromProps(props, state) {
        console.log('App.js | getDerivedStateFromProps');
        return state;
    }

    /*componentWillMount() {
        console.log('App.js | componentWillMount');
    }*/

    componentDidMount() {
        console.log('App.js | componentDidMount');
    }

    switchNameHandler = (newName) => {
        // console.log("Switch name clicked");
        // console.log(this.state);
        this.setState({
            persons: [
                {name: newName, age: 6},
                {name: "Babu", age: 66},
                {name: "Gotya", age: 24}
            ]
        });
    };

    loginHandler = () => {
      this.setState({
          isAuthenticated: true
      })
    };

    nameChangedHandler = (event, personId) => {
        const personIndex = this.state.persons.findIndex(p => p.id === personId);
        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState((prevState, props) => {
            return {
                persons: persons,
                nameChangeCounter: prevState.nameChangeCounter + 1
            }
        });
    };

    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons.slice();
        persons.splice(personIndex, 1);
        this.setState({
            persons: persons
        });
    };

    togglePersons = () => {
        this.setState({
            showPersons: !this.state.showPersons
        })
    };

    toggleCockpit = () => {
        this.setState({
            showCockpit: !this.state.showCockpit
        })
    };


    render() {
        console.log('App.js | render');
        let persons = null;
        if (this.state.showPersons) {
            persons = <Persons persons={this.state.persons}
                               clicked={this.deletePersonHandler}
                               changed={this.nameChangedHandler}/>;

        }

        let cockpit = null;
        if (this.state.showCockpit) {
            cockpit = <div>
                <Cockpit
                    title={this.props.appTitle}
                    personsLength={this.state.persons.length}
                    clicked={this.togglePersons}
                    showPersons={this.state.showPersons}/>
            </div>
        }
        return (
            /*
            <div className={classes.App}>
                <button onClick={this.toggleCockpit}>Toggle Cockpit</button>
                {cockpit}
                {persons}
            </div>
            */

            /*
            <WithClass classes={classes.App}>
                <button onClick={this.toggleCockpit}>Toggle Cockpit</button>
                {cockpit}
                {persons}
            </WithClass>
            */
            <AuthContext.Provider
                value={
                    {
                        isAuthenticated: this.state.isAuthenticated,
                        login: this.loginHandler
                    }
                }>
                <Aux>
                    <button onClick={this.toggleCockpit}>Toggle Cockpit</button>
                    {cockpit}
                    {persons}
                </Aux>
            </AuthContext.Provider>
        )
    }
}

// export default App;
export default withWrappedComponent(App, classes.App);
