import React, {Component} from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

    state = {
        post: null
    };


    componentDidMount() {
        if (this.props.match.params.id) {
            if (!this.state.post || (this.state.post && this.state.post.id !== this.props.postId)) {
                axios
                    .get('/posts/' + this.props.match.params.id)
                    .then(response => {
                        this.setState({
                            post: response.data
                        })
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        }

    }

    postDeleteHandler = () => {
        axios.delete('/posts/' + this.props.postId)
            .then(resposne => {
                console.log(resposne)
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.postId) {
            post = <p style={{textAlign: 'center'}}>Fetching post...</p>;
        }
        if (this.state.post) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.postDeleteHandler}>Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;