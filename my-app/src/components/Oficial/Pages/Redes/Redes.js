import React, {Component} from 'react';

import classes from './Redes.module.css';
import Auxiliar from '../../../hoc/Auxiliar/Auxilar';
import Menu from '../../Menus/Menu/Menu';

class Redes extends Component{
    render(){
        return (
            <Auxiliar>
                <Menu/>
                <div>
                    <h1>Redes</h1>
                </div>
            </Auxiliar>
        )
    }
}

export default Redes;