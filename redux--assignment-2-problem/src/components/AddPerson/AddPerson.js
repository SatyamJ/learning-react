import React, {Component} from 'react';

import './AddPerson.css';

class AddPerson extends Component {
    state = {
        name: '',
        age: ''
    };

    nameChangeHandler = (event) => {
        this.setState({
            name: event.target.value
        })
    };

    ageChangeHandler = (event) => {
        this.setState({
            age: event.target.value
        })
    };

    render() {
        return (
            <div className="AddPerson">
                <input placeholder="Name" value={this.state.name} onChange={this.nameChangeHandler}/>
                <input placeholder="Age" value={this.state.age} onChange={this.ageChangeHandler}/>
                <button onClick={() => this.props.personAdded({
                        id: new Date().getTime(),
                        name: this.state.name,
                        age: this.state.age
                    }
                )}>
                    Add Person
                </button>
            </div>
        );
    }
}

export default AddPerson;