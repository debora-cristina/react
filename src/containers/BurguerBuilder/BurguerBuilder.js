import React, {Component} from 'react';
import Auxiliar from '../../hoc/Auxiliar.js';
import Burger from '../../components/Burger/Burger';   
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';

const INGREDIENT_PRICES ={
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurguerBuilder extends Component{

    state = {
        ingredients: {
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4,
        purchasable: false
    }

    updatePurchaseState(ingredients){

        const  sum = Object.keys(ingredients)
        .map( igKey => {
            return ingredients[igKey];
        })
        .reduce((sum,el) => {
            return sum+ el;
        }, 0);

        this.setState({purchasable: sum > 0});
    }

    addIngredientHandler = (type) => {

        console.log('adicionou');
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount+1;
        const updateIngredients ={
            ...this.state.ingredients
        };
        updateIngredients[type] = updateCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({totalPrice:newPrice, ingredients:updateIngredients});
        this.updatePurchaseState(updateIngredients);
    }

    removeIngredientHandler = (type) =>{

        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const updateCount = oldCount-1;
        const updateIngredients ={
            ...this.state.ingredients
        };
        updateIngredients[type] = updateCount;
        const priceRedux = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceRedux;

        this.setState({totalPrice:newPrice, ingredients:updateIngredients});
        this.updatePurchaseState(updateIngredients);
    }

    render(){

        const disabledInfo = {
            ...this.state.ingredients
        };

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return(
            <Auxiliar>
            <Modal></Modal>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls 
                ingredientAdded={this.addIngredientHandler} 
                ingredientRemoved={this.removeIngredientHandler}
                disabled={disabledInfo}
                purchasable = {this.state.purchasable}
                price = {this.state.totalPrice}
                ></BuildControls>
            </Auxiliar>
            
        );
    }
}

export default BurguerBuilder;  