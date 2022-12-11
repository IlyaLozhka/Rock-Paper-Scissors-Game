import React, { FunctionComponent } from 'react';
import style from "./selectionStage.module.scss";
import paper from './../../assets/img//paper.png';
import rock from './../../assets/img//rock.png';
import scissors from './../../assets/img//scissors.png';

interface IProps {
    readonly onClickItemHandler: (value: string) => void;
    readonly choices: ReadonlyArray<string>;
}

export const SelectionStage: FunctionComponent<IProps> = (props) => {

    const {
        choices,
        onClickItemHandler
    } = props;

    return (
        <div className={style.wrapper}>
            {choices.map((element) => {

                let image;

                switch (element) {
                    case 'rock':
                        image = rock;
                        break;
                    case 'paper':
                        image = paper;
                        break;
                    case 'scissors':
                        image = scissors;
                        break;
                }

                return (
                    <div className={style.imageContainer} onClick={() => onClickItemHandler(element)}>
                        <img src={image} alt=""/>
                    </div>
                )
            })}
        </div>
    )
};
