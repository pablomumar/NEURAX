import React, { Component } from 'react';
import Auxiliar from '../../hoc/Auxiliar/Auxilar';
import classes from './MainCont.module.css';

class MainCont extends Component {
    render() {
        return (
            <Auxiliar>
                <div className={[classes.mainFrame, classes.paddingLatNVert, classes.fondoBlack].join(' ')}>
                    <h1 style={{color: 'white'}}>MainCont</h1>
                </div>
            </Auxiliar>
        );
    }
}

export default MainCont;