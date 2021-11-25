import React, { FunctionComponent } from "react";
import style from './header.module.scss';
import logo from './../../img/logo.png';

interface IProps {
    readonly score: number;
}

export const Header: FunctionComponent<IProps> = ({score}) => {
    return (
        <div className={style.wrapper}>
            <div className={style.title}>
               <div >
                   <img src={logo} alt=""/>
               </div>
                 <div className={style.name}>
                     ROCK PAPER SCISSORS GAME
                 </div>
            </div>
            <div className={style.scoreWrapper}>
                <div>Score:</div>
                <div className={style.score}>{score}</div>
            </div>

        </div>
    )
};