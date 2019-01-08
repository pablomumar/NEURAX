import React, { Component } from 'react';
import './PruebaAnimacion3.css';
import Auxiliar from '../../../components/hoc/Auxiliar/Auxilar';
import N from '../../../assets/logos/simboloN.png';
import X from '../../../assets/logos/simboloX.png';
import textoSimple from '../../../assets/logos/textoSimple.png';
import LogoCuadrado from '../../../assets/logos/cuadraoSimple.png';

class PruebaAnimacion3 extends Component {
    animate3 = () => {
        let N = document.getElementById('N');
        let X = document.getElementById('X');
        let txtSmpl = document.getElementById('textoSimple');

        N.classList.add('animateN');
        X.classList.add('animateX');
        txtSmpl.classList.add('animateTxtSmpl');
    };

    render() {
        return (
            <Auxiliar>
                <div className="marcoAnim3">
                    <img id='N' src={N} alt="" className={'imgN'}/>
                    <img id='X' src={X} alt="" className={'imgX'}/>
                    <img id='textoSimple' src={textoSimple} alt="" className='textoSimple3'/>
                    <img src={LogoCuadrado} alt="" className='cuadrado3' onClick={this.animate3}/>
                </div>
            </Auxiliar>
        );
    }
}

export default PruebaAnimacion3;