import {
    CHANGE_CATEGORY,
    TOTAL_QUIZZ_TIME,
    START_QUIZZ_TIMER,
  } from "./actionTypes";
  
export const handleCategoryChange = (payload) => ({
  type: CHANGE_CATEGORY,
  payload,
});

export const setTotalQuizzTime = (payload) => ({
  type: TOTAL_QUIZZ_TIME,
  payload,
});

export const setStartQuizzTimer = (payload) => ({
  type: START_QUIZZ_TIMER,
  payload,
});
  