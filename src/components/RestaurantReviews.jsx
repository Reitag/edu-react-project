export const RestaurantReviews = ({ reviews }) => {
  return (
    <>
      <h3>Отзывы</h3>
      {reviews.map((review) => (
        <ul key={review.id}>
          <li>{review.text}</li>
        </ul>
      ))}
    </>
  );
};
