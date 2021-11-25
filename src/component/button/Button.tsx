import React, { FunctionComponent } from 'react';
import { gameMode } from '../../utils/constans';
import style from './button.module.scss';

interface IProps {
    readonly onSetModeHandler:(value:string) => void;
}

export const Button: FunctionComponent<IProps> = ({onSetModeHandler}) => {
    return (
        <div className={style.wrapper}>
                <button className={style.button} onClick={ () => onSetModeHandler(gameMode.SELECTION)}>
                    Let's Play Again!
                </button>
        </div>
    )
};