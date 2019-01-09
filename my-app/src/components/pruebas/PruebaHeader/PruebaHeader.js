import React, { Component } from 'react';
// import './PruebaHeader.css';
import classes from './PruebaHeader.module.css';
import Auxiliar from '../../hoc/Auxiliar/Auxilar';
import LogoCuadrado from '../../../assets/logos/cuadraoSimple.png';
// import PruebaHeaderImg from '../../../assets/pruebaheader.png';

class PruebaHeader extends Component {

    render() {
        return (
            <Auxiliar>
                <div className={classes.pruebaheader}>
                    <div className={classes.headerIn}>
                        <div>
                            <p>Link 1</p>
                        </div>
                        <div>
                            <p>Link 2</p>
                        </div>
                    </div>
                    <div className={classes.mancha}>
                        <img src={LogoCuadrado} alt="" className={classes.anim}/>
                    </div>
                    <div className={classes.headerIn}>
                        <div>
                            <p>Link 3</p>
                        </div>
                        <div>
                            <p>Link 4</p>
                        </div>
                    </div>
                </div>
            </Auxiliar>
        );
    }
}

export default PruebaHeader;