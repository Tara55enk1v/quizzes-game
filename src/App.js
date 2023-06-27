import { Routes, Route } from 'react-router-dom';
import QuizzSettings from './routes/QuizzSettings';
import QuizzQuestions from './routes/QuizzQuestions';
import FinalView from './routes/FinalView';
import { Box, Container } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import useAxios from './hooks/useAxios';
import Navbar from './components/Navbar';



function App() {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);


  const fetchQuestions = async (category = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${category && `&category=${category}`}&type=multiple`
    );
    setQuestions(data.results);
  };


  return (
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<QuizzSettings fetchQuestions={fetchQuestions} response={response} loading={loading} error={error} />} exact />
            <Route path="/quizzquestions" element={<QuizzQuestions questions={questions} setQuestions={setQuestions} score={score} setScore={setScore} />} />
            <Route path="/finalview" element={<FinalView score={score}/>}/>
          </Routes>
        </Box>
      </Container>
  );
}

export default App;
