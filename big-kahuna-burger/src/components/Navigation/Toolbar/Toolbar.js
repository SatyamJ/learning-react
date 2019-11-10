import React from 'react';
import classes from './Toolbar.css';

import Logo from '../../../components/Logo/Logo';
import NagivationItems from '../../Navigation/NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';


const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={props.onSideDrawerToggle}/>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav className={classes.DeskstopOnly}>
                <NagivationItems/>
            </nav>
        </header>
    )
};

export default toolbar;