import React, { Component } from 'react';
import './App.css';
import Auxiliar from './components/hoc/Auxiliar/Auxilar';
import PruebaContainer from './components/container/PruebaContainer/PruebaContainer'

class App extends Component {
  render() {
    return (
        <Auxiliar>
            <PruebaContainer/>
        </Auxiliar>
    );
  }
}

export default App;
