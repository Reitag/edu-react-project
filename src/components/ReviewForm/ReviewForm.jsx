import { useForm } from "../../hooks/useForm";
import { ReviewRateCounter } from "../ReviewRateCounter/ReviewRateCounter";
import { useUserContext } from "../../hooks/useUserContext";
import styles from "./ReviewForm.module.css";

export const ReviewForm = ({ onSubmitForm }) => {
  const { form, onReviewChange, onRatingChange, clear } = useForm();
  const { user } = useUserContext();

  if (!user) return null;

  const { review, rating } = form;

  return (
    <div className={styles.formContainer}>
      <h3>Review form</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
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
        <button type="submit" onClick={() => onSubmitForm(form)}>
          Submit
        </button>
      </form>
    </div>
  );
};
