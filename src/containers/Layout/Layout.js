import React, {Component} from 'react';
import Auxiliar from '../../hoc/Auxiliar/Auxiliar.js';
import classes from './Layout.module.css';
import ToolBar from '../../components/Navigation/Toolbar/Toolbar.js';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer.js';    

class Layout extends Component{
    state ={
        showSideDrawer: true 
    }

    sideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () =>{
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }
    
    render (){
        return (
            <Auxiliar>
                <ToolBar drawerToggleClicked={this.sideDrawerToggleHandler}></ToolBar>
                <SideDrawer 
                    open= {this.state.showSideDrawer}
                    closed = {this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliar>
        )
    }
    

}
export default Layout;