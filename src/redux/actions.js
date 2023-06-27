import {
    CHANGE_CATEGORY,
    TOTAL_QUIZ_TIME,
    START_QUIZ_TIMER,
  } from "./actionTypes";
  
export const handleCategoryChange = (payload) => ({
  type: CHANGE_CATEGORY,
  payload,
});

export const setTotalQuizTime = (payload) => ({
  type: TOTAL_QUIZ_TIME,
  payload,
});

export const setStartQuizTimer = (payload) => ({
  type: START_QUIZ_TIMER,
  payload,
});
  