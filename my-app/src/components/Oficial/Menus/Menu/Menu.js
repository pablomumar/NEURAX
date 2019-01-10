import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import classes from './Menu.module.css';
import Auxiliar from '../../../hoc/Auxiliar/Auxilar';

class Menu extends Component{
    render(){
        return (
            <Auxiliar>
                <div className={classes.menuPrinc}>
                    <div>
                        <div className={classes.item}>
                            <Link to='/bio'>Bio</Link>
                        </div>
                        <div className={classes.item}>
                            <Link to='/redes'>Redes</Link>
                        </div>
                    </div>

                    <div className={classes.contLogoMenu}>

                    </div>

                    <div>
                        <div className={classes.item}>
                            <Link to='/colecciones'>Colecciones</Link>
                        </div>
                        <div className={classes.item}>
                            <Link to='/bio'>Shop</Link>
                        </div>
                    </div>
                </div>
            </Auxiliar>
        )
    }
}

export default Menu;