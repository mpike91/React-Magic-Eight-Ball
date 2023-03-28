import { useState } from "react";
import "./EightBall.css";

const EightBall = ({ answers }) => {
    // Setup useState variables for color, message, and green/yellow/red count. 
    const [color, setColor] = useState("black");
    const [msg, setMsg] = useState("Think of a Question");
    const [green, setGreen] = useState(0);
    const [yellow, setYellow] = useState(0);
    const [red, setRed] = useState(0);
    // Set a style object for the background color to change with the "color" variable.
    const style = { backgroundColor: color };
    const options = answers.length;

    // click handler for clicking the Eight Ball.
    const handleEightBallClick = (e) => {
        // Generate random index and set the msg and color according to random index.
        const randOpt = Math.floor(Math.random() * options);
        setMsg(answers[randOpt].msg);
        setColor(answers[randOpt].color);
        // Add one to the counter variable for the new color of the Eight Ball.
        if (answers[randOpt].color === "green") setGreen(green + 1);
        if (answers[randOpt].color === "goldenrod") setYellow(yellow + 1);
        if (answers[randOpt].color === "red") setRed(red + 1);
    }

    // click handler for clicking the Reset button
    const handleBtnClick = (e) => {
        setMsg("Think of a Question");
        setColor("black");
        setGreen(0);
        setYellow(0);
        setRed(0);
    }

    return (
        <>
            <div className="EightBall">
                <div className="EightBall-ball" style={style} onClick={handleEightBallClick}>
                    <span className="EightBall-span">{msg}</span>
                </div>
            </div>
            <span className="EightBall-colorCount">
                Green: {green}<br />
                Yellow: {yellow}<br />
                Red: {red}
            </span>
            <button className="EightBall-btn" onClick={handleBtnClick}>Reset</button>
        </>
    )
}

export default EightBall