import React, { Component } from 'react';
import './PruebaAnimacion1.css';
import Auxiliar from '../../../components/hoc/Auxiliar/Auxilar';
import LogoCuadrado from '../../../assets/logos/cuadraoSimple.png';
import LogoTexto from '../../../assets/logos/textoSimple.png'

class PruebaAnimacion1 extends Component {
    cuadraoStyle = {
        height: 100 + 'px',
        width: 100 + 'px'
    };

    textoStyle = {
        height: 100 + 'px',
        width: 0,
        marginBottom: -2 + 'px'
    };

    animation = () => {
        this.textoStyle = {
            height: 100 + 'px',
            marginRight: 10 + 'px',
            marginBottom: -2 + 'px',
            animationName: 'ampliar',
            animationDuration: .5 + 's',
        };
        this.forceUpdate()
    };


    render() {
        return (
            <Auxiliar>
                <div className="marcoPrueba1">
                    <img style={this.textoStyle} src={LogoTexto} alt=""/>
                    <img onClick={this.animation} style={this.cuadraoStyle} src={LogoCuadrado} alt=""/>
                </div>
            </Auxiliar>
        );
    }
}

export default PruebaAnimacion1;