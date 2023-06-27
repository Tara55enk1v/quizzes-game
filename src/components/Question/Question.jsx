import { Alert, Button } from "@mui/material";
import { useState } from "react";
import "./Question.css";
import { useNavigate } from "react-router-dom";
import { decode } from "html-entities";
import { useDispatch } from "react-redux";
import { setStartQuizzTimer } from "../../redux/actions";

const Question = (props) => {
    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);
    const { currentQuestion, setCurrentQuestion, questions, setQuestions, score, setScore, correct, options } = props;
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleSelect = (option) => {
        if (selected === option && selected === correct) return "select";
        else if (selected === option && selected !== correct) return "wrong";
        else if (option === correct) return "select";
    }

    const handleCheck = (option) => {
        setSelected(option);
        if (option === correct) setScore(score + 1);
        setError(false);
    }

    const handleNext = () => {
        if (currentQuestion > 8) {
            dispatch(setStartQuizzTimer(false));
            navigate("/finalview");
        }
        else if (selected) {
            setCurrentQuestion(currentQuestion + 1);
            setSelected();
        } 
        else setError(true);
    }

    const handleQuit = () => {
        setCurrentQuestion(0);
        setQuestions();
        navigate("#/");
    }


    return (
        <div className="question">
            <h1>
                Question {currentQuestion + 1}/10:
            </h1>
            <div className="singleQuestion">
                <h2>
                    {decode(questions[currentQuestion].question)}
                </h2>
                <div className="options">
                    {error && <Alert variant="filled" severity="info">
                        You must choose one of the options!
                    </Alert>}
                    {options && options.map((option, i) => (
                        <button
                            className={`singleOption  ${selected && handleSelect(option)}`}
                            key={i}
                            onClick={() => handleCheck(option)}
                            disabled={selected}
                        >
                            {decode(option)}
                        </button>
                    ))}
                </div>
                <div className="controls">
                    <Button
                        variant="contained"
                        color="error"
                        size="large"
                        href="/"
                        onClick={handleQuit}
                    >
                        Quit
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        width="185px"
                        onClick={handleNext}
                    >
                        {currentQuestion > 8 ? "Submit" : "Next Question"}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Question;