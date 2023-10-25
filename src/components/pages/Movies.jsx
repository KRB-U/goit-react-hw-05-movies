import { searchMovies } from 'helpers/API';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [moviesData, setMoviesData] = useState([]);

  const validQuery = searchParams.get('searchQuery');
  console.log(validQuery);
  // console.log(moviesData);

  const hendleSubmitForm = evt => {
    evt.preventDefault();
  };

  const handleChange = evt => {
    const searchQueryValue = evt.target.value;

    setSearchParams({ searchQuery: searchQueryValue });
  };

  useEffect(() => {
    const fetchedMovies = async () => {
      try {
        const fetchSearchMovie = await searchMovies(1, validQuery);
        // setMoviesData(fetchSearchMovie);
      } catch (err) {
        console.log(err);
      }
    };

    fetchedMovies();
  }, []);

  return (
    <>
      <form onSubmit={hendleSubmitForm}>
        <input
          type="text"
          // value={{}}
          placeholder="Введіть пошуковий запит"
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
