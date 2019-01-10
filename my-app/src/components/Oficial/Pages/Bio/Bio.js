import React, {Component} from 'react';

import classes from './Bio.module.css';
import Auxiliar from '../../../hoc/Auxiliar/Auxilar';
import Menu from '../../Menus/Menu/Menu';

class Bio extends Component{
    render(){
        return (
            <Auxiliar>
                <Menu/>
                <div>
                    <h1>Bio</h1>
                </div>
            </Auxiliar>
        )
    }
}

export default Bio;