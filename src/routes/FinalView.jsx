import { Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const FinalView = (props) => {
    const { score, setScore } = props;
    const total_quiz_time = useSelector((state) => state.total_quiz_time);
    const navigate = useNavigate();

    const handleClick = () => {
        setScore(0);
        navigate("/");
    }

    return (
        <div className="result">
            <Typography variant="h5" className="title">Final score: {score * 10}/100</Typography>
            <Typography variant="h5" className="title">Correct answers: {score}/10</Typography>
            <Typography variant="h5" className="title">Wrong answers: {10 - score}/10</Typography>
            <Typography variant="h5" className="title">Total time: 
                <span className="digits">
                    {("0" + Math.floor((total_quiz_time / 60000) % 60)).slice(-2)}:
                </span>
                <span className="digits">
                    {("0" + Math.floor((total_quiz_time / 1000) % 60)).slice(-2)}.
                </span>
                <span className="digits mili-sec">
                    {("0" + ((total_quiz_time / 10) % 100)).slice(-2)}
                </span>
            </Typography>
            <Button
                variant="contained"
                color="secondary"
                size="large"
                style={{ alignSelf: "center", marginTop: 20 }}
                onClick={handleClick}
            >
                Go to homepage
            </Button>
        </div>
    )
}

export default FinalView;