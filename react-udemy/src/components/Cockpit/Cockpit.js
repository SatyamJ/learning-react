import React, {useEffect,  memo} from 'react';
import classes from "../../components/Cockpit/Cockpit.css";

const cockpit = (props) => {

    useEffect(() => {
        console.log('Cockpit.js | 1st useEffect');
        setTimeout(() => {
            alert('Data saved to cloud');
        }, 1000);
    }, []);


    useEffect(() => {
        console.log('Cockpit.js | 2nd useEffect');
        return (() => {
            console.log('Cockpit.js | 2nd useEffect | cleanup');
        })
    }, [props.personsLength]);


    useEffect(() => {
        console.log('Cockpit.js | 3rd useEffect');
        return (() => {
            console.log('Cockpit.js | 3rd useEffect | cleanup');
        })
    }, []);

    console.log('Cockpit.js | render');
    const styles = [];
    let buttonClass = '';
    if (props.personsLength <= 2) {
        styles.push(classes.red)
    }

    if (props.personsLength <= 1) {
        styles.push(classes.bold)
    }

    if (props.showPersons) {
        buttonClass = classes.Red
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
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

export default React.memo(cockpit);