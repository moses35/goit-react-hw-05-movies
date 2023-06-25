import { useEffect, useState, useRef, Suspense } from 'react';
import { Outlet, useParams, NavLink, useLocation } from 'react-router-dom';
import fetchQuery from 'servises/fetchQuery';
import notFound from 'images/notFound.png';
import { Block, BtnBlock } from 'components/MovieDetails/MovieDetails.styled';
import { Img } from 'components/App/App.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [posterPath, setPosterPath] = useState('');
  const [genres, setGenres] = useState([]);
  const [originalTitle, setoriginalTitle] = useState('');
  const [overview, setOverview] = useState('');
  const [voteAverage, setVoteAverage] = useState('');
  const location = useLocation();

  const valueRef = useRef(true);

  useEffect(() => {
    if (valueRef.current) {
      fetchQuery(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=76a565cd635ec9567aa9794e25759f83`
      )
        .then(response => {
          setPosterPath(response.poster_path);
          setGenres([...response.genres]);
          setoriginalTitle(response.original_title);
          setOverview(response.overview);
          setVoteAverage(response.vote_average);
          valueRef.current = false;
        })
        .catch(() => {
          console.log('Not found');
        })
        .finally();
    }
  }, [movieId]);

  return (
    <Block>
      <BtnBlock>
        <NavLink to={location.state?.from ?? '/'}>
          <button>Back</button>
        </NavLink>
      </BtnBlock>
      <div>
        {posterPath && (
          <Img
            src={'https://image.tmdb.org/t/p/w500' + posterPath}
            alt={originalTitle}
          />
        )}
        {!posterPath && <Img src={notFound} alt={originalTitle} />}
        <h1>{originalTitle || 'Not found'}</h1>
        <p>{voteAverage || 'Not found'}</p>
        <h2>Overview </h2>
        <p>{overview || 'Not found'}</p>
        <h2>Genres</h2>
        <p>
          {genres.map(item => (
            <span key={item.name}>{item.name + ' ' || 'Not found'}</span>
          ))}
        </p>
      </div>
      <ul>
        <li>
          <NavLink to="cast" state={{ from: location.state?.from }}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" state={{ from: location.state?.from }}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Block>
  );
};

export default MovieDetails;
