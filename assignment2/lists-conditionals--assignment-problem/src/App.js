import React, {Component} from 'react';
import './App.css';

import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
    state = {
        username: ""
    };


    usernameChangeHandler = (event) => {
        this.setState({
            username: event.target.value
        });
    };

    characterClickHandler = (characterIndex) => {
        const characters = this.state.username.split("");
        characters.splice(characterIndex, 1);
        const newUsername = characters.join("");
        this.setState({
            username: newUsername
        })
    };

    render() {
        let characters = null;
        if (this.state.username.length > 0) {
            characters = this.state.username.split("").map((character, characterIndex) => {
                return (
                    <Char
                        letter={character}
                        key={characterIndex}
                        click={() => this.characterClickHandler(characterIndex)}
                    />
                );
            });
        }

        return (
            <div className="App">
                <ol>
                    <li>Create an input field (in App component) with a change listener which outputs the length of the
                        entered text below it (e.g. in a paragraph).
                    </li>
                    <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
                    <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending
                        on the text length (e.g. take 5 as a minimum length)
                    </li>
                    <li>Create another component (=> CharComponent) and style it as an inline box (=> display:
                        inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).
                    </li>
                    <li>Render a list of CharComponents where each CharComponent receives a different letter of the
                        entered text (in the initial input field) as a prop.
                    </li>
                    <li>When you click a CharComponent, it should be removed from the entered text.</li>
                </ol>
                <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

                <br/>
                <hr/>
                <br/>

                <div>
                    <input onChange={this.usernameChangeHandler} value={this.state.username}/>
                    <label>{this.state.username.length}</label>
                    <Validation stringLength={this.state.username.length}/>
                </div>
                {characters}
            </div>
        );
    }
}

export default App;
