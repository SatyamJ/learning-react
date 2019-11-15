import React, {Component} from 'react';
import {Route, NavLink, Switch} from 'react-router-dom'

import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import Posts from "./Posts/Posts";

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null
    };


    render() {


        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink exact to="/">Posts</NavLink></li>
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
                <Route path="/" exact component={Posts}/>
                <Switch>
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/:id" component={FullPost}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;