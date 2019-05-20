import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button.js';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders.js';
import Spinner from '../../../components/UI/Spinner/Spinner.js';
import Input from '../../../components/UI/Input/Input';
import {connect} from 'react-redux';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5,
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: '',
                validation: {},
                valid: true
            }
        },
        formIsValid: false,
        loading: false
    };

    orderHandler = (event) => {
        console.log("order");
        this.setState({ loading: true });
        event.preventDefault();
        let formData = {};

        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }

        console.log(formData);

        const order = {
            ingredients: this.props.ings        ,
            price: this.props.price,
            orderData: formData
        }

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false, purchasing: false });
                this.props.history.push('/');
            }).catch(error => {
                this.setState({ loading: false, purchasing: false });

            });

    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updateOrderForm = {
            ...this.state.orderForm
        };

        const updateFormElement = {
            ...updateOrderForm[inputIdentifier]
        };

        updateFormElement.value = event.target.value;
        updateFormElement.valid = this.checkValidity(updateFormElement.value,updateFormElement.validation);
        updateFormElement.touched = true;
        updateOrderForm[inputIdentifier] = updateFormElement;
        console.log(updateFormElement);
        console.log(updateOrderForm);
        let formIsValid = true;

        for(let inputIdentifier in updateOrderForm){
            formIsValid =  updateOrderForm[inputIdentifier].valid && formIsValid;
           
        }

        

        this.setState({orderForm: updateOrderForm, formIsValid: formIsValid  });

        

    }

    checkValidity = (value,rules) => {
        
        let isValid = true;

        if(!rules){
            return true;
        }
        
        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.minLength){
            isValid = value.length >= rules.minLength  && isValid
        }

        if(rules.maxLength){
            isValid = value.length <= rules.maxLength  && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    render() {

        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
            </form>
        );
        if ( this.state.loading ) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        ings: state.ingredients,
        price:state.totalPrice
    }
}
export default connect(mapStateToProps)(ContactData);