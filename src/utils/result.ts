
export const result:Function = (
    playerChoice: string,
    computerChoice: string,
    score: number,
    setScore: (value: number) => void,
    setPlayerWin:(value:string) => void
) => {
    if (playerChoice === "rock" && computerChoice === "scissors") {
        setPlayerWin("You WIN!");
        setScore(score + 1);
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        setPlayerWin("You lost :(");
        setScore(score - 1);
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        setPlayerWin("You WIN!");
        setScore(score + 1);
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        setPlayerWin("You lost :(");
        setScore(score - 1);
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        setPlayerWin("You WIN!");
        setScore(score + 1);
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        setPlayerWin("You lost :(");
        setScore(score - 1);
    } else {
        setPlayerWin("DRAW! Try again");
    }
};