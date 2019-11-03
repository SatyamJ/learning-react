import React, {useEffect, memo, useRef} from 'react';
import classes from '../../components/Cockpit/Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

    const toggleButtonRef = useRef(null);

    useEffect(() => {
        console.log('Cockpit.js | 1st useEffect');
        toggleButtonRef.current.click();
        /*setTimeout(() => {
            alert('Data saved to cloud');
        }, 1000);*/
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
                    ref={toggleButtonRef}
                    className={buttonClass}
                    onClick={props.clicked}>
                    Toggle persons
                </button>
                <AuthContext.Consumer>
                    {(context) =>
                        <button onClick={context.login}>
                            Login
                        </button>
                    }
                </AuthContext.Consumer>

            </div>
        </div>
    );
};

export default React.memo(cockpit);