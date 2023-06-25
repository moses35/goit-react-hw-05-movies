import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchQuery from 'servises/fetchQuery';
import { lazy } from 'react';
const ReviewsItem = lazy(() => import('components/ReviewsItem/ReviewsItem'));

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetchQuery(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=76a565cd635ec9567aa9794e25759f83`
    )
      .then(response => {
        setReviews([...response.results]);
      })
      .catch(() => {
        console.log('error');
      });
  }, [movieId]);
  return (
    <>
      <ul>
        {reviews.length > 0 ? (
          reviews.map(item => <ReviewsItem key={item.id} item={item} />)
        ) : (
          <p>Not found</p>
        )}
      </ul>
    </>
  );
};
export default Reviews;
