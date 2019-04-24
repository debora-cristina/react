import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout.js';
import BurguerBuilder from './containers/BurguerBuilder/BurguerBuilder'

class App extends Component {
  render() {
    return (
      <div >
      <Layout>
        <BurguerBuilder>
          
        </BurguerBuilder>
      </Layout>
       
      </div>
    );
  }
}

export default App;
