import React from 'react';
import classes from './Modal.module.css';
import Auxiliar from '../../../hoc/Auxiliar.js';
import Backdrop from '../Backdrop/Backdrop.js';

const modal = (props) => (
    <Auxiliar>
    <Backdrop show= {props.show} clicked={props.modalClosed} ></Backdrop>
    <div 
    className={classes.Modal}
    style={{transform:props.show ?  'translateY(0)': 'translateY(-100vh)',
    opacity: props.show ? '1': '0'}}>
    {props.children}
    
    </div>
    </Auxiliar>
);

export default modal;