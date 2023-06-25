import { useEffect, useState } from 'react';
import fetchQuery from 'servises/fetchQuery';
import { lazy } from 'react';
const GalleryItem = lazy(() => import('components/GalleryItem/GalleryItem'));

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchQuery(
      `https://api.themoviedb.org/3/trending/all/day?api_key=76a565cd635ec9567aa9794e25759f83`
    )
      .then(response => {
        setMovies([...response.results]);
      })
      .catch(() => {
        console.log('error');
      });
  }, []);
  return (
    <>
      <ul>
        {[movies.length] &&
          movies.map(item => <GalleryItem key={item.id} item={item} />)}
      </ul>
    </>
  );
};
export default Home;
