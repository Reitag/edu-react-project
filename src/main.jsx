import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { restaurants } from "../materials/mock.js";

const App = () => {
  return (
    <div>
      {restaurants.map(({ id, name, menu, reviews }) => (
        <div key={id}>
          <h2>{name}</h2>
          <h3>Меню</h3>
          {menu.map((dish) => (
            <ul key={dish.id}>
              <li>{dish.name}</li>
            </ul>
          ))}
          <h3>Отзывы</h3>
          {reviews.map((review) => (
            <ul key={review.id}>
              <li>{review.text}</li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
