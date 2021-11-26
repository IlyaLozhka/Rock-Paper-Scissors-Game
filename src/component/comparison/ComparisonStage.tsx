import React, { FunctionComponent, useEffect, useState } from "react";
import { result } from "../../utils/result";
import style from './comparisonStage.module.scss';
import { Button } from "../button/Button";
import { Result } from "../result/Result";

interface IProps {
    readonly playerChoice: string;
    readonly computerChoice: string;
    readonly score: number;
    readonly choices: ReadonlyArray<string>;
    readonly setScore: (value: number) => void;
    readonly onSetModeHandler:(value:string) => void;
    readonly setComputerChoice:(value:string) => void;
}

export const ComparisonStage: FunctionComponent<IProps> = (props) => {

    const {
        playerChoice,
        computerChoice,
        score,
        setScore,
        onSetModeHandler,
        choices,
        setComputerChoice
    } = props;

    const [playerWin, setPlayerWin] = useState<string>("");

    const computerRandomChoice = () => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        setComputerChoice(randomChoice);
    };

    useEffect(() => {
        computerRandomChoice()
    }, []);

    useEffect(() => {
        result(playerChoice, computerChoice, score, setScore, setPlayerWin);
    }, [computerChoice]);

    return (
        <div className={style.wrapper}>
            <Result computerChoice={computerChoice} playerChoice={playerChoice} playerWin={playerWin}/>
            <Button onSetModeHandler={onSetModeHandler}/>
        </div>
    )
};