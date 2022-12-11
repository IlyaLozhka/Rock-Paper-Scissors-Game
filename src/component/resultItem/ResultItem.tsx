import React, { FunctionComponent } from "react";
import rock from "./../../assets/img/rock.png";
import paper from "./../../assets/img/paper.png";
import scissors from "./../../assets/img/scissors.png";
import style from './resultItem.module.scss';

interface IProps {
    readonly choice: string;
    readonly player: string;
}

export const ResultItem:FunctionComponent<IProps> = ({choice, player}) => {

    let item;

    switch (choice) {
        case 'rock':
            item = rock;
            break;
        case 'paper':
            item = paper;
            break;
        case 'scissors':
            item = scissors;
            break;
    }

    return (
        <div className={style.playerWrapper}>
            <div>
                {player} Choice
            </div>
            <div>
                <img src={item} alt=""/>
            </div>
        </div>
    )
};
