import {useState} from "react";
import "./App.css";
import ReactLogo from "./assets/react.svg";   
import RockImg from "./assets/Rock.png";
import PaperImg from "./assets/Paper.png";
import ScissorsImg from "./assets/Scissors.png";

// 0: Rock, 1: Paper, 2: Scissors

const actionList = [
  { action: "rock", id: 0 },
  { action: "paper", id: 1 },
  { action: "scissor", id: 2 }
];

function getRandomInt() {
    const randomInt = Math.floor((Math.random() * 3));  
    return randomInt
};

function GameLogic(setUserAction, setCPUAction, SetScore, Score, userChoiceValue) {
    const UserCoice = userChoiceValue;
    const CPUChoice = getRandomInt();
    setUserAction(UserCoice);
    setCPUAction(CPUChoice);

    if (UserCoice !== null && CPUChoice !== null) {
        if (UserCoice === CPUChoice) {
        } else if ((UserCoice === 0 && CPUChoice === 2) || (UserCoice === 1 && CPUChoice === 0) || (UserCoice === 2 && CPUChoice === 1)) {
            let newScore = Score + 1;
            SetScore(newScore);
        } else {
        }
    }                          
}

function UserInput({setUserAction, setCPUAction, SetScore, Score}) {

    return (
        <>
            <div className="actions">
                <div className="actions-container">
                    <img 
                        src={RockImg} 
                        alt="rock image" 
                        className="action-icon" 
                        onClick={() => {GameLogic(setUserAction, setCPUAction, SetScore, Score, 0)}}
                    />

                    <img 
                        src={PaperImg} 
                        alt="paper image" 
                        className="action-icon"
                        onClick={() => {GameLogic(setUserAction, setCPUAction, SetScore, Score, 1)}}
                    />

                    <img 
                        src={ScissorsImg} 
                        alt="scissor image" 
                        className="action-icon"
                        onClick={() => {GameLogic(setUserAction, setCPUAction, SetScore, Score, 2)}}
                    />
                </div>
            </div>
        </>
    )
}

function App() {
    const [UserCoice, setUserChoice] = useState(null)
    const [CPUChoice, setCPUChoice] = useState(null)
    const [Score, SetScore] = useState(0)

    return (
        <>
            <div className="container">
                <nav>
                    <img src={ReactLogo} alt="react logo" />
                    <p>Rock|Paper|Scissors Game</p>
                </nav>
                <UserInput setUserAction={setUserChoice} setCPUAction={setCPUChoice} SetScore={SetScore} UserCoice={UserCoice} CPUChoice={CPUChoice} Score={Score} />
                <p>User Choice: {actionList[UserCoice]?.action}</p>
                <p>CPU Choice: {actionList[CPUChoice]?.action}</p>
                <p>Score: {Score}</p>
            </div>
        </>
    )
};

export default App





