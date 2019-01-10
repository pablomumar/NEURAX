import React, {Component} from 'react';
import {Link} from 'react-router';

import classes from './MenuHome.module.css';
import LinksHome from './LinksHome/LinksHome';
import Auxiliar from '../../../hoc/Auxiliar/Auxilar';

class MenuHome extends Component{
    render(){
        return (
            <Auxiliar>
                <div className='container-fluid'> {/* Meter logo y animaciones en fixed*/}
                    <div className={[classes.mainCont, 'row'].join(' ')}>
                        <LinksHome topPerc={40} leftPerc={40} transTop={-50} transLeft={-50} nombreComponent='/redes'>Contacto</LinksHome>
                        <LinksHome topPerc={40} leftPerc={60} transTop={-50} transLeft={-50} nombreComponent='/bio'>Bio</LinksHome>
                        <LinksHome topPerc={60} leftPerc={40} transTop={-50} transLeft={-50} nombreComponent='/colecciones'>Colecciones</LinksHome>
                        <LinksHome topPerc={60} leftPerc={60} transTop={-50} transLeft={-50} nombreComponent='/bio'>Tienda</LinksHome>
                    </div>
                </div>
            </Auxiliar>
        )
    }
}

export default MenuHome;