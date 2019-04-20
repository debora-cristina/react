import React from 'react';
import Auxiliar from '../../hoc/Auxiliar.js';
import classes from './Layout.module.css';
import ToolBar from '../Navigation/Toolbar/Toolbar.js';

const layout = (props) => (
    <Auxiliar>
        <ToolBar></ToolBar>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxiliar>
);

export default layout;