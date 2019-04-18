import React from 'react';
import Auxiliar from '../../hoc/Auxiliar.js';
import classes from './Layout.module.css';

const layout = (props) => (
    <Auxiliar>
        <div> ToolBar, Side Drawer, Backdrop </div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxiliar>
);

export default layout;