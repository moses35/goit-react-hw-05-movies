import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import fetchQuery from 'servises/fetchQuery';
import { useSearchParams } from 'react-router-dom';
import { Input } from 'pages/Movies.styled';
import { lazy } from 'react';
const GalleryItem = lazy(() => import('components/GalleryItem/GalleryItem'));

const Movies = () => {
  const [value, setValue] = useState('');
  const [film, setFilm] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');

  const handleChange = e => {
    const { value } = e.currentTarget;
    setValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim() === '') {
      return toast.error('Write a request!');
    }
    setFilm(value);
    setSearchParams({ query: value });

    reset();
  };

  const reset = () => {
    setValue('');
  };

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (query) {
      setFilm(query);
    }
    if (film) {
      fetchQuery(
        `https://api.themoviedb.org/3/search/movie?query=${film}&api_key=76a565cd635ec9567aa9794e25759f83`
      )
        .then(response => {
          setSearchResult([...response.results]);
        })
        .catch(() => {
          console.log('error');
        });
      reset();
    }
  }, [searchParams, setSearchParams, film]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          value={value}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {[searchResult.length] &&
          searchResult.map(item => <GalleryItem key={item.id} item={item} />)}
      </ul>
    </>
  );
};
export default Movies;
