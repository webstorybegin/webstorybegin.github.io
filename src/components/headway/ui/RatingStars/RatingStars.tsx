import { useState } from "react";
import { Rating } from "react-simple-star-rating";

export const RatingStars = () => {
  const [rating, setRating] = useState(100);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  return (
    <>
      <Rating
        onClick={handleRating}
        ratingValue={rating}
        size={20}
        fillColor={"#FF8833"}
        allowHalfIcon={true}
      />
    </>
  );
};
