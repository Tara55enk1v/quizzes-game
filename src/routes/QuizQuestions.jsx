import { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import Question from "../components/Question/Question";
import Timer from "../components/Timer";


const QuizQuestions = (props) => {
  const { questions, score, setQuestions, setScore } = props;
  const [options, setOptions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  }

  useEffect(() => {
    setOptions(
      questions &&
      handleShuffle([
        questions[currentQuestion]?.correct_answer,
        ...questions[currentQuestion]?.incorrect_answers,
      ])
    );
  }, [questions, currentQuestion]);


  return (
    <div>
      <h1 >Let's go!</h1>
      {questions ? (
        <>
          <Box display="flex" justifyContent="space-between">
            <Box><b>Gategory: </b>{questions[currentQuestion].category}</Box>
            <Box>
              <Box>
                <b>Score</b> : {score}
              </Box>
              <Box>
                <Timer />
              </Box>
            </Box>
          </Box>
          <Question
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            questions={questions}
            options={options}
            correct={questions[currentQuestion]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
}

export default QuizQuestions