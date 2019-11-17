import React, {Component} from 'react';
import {Route} from "react-router-dom";

import './Courses.css';
import Course from "../Course/Course";

class Courses extends Component {
    state = {
        courses: [
            {id: 1, title: 'Angular - The Complete Guide'},
            {id: 2, title: 'Vue - The Complete Guide'},
            {id: 3, title: 'PWA - The Complete Guide'}
        ]
    };

    courseClickHandler = (id, title) => {
        this.props.history.push(this.props.match.url + '/' + id + '?title=' + title);
    };

    render() {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map(course => {
                            return <article onClick={() => this.courseClickHandler(course.id, course.title)}
                                            className="Course"
                                            key={course.id}>{course.title}
                            </article>;
                        })
                    }
                </section>
            </div>
        );
    }
}

export default Courses;