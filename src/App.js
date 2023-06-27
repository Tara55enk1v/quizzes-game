import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuizzSettings from './pages/QuizzSettings';
import QuizzQuestions from './pages/QuizzQuestions';
import FinalView from './pages/FinalView';
import { Box, Container } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import useAxios from './hooks/useAxios';


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
    <BrowserRouter>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Routes>
            <Route path="/" element={<QuizzSettings fetchQuestions={fetchQuestions} response={response} loading={loading} error={error} />} exact />
            <Route path="/quizzquestions" element={<QuizzQuestions questions={questions} setQuestions={setQuestions} score={score} setScore={setScore} />} />
            <Route path="/finalview" element={<FinalView score={score}/>}/>
          </Routes>
        </Box>
      </Container>
    </BrowserRouter>
  );
}

export default App;
