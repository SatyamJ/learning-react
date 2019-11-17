import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";

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
                            return (
                                <Link key={course.id}
                                      to={{
                                          pathname: '/courses/' + course.id,
                                          search: '?title=' + course.title
                                      }}>
                                    {/*<article onClick={() => this.courseClickHandler(course.id, course.title)}*/}
                                    {/*         className="Course"*/}
                                    {/*         key={course.id}>{course.title}*/}
                                    {/*</article>;            */}
                                    <article className="Course">{course.title}</article>
                                </Link>
                            )

                        })
                    }
                </section>
                <Route exact path="/courses/:id" component={Course}/>
            </div>
        );
    }
}

export default Courses;