import { ButtonToBack } from 'components/BackButton/BackButton';
import { ButtonLoadMore } from 'components/LoadMore/LoadMore';
import MovieList from 'components/MoviesList/MoviesList';
import { getMovieGenres } from 'helpers/API';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

export default function GenreFilter() {
  const [genreData, setGenreData] = useState([]);
  const paramsGenre = useParams();
  const genreId = paramsGenre.GenreId;
  const [page, setPage] = useState(1);

  const localLocation = useLocation();
  const backLinkLocationRef = useRef(localLocation.state?.from ?? `/`);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    const fetchGenre = async () => {
      try {
        const fetchedGenreMovies = await getMovieGenres(page, genreId);

        setGenreData(prevGenre => {
          if (page === 1) {
            return [...fetchedGenreMovies.results];
          }
          return [...prevGenre, ...fetchedGenreMovies.results];
        });
      } catch (err) {
        console.log(err);
      }
    };

    fetchGenre();
  }, [genreId, page]);
  return (
    <div>
      <ButtonToBack location={backLinkLocationRef.current} />
      <MovieList trendMovies={genreData} />
      <ButtonLoadMore
        handleLoadMore={handleLoadMore}
        style={{ margin: '0 auto', textAlign: 'center' }}
      />
    </div>
  );
}
