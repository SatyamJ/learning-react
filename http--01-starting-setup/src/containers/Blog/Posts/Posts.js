import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from '../../../axios'
import Post from "../../../components/Post/Post";
import './Posts.css'

class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null
    };

    componentDidMount() {
        console.log(this.props);
        axios.get('/posts')
            .then(response => {
                const posts = response.data
                    .splice(0, 4)
                    .map(post => {
                            return {
                                ...post,
                                author: 'author'
                            }
                        }
                    );
                this.setState({
                    posts: posts
                })
            })
            .catch(error => {
                console.log(error);
            });
    };

    postClickHandler = (id) => {
        /*this.setState({
            selectedPostId: id
        });*/
        this.props.history.push({
            pathname: '/' + id
        });
        // this.props.history.push('/' + id);
    };


    render() {
        const posts = this.state.posts
            .map(post => {
                return (
                    /*<Link to={"/" + post.id}
                          key={post.id}>
                        <Post
                            title={post.title}
                            author={post.author}
                            clicked={() => this.postClickHandler(post.id)}
                        />
                    </Link>*/
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postClickHandler(post.id)}
                    />
                )
            });

        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;