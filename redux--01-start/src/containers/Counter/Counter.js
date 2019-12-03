import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import {add, increment, decrement, sub, storeResult, deleteResult} from '../../store/actions';

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
        incrementCounter: () => dispatch(increment()),
        decrementCounter: () => dispatch(decrement()),
        addCounter: () => dispatch(add(5)),
        subtractCounter: () => dispatch(sub(5)),
        storeResult: (res) => dispatch(storeResult(res)),
        deleteResult: (id) => dispatch(deleteResult(id)),
    }
};

const mapStateToProps = state => {
    return {
        ctr: state.counterReducer.counter,
        storeResults: state.resultsReducer.results
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);