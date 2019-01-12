import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import classes from './Menu.module.css';
import Auxiliar from '../../../hoc/Auxiliar/Auxilar';
import Links from './Links/Links';

import logo from '../../../../assets/logos/cuadraoSimple.png'

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
                        <div className={classes.item}>
                            <Link to='/'><img src={logo} alt=""/></Link>
                        </div>
                        <div className={classes.backgLogo}> </div>
                    </div>

                    <div>
                        <Links clase={classes.item} nombreComponent={'/colecciones'}>Colecciones</Links>
                        <Links clase={classes.item} nombreComponent={'/none'}>Shop</Links>
                    </div>
                </div>
            </Auxiliar>
        )
    }
}

export default Menu;