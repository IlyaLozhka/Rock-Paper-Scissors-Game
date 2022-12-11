import React, { FunctionComponent } from "react";
import style from './header.module.scss';
import logo from './../../img/logo.png';

interface IProps {
    readonly score: number;
}

export const Header: FunctionComponent<IProps> = ({score}) => {
    return (
        <div className={style.wrapper}>
            <div className={style.logoContainer}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={style.title}>
                ROCK PAPER SCISSORS GAME
            </div>
            <div className={style.scoreWrapper}>
                <div>Score:</div>
                <div className={style.score}>{score}</div>
            </div>
        </div>
    )
};
