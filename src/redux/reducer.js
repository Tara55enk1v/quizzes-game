import {
    CHANGE_CATEGORY, 
    TOTAL_QUIZZ_TIME, 
    START_QUIZZ_TIMER,
} from "./actionTypes";

const initialState = {
    question_category: "",
    total_quizz_time:  0,
    start_quizz_timer: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CATEGORY:
            return {
                ...state,
                question_category: action.payload,
            };
        case TOTAL_QUIZZ_TIME:
            return {
                ...state,
                total_quizz_time: action.payload,
            }
        case START_QUIZZ_TIMER:
            return {
                ...state,
                start_quizz_timer: action.payload
            }
        default:
            return state;
    }
};

export default reducer;