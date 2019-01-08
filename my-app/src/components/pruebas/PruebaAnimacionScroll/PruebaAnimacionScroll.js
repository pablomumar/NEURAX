import React, { Component } from 'react';
import './PruebaAnimacionScroll.css';
import Auxiliar from '../../hoc/Auxiliar/Auxilar';
import TextoScroll from '../../../assets/logos/textoSimpleScrollSimple.png';

class PruebaAnimacionScroll extends Component {
    state = {
        backPos: 0,
        backPos2: 0
    };

    scrollImg = {
        background: 'url(' + TextoScroll + ') 0% ' + this.state.backPos + '% repeat-y',
        backgroundSize: 50 + 'px auto',
        width: 50 + 'px'
    };
    scrollImg2 = {
        background: 'url(' + TextoScroll + ') 0% ' + this.state.backPos + '% repeat-y',
        backgroundSize: 50 + 'px auto',
        width: 50 + 'px'
    };

    animationScroll = (event) => {
        if (event.nativeEvent.wheelDelta > 0) {
            const newBP1 = this.state.backPos - 2;
            const newBP2 = this.state.backPos2 + 2;
            this.scrollImg = {
                background: 'url(' + TextoScroll + ') 0% ' + newBP1 + '% / 50px repeat-y',
                backgroundSize: 50 + 'px auto',
                transition: .2 + 's',
                width: 50 + 'px'
            };
            this.scrollImg2 = {
                background: 'url(' + TextoScroll + ') 0% ' + newBP2 + '% / 50px repeat-y',
                backgroundSize: 50 + 'px auto',
                transition: .2 + 's',
                width: 50 + 'px'
            };
            this.setState({backPos : newBP1, backPos2: newBP2});
        } else {
            const newBP1 = this.state.backPos + 2;
            const newBP2 = this.state.backPos2 - 2;
            this.scrollImg = {
                background: 'url(' + TextoScroll + ') 0% ' + newBP1 + '% / 50px repeat-y',
                backgroundSize: 50 + 'px auto',
                transition: .2 + 's',
                width: 50 + 'px'
            };
            this.scrollImg2 = {
                background: 'url(' + TextoScroll + ') 0% ' + newBP2 + '% / 50px repeat-y',
                backgroundSize: 50 + 'px auto',
                transition: .2 + 's',
                width: 50 + 'px'
            };
            this.setState({backPos : newBP1, backPos2: newBP2});
        }
    };

    render() {
        return (
            <Auxiliar>
                <div className="animacionScroll" onWheel={this.animationScroll}>
                    <div style={this.scrollImg}> </div>
                    <div style={this.scrollImg2}> </div>
                    <div style={this.scrollImg}> </div>
                    <div style={this.scrollImg2}> </div>
                    <div style={this.scrollImg}> </div>
                    <div style={this.scrollImg2}> </div>
                    <div style={this.scrollImg}> </div>
                    <div style={this.scrollImg2}> </div>
                </div>
            </Auxiliar>
        );
    }
}

export default PruebaAnimacionScroll;