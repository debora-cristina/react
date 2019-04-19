import React from 'react';
import Auxiliar from '../../hoc/Auxiliar.js'

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
            <p>Continue to checkout?</p>
        </Auxiliar>
    )
}
export default orderSummary;