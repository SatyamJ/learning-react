import React, {Component} from 'react';
import Aux from '../Aux/Aux'
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        };

        constructor(props) {
            super(props);
            axios.interceptors.request.use(req => {
                this.setState({
                    error: null
                });
                return req;
            });

            axios.interceptors.response.use(res => res, error => {
                this.setState({
                    error: error
                });
            })
        }

        componentDidMount() {

        }

        errorConfirmedHandler = () => {
            this.setState({
                error: null
            })
        };

        render() {
            return (
                <Aux>
                    <Modal cancelPurchase={this.errorConfirmedHandler} show={this.state.error}>
                        {this.state.error? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>

            )
        }
    }
};

export default withErrorHandler;