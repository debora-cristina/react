import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../../components/Logo/Logo.js'

const toolbar = () => (
    <header className={classes.Toolbar}>
            <div>Menu</div>
            <Logo></Logo>
            <nav>...</nav>
    </header>
);

export default toolbar;