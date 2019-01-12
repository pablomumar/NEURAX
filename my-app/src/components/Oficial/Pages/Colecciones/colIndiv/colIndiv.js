import React from 'react';

import classes from './colIndiv.module.css';
import Auxiliar from '../../../../hoc/Auxiliar/Auxilar';

const colIndiv = (props) => {
    return (
        <Auxiliar>
            <div className={classes.contModal}>
                <p onClick={props.closeModal} className={classes.back}>{String.fromCharCode(27)}</p>
                <div className={[classes.backgroundW].join(' ')}>
                    <div>
                        <div className={["container", classes.contenidoCosas].join(' ')}>
                            <div className="row">
                                <div className="col-md-12">
                                    <p className={classes.titulo}>titulo</p>
                                </div>
                                <div className="col-md-12">
                                    <p className={classes.subtitulo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet aperiam cupiditate delectus deleniti dolorum ea eligendi eos facilis maxime necessitatibus non nostrum quae, rem saepe, sit, temporibus. Dignissimos, ea?</p>
                                </div>
                                <div className={[classes.contSlider].join(' ')}>
                                    <div className={["row", classes.sliderTop].join(' ')}>
                                        <div className={["col-md-8", classes.imagenSlider].join(' ')}>foto</div>
                                        <div className="col-md-1"> </div>
                                        <div className={["col-md-3", classes.descSlider].join(' ')}>desc</div>
                                    </div>
                                    <div className={["row", classes.sliderBot].join(' ')}>
                                        <div className={[classes.articulo].join(' ')}>
                                            <div>ph</div>
                                        </div>
                                        <div className={[classes.articulo].join(' ')}>
                                            <div>ph</div>
                                        </div>
                                        <div className={[classes.articulo].join(' ')}>
                                            <div>ph</div>
                                        </div>
                                        <div className={[classes.articulo].join(' ')}>
                                            <div>ph</div>
                                        </div>
                                        <div className={[classes.articulo].join(' ')}>
                                            <div>ph</div>
                                        </div>
                                        <div className={[classes.articulo].join(' ')}>
                                            <div>ph</div>
                                        </div>
                                        <div className={[classes.articulo].join(' ')}>
                                            <div>ph</div>
                                        </div>
                                        <div className={[classes.articulo].join(' ')}>
                                            <div>ph</div>
                                        </div>
                                        <div className={[classes.articulo].join(' ')}>
                                            <div>ph</div>
                                        </div>
                                        <div className={[classes.articulo].join(' ')}>
                                            <div>ph</div>
                                        </div>
                                        <div className={[classes.articulo].join(' ')}>
                                            <div>ph</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Auxiliar>
    )

};

export default colIndiv;