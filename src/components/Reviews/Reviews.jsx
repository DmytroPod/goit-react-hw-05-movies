import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { getReviews } from 'Servise/API';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchgetReviews = async () => {
      try {
        const { results } = await getReviews(movieId);
        setReviews(results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchgetReviews();
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ author, id, content }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
};
export default Reviews;
