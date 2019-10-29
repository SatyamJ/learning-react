import React, {Component, useState} from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

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
    state = {
        persons: [
            {id: 1, name: "Raju", age: 6},
            {id: 2, name: "Babu", age: 66},
            {id: 3, name: "Gotya", age: 24}
        ],
        showPersons: false,
        username: ""
    };

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

    nameChangedHandler = (event, personId) => {
        const personIndex = this.state.persons.findIndex(p => p.id === personId);
        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
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


    render() {
        let persons = null;
        if (this.state.showPersons) {
            persons = <Persons persons={this.state.persons}
                               clicked={this.deletePersonHandler}
                               changed={this.nameChangedHandler}/>;

        }
        return (
            <div className={classes.App}>
                <Cockpit
                    persons={this.state.persons}
                    clicked={this.togglePersons}
                    showPersons={this.state.showPersons}
                />
                {persons}
            </div>
        )
    }
}

export default App;

