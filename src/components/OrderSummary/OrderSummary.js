import React, {Component} from 'react';
import Auxiliar from '../../hoc/Auxiliar/Auxiliar.js';
import Button from '../../components/UI/Button/Button.js';

class OrderSummary extends Component{

    componentWillUpdate(){
        console.log('[OrderSummary] WillUpdate');
    }
    
    
    render(){

        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>:{this.   props.ingredients[igKey]} 
            </li>);
        });
    
        return (  
        <Auxiliar>
            <h3>Your Order</h3>
            <p>A delicious burguer with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </Auxiliar>);
    }
}

export default OrderSummary;