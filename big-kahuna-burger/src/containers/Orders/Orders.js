import React, {Component} from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';

class Orders extends Component {
    state = {
        orders: [],
        loading: false
    };

    componentDidMount() {
        axios.get('/orders.json')
            .then(response => {
                console.log(response.data);
                const fetchOrders = [];
                for (const key in response.data) {
                    fetchOrders.push(
                        {
                            ...response.data[key],
                            id: key
                        }
                    )
                }
                this.setState({
                    orders: fetchOrders,
                    loading: false
                })
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    loading: false
                })
            })
    }

    render() {
        const orders = this.state.orders.map(order => {
            return <Order price={order.price}
                          ingredients={order.ingredients}
                          key={order.id}
            />
        });
        return (
            <div>
                {orders}
            </div>
        )
    }
}

export default Orders;