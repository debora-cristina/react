import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout.js';
import BurguerBuilder from './containers/BurguerBuilder/BurguerBuilder'

class App extends Component {

  // state = {
  //   show: true
  // };

  // componentDidMount(){
  //   setTimeout(() => {
  //     this.setState({show:false});
  //   },5000);
  // }

  render() {
    return (
      <div >
      <Layout>
        {/* {this.state.show ?  <BurguerBuilder /> : null }           */}
        <BurguerBuilder />
      </Layout>
       
      </div>
    );
  }
}

export default App;
