import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { setTotalQuizzTime } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Timer = () => {
    const [quizzTime, setQuizzTime] = useState(0);
    const dispatch = useDispatch();
    const start_quizz_timer = useSelector((state) => state.start_quizz_timer);


    useEffect(() => {
        let interval = null;
        if (start_quizz_timer) {
            interval = setInterval(() => {
                setQuizzTime(prevTime => prevTime + 10);
            }, 10)
        } else {
            clearInterval(interval);
        } 
        return () => {
            dispatch(setTotalQuizzTime(quizzTime));
            clearInterval(interval);
        }

    }, [start_quizz_timer, quizzTime])


    return (
        <Box>
            <span>Time: </span>
            <span className="digits">
                {("0" + Math.floor((quizzTime / 60000) % 60)).slice(-2)}:
            </span>
            <span className="digits">
                {("0" + Math.floor((quizzTime / 1000) % 60)).slice(-2)}.
            </span>
            <span className="digits mili-sec">
                {("0" + ((quizzTime / 10) % 100)).slice(-2)}
            </span>
        </Box>
    )
}

export default Timer;