import { Box, Button, CircularProgress, Typography } from "@mui/material"
import SelectQuizzOption from "../components/SelectQuizzOption"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setStartQuizzTimer } from "../redux/actions";
import logo from "../images/quizz.png"

const QuizzSettings = (props) => {
    const { fetchQuestions, response, loading, error } = props;
    const [isStartBtnDisabled, setIsStartBtnDisabled] = useState(true);
    const [isStartRandomBtnDisabled, setIsStartRandomBtnDisabled] = useState(false);
    const question_category = useSelector((state) => state.question_category);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleStartQuizzByTheCategory = (e) => {
        e.preventDefault();
        fetchQuestions(question_category);
        dispatch(setStartQuizzTimer(true));
        navigate("/quizzquestions");
    }

    const handleStartRandomQuizz = (e) => {
        e.preventDefault();
        fetchQuestions();
        dispatch(setStartQuizzTimer(true));
        navigate("/quizzquestions");
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
                    <img src={logo} alt="quizz.jpg" style={{width:"50%", height:"70%"}}/>
                </div>
                <SelectQuizzOption options={response.trivia_categories} label="Category" />
                <Box width="100%" mt={2} display="flex" justifyContent="space-between">
                    <Button disabled={isStartBtnDisabled} size="large" variant="contained" width="50%" color="success" type="button" onClick={handleStartQuizzByTheCategory}>Get started</Button>
                    <Button disabled={isStartRandomBtnDisabled} size="large" variant="contained" width="50%" color="error" type="button" onClick={handleStartRandomQuizz}>I'm lucky</Button>
                </Box>
            </Box>
        )
    }
}

export default QuizzSettings