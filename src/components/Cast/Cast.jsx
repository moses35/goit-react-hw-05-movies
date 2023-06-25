import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchQuery from 'servises/fetchQuery';
import { lazy } from 'react';
const CastItem = lazy(() => import('components/CastItem/CastItem'));

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    fetchQuery(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=76a565cd635ec9567aa9794e25759f83`
    )
      .then(response => {
        setCast([...response.cast]);
      })
      .catch(() => {
        console.log('error');
      });
  }, [movieId]);

  return (
    <>
      <ul>
        {[cast.length] &&
          cast.map(item => <CastItem key={item.id} item={item} />)}
      </ul>
    </>
  );
};
export default Cast;
