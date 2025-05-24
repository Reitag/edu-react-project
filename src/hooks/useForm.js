import { useReducer } from "react";

const INITIAL_FORM = {
  userName: "",
  review: "",
  rating: 0,
};

const SET_USERNAME_ACTION = "setUserName";
const SET_REVIEW_ACTION = "setReview";
const SET_RATING_ACTION = "setRating";
const CLEAR_ACTION = "clear";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_USERNAME_ACTION:
      return {
        ...state,
        userName: payload,
      };
    case SET_REVIEW_ACTION:
      return {
        ...state,
        review: payload,
      };
    case SET_RATING_ACTION:
      return {
        ...state,
        rating: payload,
      };
    case CLEAR_ACTION:
      return INITIAL_FORM;
    default:
      return state;
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, INITIAL_FORM);

  const onUserNameChange = (userName) => {
    dispatch({ type: SET_USERNAME_ACTION, payload: userName });
  };

  const onReviewChange = (review) => {
    dispatch({ type: SET_REVIEW_ACTION, payload: review });
  };

  const onRatingChange = (rating) => {
    dispatch({ type: SET_RATING_ACTION, payload: rating });
  };

  const clear = () => dispatch({ type: CLEAR_ACTION });

  return {
    form,
    onUserNameChange,
    onReviewChange,
    onRatingChange,
    clear,
  };
};
