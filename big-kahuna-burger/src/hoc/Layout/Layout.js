import React, {Component} from 'react';

import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.css'

class Layout extends Component {
    state = {
        sideDrawerOpen: false
    };

    sideDrawerOpenHandler = () => {
        this.setState({
            sideDrawerOpen: true
        });
    };

    sideDrawerCloseHandler = () => {
        this.setState({
            sideDrawerOpen: false
        })
    };

    sideDrawerToggleHandler = () => {
      this.setState((prevState) => {
          return {
              sideDrawerOpen: !prevState.sideDrawerOpen
          }
      })
    };

    render() {
        return (
            <Aux>
                <Toolbar
                    onSideDrawerToggle={this.sideDrawerToggleHandler}/>
                <SideDrawer
                    open={this.state.sideDrawerOpen}
                    onSideDrawerClose={this.sideDrawerCloseHandler}
                />
                <main className={classes.Content}>
                    {this.props.children}
                </main>

            </Aux>
        )
    }
}

export default Layout;
