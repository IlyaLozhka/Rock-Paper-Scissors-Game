import React, { FunctionComponent } from "react";
import style from './header.module.scss';
import { Logo } from "../logo/Logo";

interface IProps {
    readonly score: number;
}

export const Header: FunctionComponent<IProps> = ({score}) => {
    return (
        <div className={style.wrapper}>
            <Logo/>
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
