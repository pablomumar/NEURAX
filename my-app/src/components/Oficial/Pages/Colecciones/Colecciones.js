import React, {Component} from 'react';

import classes from './Colecciones.module.css';
import Auxiliar from '../../../hoc/Auxiliar/Auxilar';
import Menu from '../../Menus/Menu/Menu';

import logo from '../../../../assets/logos/cuadraoSimple.png';

class Colecciones extends Component{
    render(){
        return (
            <Auxiliar>
                <Menu/>
                <div className='container'>
                    <div className={[classes.content].join(' ')}>
                        <div className={[classes.titleCol].join(' ')}>
                            <p>collections</p>
                        </div>
                        <div className={[classes.coleccion1, classes.coleccion].join(' ')}>
                            <div>
                                <img src={logo} alt=""/>
                                <div>
                                    <p>On the road</p>
                                </div>
                            </div>
                        </div>
                        <div className={[classes.coleccion].join(' ')}>
                            <div className={classes.activo}>
                                <div className={[classes.desplazao, 'row'].join(' ')}>
                                    <div className={[classes.colInd, 'col-md-2'].join(' ')}>ph</div>
                                    <div className={[classes.colInd, 'col-md-2'].join(' ')}>ph</div>
                                    <div className={[classes.colInd, 'col-md-2'].join(' ')}>ph</div>
                                    <div className={[classes.colInd, 'col-md-2'].join(' ')}>ph</div>
                                </div>
                                <img src={logo} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </Auxiliar>
        )
    }
}

export default Colecciones;