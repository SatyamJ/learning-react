import React, { Component } from 'react';
import queryString from 'query-string';

class Course extends Component {
    state = {
        title: null,
        id: null
    };

    componentDidMount(): void {
        this.loadData();
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
        this.loadData();
    }

    loadData = () => {
        if (!this.state.id || (this.state.id !== this.props.match.params.id)) {
            this.setState({
                id: this.props.match.params.id,
                title: queryString.parse(this.props.location.search).title
            })
        }
    };

    render () {
        console.log(this.props);
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.state.id}</p>
            </div>
        );
    }
}

export default Course;