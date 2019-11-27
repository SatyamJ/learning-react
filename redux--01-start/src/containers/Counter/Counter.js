import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionTypes from '../../store/actions';

class Counter extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <CounterOutput value={this.props.ctr}/>
                    <CounterControl label="Increment" clicked={this.props.incrementCounter}/>
                    <CounterControl label="Decrement" clicked={this.props.decrementCounter}/>
                    <CounterControl label="Add 5" clicked={this.props.addCounter}/>
                    <CounterControl label="Subtract 5" clicked={this.props.subtractCounter}/>
                </div>
                <button onClick={() => this.props.storeResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storeResults.map(storeResult => {
                        return (
                            <li key={storeResult.id}
                                style={{
                                    display: 'block',
                                    boxSizing: 'border-box',
                                    border: '1px 1px #ccc'
                                }}
                                onClick={() => this.props.deleteResult(storeResult.id)}>
                                {storeResult.value}
                            </li>
                        );
                    })}

                </ul>
            </Fragment>

        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        incrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        decrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        addCounter: () => dispatch({type: actionTypes.ADD, value: 5}),
        subtractCounter: () => dispatch({type: actionTypes.SUB, value: 5}),
        storeResult: (res) => dispatch({type: actionTypes.STORE_RESULT, result: res}),
        deleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, id: id}),
    }
};

const mapStateToProps = state => {
    return {
        ctr: state.counterReducer.counter,
        storeResults: state.resultsReducer.results
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);