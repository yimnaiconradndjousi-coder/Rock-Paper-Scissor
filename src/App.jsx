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

function GameLogic(setUserAction, setCPUAction, SetScore, Score, userChoiceValue, CPUScore, setCPUScore) {
    const UserCoice = userChoiceValue;
    const CPUChoice = getRandomInt();
    setUserAction(UserCoice);
    setCPUAction(CPUChoice);

    if (UserCoice !== null && CPUChoice !== null) {
        if (UserCoice === CPUChoice) {
        } else if ((UserCoice === 0 && CPUChoice === 2) || (UserCoice === 1 && CPUChoice === 0) || (UserCoice === 2 && CPUChoice === 1)) {
            SetScore(Score + 1);
        } else {
            setCPUScore(CPUScore + 1)
        }
    }                          
}

function UserInput({setUserAction, setCPUAction, SetScore, Score, CPUScore, SetCPUScore}) {

    return (
        <>
            <div className="actions">
                <div className="actions-container">
                    <img 
                        src={RockImg} 
                        alt="rock image" 
                        className="action-icon" 
                        onClick={() => {GameLogic(setUserAction, setCPUAction, SetScore, Score, 0)}

                        }
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
    const [UserCoice, setUserChoice] = useState(null);
    const [CPUChoice, setCPUChoice] = useState(null);
    const [Score, SetScore] = useState(0);
    const [CpuScore, setCpuscore] = useState(0);

    return (
        <>
            <div className="container">
                <nav>
                    <img src={ReactLogo} alt="react logo" />
                    <p className="score">Your Score: {Score}</p>
                </nav>

                <UserInput 
                    setUserAction={setUserChoice} 
                    setCPUAction={setCPUChoice} 
                    SetScore={SetScore} 
                    UserCoice={UserCoice} 
                    CPUChoice={CPUChoice} 
                    Score={Score} 
                    CPUScore={CpuScore}
                    SetCPUScore={setCpuscore}/>

                <div className="result">
                    <p>User Choice: <span className="userchoice">{actionList[UserCoice]?.action}</span></p>
                    <p>CPU Choice: <span className="cpuchoice">{actionList[CPUChoice]?.action}</span></p>
                </div>

            </div>
        </>
    )
};

export default App





