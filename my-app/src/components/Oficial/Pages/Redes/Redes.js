import React, {Component} from 'react';

import classes from './Redes.module.css';
import Auxiliar from '../../../hoc/Auxiliar/Auxilar';
import Menu from '../../Menus/Menu/Menu';

import igBlanco from '../../../../assets/logos/redes/igBlanco.png';
import fbBlanco from '../../../../assets/logos/redes/fbIcon.png';

class Redes extends Component{
    render(){
        return (
            <Auxiliar>
                <Menu/>
                <div className={classes.redesCont}>
                    <div className={classes.contEsp}>
                        <div className={classes.datos}>
                            <p>Datos de contacto:</p>
                            <p>+34 666 456 3456 <strong>{String.fromCharCode(17)}</strong></p>
                            <p>email@info.es <strong>{String.fromCharCode(17)}</strong></p>
                        </div>
                    </div>
                    <div className={[classes.contEsp, classes.contBottom].join(' ')}>
                        <div className={classes.redes}>
                            <p>Redes sociales: </p>
                            <div>
                                <a href="https://www.instagram.com/neurax_nx/"><img src={igBlanco} alt=""/></a>
                                <a href="https://www.facebook.com/silvia.neurax.7"><img src={fbBlanco} alt=""/></a>
                            </div>
                            {/*quitar las redes sociales y rellenar hueco con animacion o algo/o solo los datos de contacto*/}
                            {/*o debajo de los datos los iconos de las redes en chiquitico*/}
                        </div>
                    </div>
                </div>
            </Auxiliar>
        )
    }
}

export default Redes;