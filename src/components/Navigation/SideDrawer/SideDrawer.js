import React from 'react';
import Logo from '../../Logo/Logo.js';
import NavigationItems from '../NavigationItems/NavigationItems.js';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop.js';
import Auxiliar from '../../../hoc/Auxiliar/Auxiliar.js';

const sideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Auxiliar>
            <Backdrop 
            show = {props.open}
            clicked = {props.closed}></Backdrop>
            <div className={attachedClasses.join(' ')}>
                
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Auxiliar>
    );
};

export default sideDrawer;