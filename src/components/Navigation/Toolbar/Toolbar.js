import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../../components/Logo/Logo.js';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems.js';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle.js';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <div className={classes.Logo}>
                <Logo height="80%" />
            </div>
            <nav className={classes.DesktopOnly}><NavigationItems/></nav>
    </header>
);

export default toolbar;