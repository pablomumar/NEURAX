import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import classes from './Menu.module.css';
import Auxiliar from '../../../hoc/Auxiliar/Auxilar';
import Links from './Links/Links';

class Menu extends Component{
    render(){
        return (
            <Auxiliar>
                <div className={classes.menuPrinc}>
                    <div>
                        <Links clase={classes.item} nombreComponent={'/bio'}>Bio</Links>
                        <Links clase={classes.item} nombreComponent={'/redes'}>Redes</Links>
                    </div>

                    <div className={classes.contLogoMenu}>
                        <Links clase={classes.item} nombreComponent={'/'}>ph</Links>
                    </div>

                    <div>
                        <Links clase={classes.item} nombreComponent={'/colecciones'}>Colecciones</Links>
                        <Links clase={classes.item} nombreComponent={'/bio'}>Shop</Links>
                    </div>
                </div>
            </Auxiliar>
        )
    }
}

export default Menu;