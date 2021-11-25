import React, { FunctionComponent, useEffect, useState } from 'react';
import { SelectionStage } from "./component/selection/SelectionStage";
import { ComparisonStage } from "./component/comparison/ComparisonStage";
import { Header } from "./component/header/Header";
import style from './App.module.scss';
import { gameMode } from "./utils/constans";

const App: FunctionComponent = () => {

    const [score, setScore] = useState<number>(0);
    const [playerChoice, setPlayerChoice] = useState<string>('');
    const [computerChoice, setComputerChoice] = useState<string>('');
    const [mode, setMode] = useState<string>(gameMode.SELECTION);

    const onSetModeHandler = (mode:string) => {
        setMode(mode);
    };

    const choices = ['rock', 'paper', 'scissors'];

    const onClickItemHandler = (value: string) => {
        setPlayerChoice(value);
        onSetModeHandler(gameMode.COMPARISON);
    };

    const computerRandomChoice = () => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        setComputerChoice(randomChoice);
    };

    useEffect(() => {
        computerRandomChoice()
    },[]);

    const gameModeSwitcher = () => {
        switch (mode) {
            case gameMode.SELECTION: return  <SelectionStage choices={choices}
                                                             onClickItemHandler={onClickItemHandler}
            />;
            case gameMode.COMPARISON: return <ComparisonStage
                playerChoice={playerChoice}
                computerChoice={computerChoice}
                score={score}
                setScore={setScore}
                onSetModeHandler={onSetModeHandler}
            />;
        }
    };

    return (
        <div className={style.wrapper}>
            <div>
                <Header score={score}/>
            </div>
            <div>
                {gameModeSwitcher()}
            </div>
        </div>
    );
};

export default App;
