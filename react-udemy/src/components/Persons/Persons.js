import React from 'react'
import Person from "../../components/Persons/Person/Person";

const persons = (props) => (
    props.persons.map((person, personIndex) => {
        return (
            <Person
                key={person.id}
                name={person.name}
                age={person.age}
                changed={(event) => props.changed(event, person.id)}
                click={() => props.clicked(personIndex)}
            />
        )
    })
);


export default persons;