import React, {FunctionComponent} from 'react';
import {Link} from "react-router-dom";
import style from './button.module.scss';

export const Button: FunctionComponent = () => {

    return (
        <div className={style.wrapper}>
            <Link to={'/'}>
                <button className={style.button}>
                    Let's Play Again!
                </button>
            </Link>
        </div>

    )
};