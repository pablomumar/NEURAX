import React, { Component } from 'react';
import Auxiliar from './components/hoc/Auxiliar/Auxilar';
// import PruebaContainer from './components/container/PruebaContainer/PruebaContainer'
import MainCont from './components/container/MainCont/MainCont';

class App extends Component {
  render() {
    return (
        <Auxiliar>
            {/*<PruebaContainer/>*/}
            <MainCont/>
        </Auxiliar>
    );
  }
}

export default App;
