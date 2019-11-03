import React, {PureComponent} from 'react'
import Person from "../../components/Persons/Person/Person";

class Persons extends PureComponent {

    /*shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('nextContext', nextContext);
        console.log('Persons.js | shouldComponentUpdate');
        return (nextProps.persons !== this.props.persons ||
            nextProps.changed !== this.props.changed ||
                nextProps.clicked !== this.props.clicked);
    }*/

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Persons.js | getSnapshotBeforeUpdate');
        return {message: 'snapshot'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(snapshot);
        console.log('Persons.js | componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('Persons.js | componentWillUnmount');
    }

    render() {
        console.log('Persons.js | render');
        return this.props.persons.map((person, personIndex) => {
            return (
                <Person
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    changed={(event) => this.props.changed(event, person.id)}
                    click={() => this.props.clicked(personIndex)}
                />
            )
        });
    }
}

export default Persons;