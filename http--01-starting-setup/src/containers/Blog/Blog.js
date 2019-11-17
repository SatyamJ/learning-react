import React, {Component} from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'

import NewPost from './NewPost/NewPost';
import './Blog.css';
import Posts from "./Posts/Posts";

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        isAuthenticated: true
    };


    render() {


        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink exact to="/posts">Posts</NavLink></li>
                            <li><NavLink
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}
                                to={{
                                    pathname: "/new-post",
                                    hash: '#submit',
                                    search: "?as=as"
                                }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.isAuthenticated ? <Route path="/new-post" component={NewPost}/> : null}
                    <Route path="/posts" component={Posts}/>
                    {/*<Route render={() => <h2>Not Found</h2>}/>*/}
                    <Redirect from="/" to="/posts"/>
                </Switch>
            </div>
        );
    }
}

export default Blog;