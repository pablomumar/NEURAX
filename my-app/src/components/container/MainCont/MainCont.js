import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Auxiliar from '../../hoc/Auxiliar/Auxilar';
// import classes from './MainCont.module.css';
import MenuHome from '../../../components/Oficial/Menus/MenuHome/MenuHome';
import Colecciones from '../../../components/Oficial/Pages/Colecciones/Colecciones';
import Bio from '../../../components/Oficial/Pages/Bio/Bio';
import Redes from '../../../components/Oficial/Pages/Redes/Redes';

class MainCont extends Component {
    render() {
        return (
            <Auxiliar>
                <Route path='/' exact render={() => (
                    <Auxiliar>
                        <MenuHome/>
                    </Auxiliar>
                )}/>
               <Route path='/Colecciones' exact component={Colecciones}/>
               <Route path='/Bio' exact component={Bio}/>
               <Route path='/Redes' exact component={Redes}/>
            </Auxiliar>
        );
    }
}

export default MainCont;