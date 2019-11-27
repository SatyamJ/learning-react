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
                value: '',
                validation: {
                    required: true
                },
                isValid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your street'
                },
                value: '',
                validation: {
                    required: true
                },
                isValid: false,
                touched: false
            },
            city: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your city'
                },
                value: '',
                validation: {
                    required: true
                },
                isValid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your zip code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                isValid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your email'
                },
                value: '',
                validation: {
                    required: true
                },
                isValid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'drop', displayValue: 'Home delivery'},
                        {value: 'pickup', displayValue: 'Pickup Order'}
                    ]
                },
                value: 'drop',
                validation: {
                },
                isValid: true,
                touched: false
            },
            shippingMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'expedited', displayValue: 'Expedited'},
                        {value: 'standard', displayValue: 'Standard'}
                    ]
                },
                value: 'standard',
                validation: {
                },
                isValid: true,
                touched: false
            },
        },
        isFormValid: false,
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
        for (const formElementKey in this.state.form) {
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
        form[formElementIdentifier].isValid = this.isValid(event.target.value, form[formElementIdentifier].validation);
        form[formElementIdentifier].touched = true;
        let isFormValid = true;
        for (const formElementIdentifier in form) {
            isFormValid = isFormValid && form[formElementIdentifier].isValid
        }
        this.setState({
            form: form,
            isFormValid: isFormValid
        });
    };

    isValid = (newValue, rules) => {
        let requirednessMet = true;
        let minLengthMet = true;
        let maxLengthMet = true;
        if (rules.required) {
            requirednessMet = newValue.trim() !== "";
        }

        if (rules.minLength) {
            minLengthMet = newValue.trim().length >= 5;
        }

        if (rules.maxLength) {
            maxLengthMet = newValue.trim().length <= 5;
        }
        return requirednessMet && minLengthMet && maxLengthMet;
    };

    render() {
        let form = [];
        for (const formElementKey in this.state.form) {
            form.push(<Input key={formElementKey}
                             elementType={this.state.form[formElementKey].elementType}
                             elementConfig={this.state.form[formElementKey].elementConfig}
                             value={this.state.form[formElementKey].value}
                             invalid={! this.state.form[formElementKey].isValid}
                             touched={this.state.form[formElementKey].touched}
                             changed={(event) => this.formElementValueChangeHandler(event, formElementKey)}/>);
        }
        form.push(<Button key="orderButton"
                          buttonType="Success"
                          disabled={!this.state.isFormValid}
                          clicked={this.orderHandler}> ORDER </Button>);
        if (this.state.loading) {
            form = <Spinner/>
        }
        return <div className={classes.ContactData}>{form}</div>;
    }
}

export default ContactData;