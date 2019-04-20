import React from 'react';
import Auxiliar from '../../hoc/Auxiliar.js';
import Button from '../../components/UI/Button/Button.js';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (
        <li>
        <span style={{textTransform: 'capitalize'}}>{igKey}</span>:
        {props.ingredients[igKey]} 
        </li>);
    });

    return (
        <Auxiliar>
            <h3>Your Order</h3>
            <p>A delicious burguer with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Auxiliar>
    )
}
export default orderSummary;