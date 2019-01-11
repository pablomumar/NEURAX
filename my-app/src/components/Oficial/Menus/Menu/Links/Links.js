import React from 'react';
import {Link} from 'react-router-dom';

import classes from './Links.module.css';

const links = (props) => {
    return(
        <div className={props.clase}>
            <Link to={props.nombreComponent}>{props.children}</Link>
        </div>
    )
};

export default links;