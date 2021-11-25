import React, { FunctionComponent } from "react";import style from './result.module.scss';
import { ResultItem } from "../resultItem/ResultItem";

interface IProps {
    readonly playerChoice: string;
    readonly computerChoice: string;
    readonly playerWin: string;
}

export const Result: FunctionComponent<IProps> = (props) => {

    const {
        playerWin,
        playerChoice,
        computerChoice
    } = props;


    return (
        <div className={style.wrapper}>
            <ResultItem player={'Player'} choice={playerChoice}/>
            <div>
                <p>
                    {playerWin}
                </p>
            </div>
            <ResultItem player={'Computer'} choice={computerChoice}/>
        </div>
    )
};