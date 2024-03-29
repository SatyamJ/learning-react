import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css'

const navigationItems = (props) => {
    return(
        <ul className={classes.NavigationItems}>
            <NavigationItem exact link="/">
                Burger Builder
            </NavigationItem>
            <NavigationItem link="/orders">
                Orders
            </NavigationItem>
        </ul>
    );
};

export default navigationItems;