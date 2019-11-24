import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: 'Test user',
        address: {
            street: `1201 3rd Ave`,
            city: 'San Diego',
            zipCode: '47921'
        },
        email: 'test@test.com',
        loading: false
    };

    componentDidMount() {
        console.log('ContactData | componentDidMount: ', this.props);
    }

    orderHandler = () => {
        this.setState({
            loading: true
        });

        const requestBody = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            deliveryMethod: 'drop',
            shippingMethod: 'expedited',
            customer: {
                name: this.state.name,
                address: this.state.address,
                email: this.state.email
            }
        };
        axios.post('/orders.json', requestBody)
            .then(response => {
                // this.setState({
                //     loading: false
                // });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({
                    loading: false
                });
            });
    };

    render() {
        let form = (<form>
            <input type="text" placeholder="Enter your name"/>
            <input type="email" placeholder="Enter your email address"/>
            <input type="text" placeholder="Enter your street"/>
            <input type="text" placeholder="Enter your city"/>
            <input type="text" placeholder="Enter your zipcode"/>
            <Button buttonType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>);

        if (this.state.loading) {
            form = <Spinner/>
        }
        return (
            <div className={classes.ContactData}>
                {form}
            </div>
        );
    }
}

export default ContactData;