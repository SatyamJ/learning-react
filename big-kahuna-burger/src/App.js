import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurgerBuidler from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Layout>
                    <Switch>
                        <Route path="/checkout" component={Checkout}/>
                        <Route path="/orders" component={Orders}/>
                        <Route component={BurgerBuidler}/>
                    </Switch>
                </Layout>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
