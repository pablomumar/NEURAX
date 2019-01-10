import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Auxiliar from './components/hoc/Auxiliar/Auxilar';
// import PruebaContainer from './components/container/PruebaContainer/PruebaContainer'
import MainCont from './components/container/MainCont/MainCont';
import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Auxiliar>
                {/*<PruebaContainer/>*/}
                <MainCont/>
            </Auxiliar>
        </BrowserRouter>
    );
  }
}

export default App;
