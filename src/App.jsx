import {useState} from "react";
import {useEffect} from "react";
import "./App.css";
import ReactLogo from "./assets/react.svg";   
import RockImg from "./assets/Rock.png";
import PaperImg from "./assets/Paper.png";
import ScissorsImg from "./assets/Scissors.png";


const actionList = [
  { action: "rock", id: 0},
  { action: "paper", id: 1},
  { action: "scissor", id: 2}
];

function getRandomInt() {
    const randomInt = Math.floor((Math.random() * 3));  
    return randomInt
};

function ActionOnclick(setUserAction, setCPUAction, actionID) {
    const UserChoice = actionID;
    const CPUChoice = getRandomInt();
    setUserAction(UserChoice);
    setCPUAction(CPUChoice);                   
}

function GameAction({ Img, Alt, SetUserAction, SetCPUAction, actionID, actionOnclik}) {
    return (
        <img 
            src={Img} 
            alt={Alt} 
            className="action-icon" 
            onClick={() =>  {actionOnclik(SetUserAction, SetCPUAction, actionID)}}
        />
    )
}

function App() {
    const [UserChoice, setUserChoice] = useState(null);
    const [CPUChoice, setCPUChoice] = useState(null);
    const [Score, SetScore] = useState(0);
    const [CpuScore, setCpuscore] = useState(0);

    useEffect(() => {
        if (UserChoice !== null && CPUChoice !== null) {
            if (UserChoice === CPUChoice) {
            } else if ((UserChoice === 0 && CPUChoice === 2) || (UserChoice === 1 && CPUChoice === 0) || (UserChoice === 2 && CPUChoice === 1)) {
                SetScore(Score + 1);
            } else {
                setCpuscore(CpuScore + 1);
            }
        }       
    }, [UserChoice, CPUChoice]);

    return (
        <>
            <div className="container">
                <nav>
                    <img src={ReactLogo} alt="react logo" />
                    
                    <div className="score">
                        <p className="user-score">Your Score: {Score}</p>
                        <p className="cpu-score">CPU Score: {CpuScore}</p>
                    </div>
                </nav>

                <div className="actions">
                    <div className="actions-container">

                        <GameAction 
                            Img={RockImg}
                            Alt={"Rock action"}  
                            SetUserAction={setUserChoice}
                            SetCPUAction={setCPUChoice}
                            actionID={0}
                            actionOnclik={ActionOnclick}
                        />

                        <GameAction 
                            Img={PaperImg}
                            Alt={"Paper action"}  
                            SetUserAction={setUserChoice}
                            SetCPUAction={setCPUChoice}
                            actionID={1}
                            actionOnclik={ActionOnclick}
                        />

                        <GameAction 
                            Img={ScissorsImg}
                            Alt={"Scissors action"}  
                            SetUserAction={setUserChoice}
                            SetCPUAction={setCPUChoice}
                            actionID={2}
                            actionOnclik={ActionOnclick}
                        />

                    </div>
                </div>

                <div className="result">
                    <div className="result-container">
                        <p className="userchoice">User Choice:</p>
                        <span className="action-color">{actionList[UserChoice]?.action}</span>
                    </div>

                    <div className="result-container">
                        <p className="cpuchoice">CPU Choice: </p>
                        <span className="action-color">{actionList[CPUChoice]?.action}</span>
                    </div>
                </div>

            </div>
        </>
    )
};

export default App





