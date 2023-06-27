import { Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const FinalView = (props) => {
    const { score } = props;
    const total_quizz_time = useSelector((state) => state.total_quizz_time);


    return (
        <div className="result">
            <Typography variant="h5" className="title">Final score: {score * 10}/100</Typography>
            <Typography variant="h5" className="title">Correct answers: {score}/10</Typography>
            <Typography variant="h5" className="title">Wrong answers: {10 - score}/10</Typography>
            <Typography variant="h5" className="title">Total time: 
                <span className="digits">
                    {("0" + Math.floor((total_quizz_time / 60000) % 60)).slice(-2)}:
                </span>
                <span className="digits">
                    {("0" + Math.floor((total_quizz_time / 1000) % 60)).slice(-2)}.
                </span>
                <span className="digits mili-sec">
                    {("0" + ((total_quizz_time / 10) % 100)).slice(-2)}
                </span>
            </Typography>
            <Button
                variant="contained"
                color="secondary"
                size="large"
                style={{ alignSelf: "center", marginTop: 20 }}
                href="/"
            >
                Go to homepage
            </Button>
        </div>
    )
}

export default FinalView;