import React, {Component} from 'react';
import {Link} from 'react-router';

import classes from './MenuHome.module.css';
import Auxiliar from '../../../hoc/Auxiliar/Auxilar';

class MenuHome extends Component{
    render(){
        return (
            <Auxiliar>
                <div className='container-fluid'> {/* Meter clase para el logo en el centro (con absolute y eso)*/}
                    <div className={[classes.mainCont, 'row'].join(' ')}>
                        <div className='col-md-6'>  {/* Cada div sera una funcion para los distintos links con props para el absolute del Link*/}
                            <h1>MenuH1</h1>
                        </div>
                        <div className='col-md-6'>
                            <h1>MenuH2</h1>
                        </div>
                        <div className='col-md-6'>
                            <h1>MenuH3</h1>
                        </div>
                        <div className='col-md-6'>
                            <h1>MenuH4</h1>
                        </div>

                    </div>
                </div>
            </Auxiliar>
        )
    }
}

export default MenuHome;