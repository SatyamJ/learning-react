import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
        form: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your street'
                },
                value: ''
            },
            city: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your city'
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your zip code'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your email'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'drop', displayValue: 'Home delivery'},
                        {value: 'pickup', displayValue: 'Pickup Order'}
                    ]
                },
                value: 'drop'
            },
            shippingMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'expedited', displayValue: 'Expedited'},
                        {value: 'standard', displayValue: 'Standard'}
                    ]
                },
                value: 'standard'
            }
        },
        loading: false
    };

    componentDidMount() {
        console.log('ContactData | componentDidMount: ', this.props);
    }

    orderHandler = () => {
        this.setState({
            loading: true
        });
        const orderFormData = {};
        for(const formElementKey in this.state.form) {
            orderFormData[formElementKey] = this.state.form[formElementKey].value;
        }
        const requestBody = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderFormData: orderFormData
        };
        axios.post('/orders.json', requestBody)
            .then(response => {
                // this.setState({
                //     loading: false
                // });
                this.props.history.push('/');
            })
            .catch(error => {
                /*this.setState({
                    loading: false
                });*/
            });
    };

    formElementValueChangeHandler = (event, formElementIdentifier) => {
        const form = {...this.state.form};
        form[formElementIdentifier].value = event.target.value;
        this.setState({
            form: form
        });
    };

    render() {
        let form = [];
        for (const formElementKey in this.state.form) {
            form.push(<Input key={formElementKey}
                             elementType={this.state.form[formElementKey].elementType}
                             elementConfig={this.state.form[formElementKey].elementConfig}
                             value={this.state.form[formElementKey].value}
                             changed={(event) => this.formElementValueChangeHandler(event, formElementKey)}/>);
        }
        form.push(<Button key="orderButton"
                          buttonType="Success"
                          clicked={this.orderHandler}> ORDER </Button>);
        if (this.state.loading) {
            form = <Spinner/>
        }
        return <div className={classes.ContactData}>{form}</div>;
    }
}

export default ContactData;