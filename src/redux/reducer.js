import {
    CHANGE_CATEGORY, 
    TOTAL_QUIZ_TIME, 
    START_QUIZ_TIMER,
} from "./actionTypes";

const initialState = {
    question_category: "",
    total_quiz_time:  0,
    start_quiz_timer: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CATEGORY:
            return {
                ...state,
                question_category: action.payload,
            };
        case TOTAL_QUIZ_TIME:
            return {
                ...state,
                total_quiz_time: action.payload,
            }
        case START_QUIZ_TIMER:
            return {
                ...state,
                start_quiz_timer: action.payload
            }
        default:
            return state;
    }
};

export default reducer;