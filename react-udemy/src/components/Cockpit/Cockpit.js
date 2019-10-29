import React from 'react';
import classes from "../../components/Cockpit/Cockpit.css";

const cockpit = (props) => {
    const styles = [];
    let buttonClass = '';
    if (props.persons.length <= 2) {
        styles.push(classes.red)
    }

    if (props.persons.length <= 1) {
        styles.push(classes.bold)
    }

    if (props.showPersons) {
        buttonClass = classes.Red
    }
    return (
        <div className={classes.Cockpit}>
            <h1>Hello World!</h1>
            <p className={styles.join(' ')}>This will dynmically takes classes</p>
            <div>
                <br/><br/>
                <button
                    className={buttonClass}
                    onClick={props.clicked}>
                    Toggle persons
                </button>
            </div>
        </div>
    );
};

export default cockpit;