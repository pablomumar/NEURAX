import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import classes from './Bio.module.css';
import Auxiliar from '../../../hoc/Auxiliar/Auxilar';
import Menu from '../../Menus/Menu/Menu';

import igBlanco from '../../../../assets/logos/redes/igBlanco.png';
import fbBlanco from '../../../../assets/logos/redes/fbIcon.png';
import mailBlanco from '../../../../assets/logos/redes/mailIcon.png';

import placeholder from '../../../../assets/ontheroad.jpg';

class Bio extends Component{
    render(){
        return (
            <Auxiliar>
                <Menu/>
                <div className='container-fluid'>
                    <div className="row">
                        <div className={["col-md-12", classes.textoBio].join(' ')}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi ducimus expedita facere illo, itaque quo similique! <br/><br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores at culpa, eos incidunt officiis possimus quia saepe veniam voluptates. Animi assumenda fugit magni modi nam reiciendis! Accusantium neque, quia?</p>
                        </div>
                        <div className={["col-md-12", classes.redes].join(' ')}>
                            <a href="https://www.instagram.com/neurax_nx/"><img src={igBlanco} alt=""/></a>
                            <a href="https://www.facebook.com/silvia.neurax.7"><img src={fbBlanco} alt=""/></a>
                            <Link to="/redes"><img src={mailBlanco} alt=""/></Link>
                        </div>
                        <div className={["col-md-12", classes.imgBio].join(' ')}>
                            <img src={placeholder} alt=""/>
                        </div>
                        <div className={["col-md-12", classes.anim].join(' ')}>
                            <h1>sjdflnakjdsfnl</h1>
                        </div>
                    </div>
                </div>
            </Auxiliar>
        )
    }
}

export default Bio;