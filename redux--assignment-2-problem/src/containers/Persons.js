import React, {Component} from 'react';
import {connect} from 'react-redux'

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions'

class Persons extends Component {
    state = {
        persons: []
    };

    getRandomPerson = () => {
        return {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor(Math.random() * 40)
        };
    };

    personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor(Math.random() * 40)
        };
        this.setState((prevState) => {
            return {persons: prevState.persons.concat(newPerson)}
        });
    };

    personDeletedHandler = (personId) => {
        this.setState((prevState) => {
            return {persons: prevState.persons.filter(person => person.id !== personId)}
        });
    };

    render() {
        return (
            <div>
                <AddPerson personAdded={(person) => this.props.addPerson(person)}/>
                {this.props.prsns.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.deletePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        prsns: state.personsReducer.persons
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addPerson: (person) => dispatch({type: actionTypes.ADD_PERSON, person: person}),
        deletePerson: (id) => dispatch({type: actionTypes.DELETE_PERSON, id: id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);