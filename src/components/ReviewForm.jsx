import { useForm } from "../hooks/useForm";
import { ReviewRateCounter } from "./ReviewRateCounter";

export const ReviewForm = () => {
  const { form, onUserNameChange, onReviewChange, onRatingChange, clear } =
    useForm();

  const { userName, review, rating } = form;

  return (
    <>
      <h3>Review form</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div>
          <span>User name</span>
          <input
            value={userName}
            onChange={(event) => {
              onUserNameChange(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Review</span>
          <input
            value={review}
            onChange={(event) => {
              onReviewChange(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Rating</span>
          <ReviewRateCounter rating={rating} onChange={onRatingChange} />
        </div>
        <button onClick={clear}>Clear</button>
      </form>
    </>
  );
};
