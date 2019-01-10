import React, {Component} from 'react';

import classes from './Colecciones.module.css';
import Auxiliar from '../../../hoc/Auxiliar/Auxilar';
import Menu from '../../Menus/Menu/Menu';

class Colecciones extends Component{
    render(){
        return (
            <Auxiliar>
                <Menu/>
                <div>
                    <h1>Colecciones</h1>
                </div>
            </Auxiliar>
        )
    }
}

export default Colecciones;