import { useForm } from "../../hooks/useForm";
import { ReviewRateCounter } from "../ReviewRateCounter/ReviewRateCounter";
import { useUserContext } from "../../hooks/useUserContext";
import styles from "./ReviewForm.module.css";

export const ReviewForm = () => {
  const { form, onUserNameChange, onReviewChange, onRatingChange, clear } =
    useForm();

  const { user } = useUserContext();
  if (!user) return null;

  const { userName, review, rating } = form;

  return (
    <div className={styles.formContainer}>
      <h3>Review form</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className={styles.formGroup}>
          <label htmlFor="userName">User name</label>
          <input
            id="userName"
            value={userName}
            onChange={(event) => onUserNameChange(event.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="review">Review</label>
          <input
            id="review"
            value={review}
            onChange={(event) => onReviewChange(event.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="rating">Rating</label>
          <ReviewRateCounter rating={rating} onChange={onRatingChange} />
        </div>
        <button type="button" className={styles.clearButton} onClick={clear}>
          Clear
        </button>
      </form>
    </div>
  );
};
