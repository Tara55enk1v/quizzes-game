import { Box, Button, CircularProgress, Typography } from "@mui/material"
import SelectQuizOption from "../components/SelectQuizOption"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setStartQuizTimer } from "../redux/actions";
import logo from "../images/quiz.png"

const QuizSettings = (props) => {
    const { fetchQuestions, response, loading, error } = props;
    const [isStartBtnDisabled, setIsStartBtnDisabled] = useState(true);
    const [isStartRandomBtnDisabled, setIsStartRandomBtnDisabled] = useState(false);
    const question_category = useSelector((state) => state.question_category);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleStartQuizByTheCategory = (e) => {
        e.preventDefault();
        fetchQuestions(question_category);
        dispatch(setStartQuizTimer(true));
        navigate("/quizquestions");
    }

    const handleStartRandomQuiz = (e) => {
        e.preventDefault();
        fetchQuestions();
        dispatch(setStartQuizTimer(true));
        navigate("/quizquestions");
    }

    useEffect(() => {
        if (question_category) {
            setIsStartBtnDisabled(false);
            setIsStartRandomBtnDisabled(true);
        } else {
            setIsStartBtnDisabled(true);
            setIsStartRandomBtnDisabled(false);
        }
    }, [question_category]);


    if (loading) {
        return (
            <Box mt={20}>
                <CircularProgress />
            </Box>
        );
    } else if (error) {
        return (
            <Typography variant="h6" mt={20} color="red">
                Sorry, something went wrong!
            </Typography>
        );
    } else {
        return (
            <Box>
                <div>
                    <img src={logo} alt="quiz.jpg" style={{width:"50%", height:"70%"}}/>
                </div>
                <SelectQuizOption options={response.trivia_categories} label="Category" />
                <Box width="100%" mt={2} display="flex" justifyContent="space-between">
                    <Button disabled={isStartBtnDisabled} size="large" variant="contained" width="50%" color="success" type="button" onClick={handleStartQuizByTheCategory}>Get started</Button>
                    <Button disabled={isStartRandomBtnDisabled} size="large" variant="contained" width="50%" color="error" type="button" onClick={handleStartRandomQuiz}>I'm lucky</Button>
                </Box>
            </Box>
        )
    }
}

export default QuizSettings