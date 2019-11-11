import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import BurgerBuidler from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <BurgerBuidler/>
        </Layout>
      </div>
    );
  }
}

export default App;
