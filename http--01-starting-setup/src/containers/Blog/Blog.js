import React, {Component} from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from '../../axios'

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null
    };

    postClickHandler = (id) => {
        this.setState({
            selectedPostId: id
        })
    };

    componentDidMount() {
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

    render() {
        const posts = this.state.posts
            .map(post => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postClickHandler(post.id)}
                />
            });

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost postId={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost/>
                </section>
            </div>
        );
    }
}

export default Blog;