import React,{Component} from 'react';
import Order from '../../components/Order/Order.js';
import axios from '../../axios-orders.js';
import withErrorHandler from '../../hoc/Layout/withErrorHandler/withErrorHandler.js';    

class Orders extends Component{
    state = {
        orders: [],
        loading: true
    };

    componentDidMount(){
        const fetchedOrders = [];
        axios.get('/orders.json')       
        .then(res => {
            for(let key in res.data){
                fetchedOrders.push({
                    ...res.data[key]
                });
            }
            this.setState({loading:false, orders: fetchedOrders})
        }).catch( err => {
            this.setState({loading:false});
        });
    }
    render(){
        return(
            <div>
                {this.state.orders.map(order =>(
                    <Order key={order.id}
                           ingredients={order.ingredients}
                           price = {order.price}
                    />   
                ))}
            </div>
        );
    }

}

export default withErrorHandler(Orders,axios);