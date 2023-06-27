import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { setTotalQuizTime } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Timer = () => {
    const [quizTime, setQuizTime] = useState(0);
    const dispatch = useDispatch();
    const start_quiz_timer = useSelector((state) => state.start_quiz_timer);


    useEffect(() => {
        let interval = null;
        if (start_quiz_timer) {
            interval = setInterval(() => {
                setQuizTime(prevTime => prevTime + 10);
            }, 10)
        } else {
            clearInterval(interval);
        } 
        return () => {
            dispatch(setTotalQuizTime(quizTime));
            clearInterval(interval);
        }

    }, [start_quiz_timer, quizTime])


    return (
        <Box>
            <span>Time: </span>
            <span className="digits">
                {("0" + Math.floor((quizTime / 60000) % 60)).slice(-2)}:
            </span>
            <span className="digits">
                {("0" + Math.floor((quizTime / 1000) % 60)).slice(-2)}.
            </span>
            <span className="digits mili-sec">
                {("0" + ((quizTime / 10) % 100)).slice(-2)}
            </span>
        </Box>
    )
}

export default Timer;