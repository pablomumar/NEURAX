import React, { Component } from 'react';
import './PruebaAnimacion2.css';
import Auxiliar from '../../../components/hoc/Auxiliar/Auxilar';
import LogoCuadrado from '../../../assets/logos/cuadraoSimple.png';
import LogoTexto from '../../../assets/logos/textoSimple.png'

class PruebaAnimacion2 extends Component {
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
            marginRight: 20 + 'px',
            height: 100 + 'px',
            marginBottom: -2 + 'px',
            animationName: 'ampliar',
            animationDuration: .5 + 's',
        };
        this.forceUpdate()
    };

    desanimation = () => {
        this.textoStyle = {
            height: 100 + 'px',
            marginBottom: -2 + 'px',
            animation: 'desampliar ' + .5 + 's ease-in-out ' + .2 + 's',
            animationFillMode: 'forwards'
        };
        this.forceUpdate()
    };

    render() {
        return (
            <Auxiliar>
                <div className="marcoPrueba1" onMouseOver={this.animation} onMouseOut={this.desanimation}>
                    <img style={this.textoStyle} src={LogoTexto} alt=""/>
                    <img style={this.cuadraoStyle} src={LogoCuadrado} alt=""/>
                </div>
            </Auxiliar>
        );
    }
}

export default PruebaAnimacion2;