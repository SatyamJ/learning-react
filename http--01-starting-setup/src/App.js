import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';

import Blog from './containers/Blog/Blog';

class App extends Component {
    render() {
        return (
            /*
            when serving app from a sub-directory in server basename
            with hold the path to directory where app is hosted
            <BrowserRouter basename="/my-app">
            */
            <BrowserRouter>
                <div className="App">
                    <Blog/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
