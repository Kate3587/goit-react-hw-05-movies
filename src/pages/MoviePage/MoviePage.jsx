import { fetchMovieByName } from 'services/Api/Api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Status } from 'services/config/Status';
import { useStateMachine } from 'helpers/hooks/stateMachine';
import { MovieCard } from 'components/MovieCard';
import { Pagination } from 'components/Pagination';
import { SearchForm } from 'components/SearchForm';
import { Loader } from 'components/Loader';
import { ErrorMessage } from 'components/ErrorMessage';
import {MoviePageWrapp, MoviePageList, ExitMessage} from './MoviePage.styled'


const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useSearchParams();
  const { succes, loading, error, setStateMachine } = useStateMachine(
    Status.IDLE
  );

  const filmNameStr = query.get('filmName') ?? '';
  const pageStr = query.get('pageNumber') ?? 1;

  const handleWriteQuery = ({ value = filmNameStr, number = 1 }) => {
    setQuery(value ? { filmName: value, pageNumber: number } : {});
  };

  useEffect(() => {
    if (filmNameStr) {
      setStateMachine(Status.LOADING);
      get();
    }

    async function get() {
      try {
        const { results, total_pages } = await fetchMovieByName(
          filmNameStr,
          pageStr
        );
        setMovies([...results]);
        setTotalPages(total_pages);
        setStateMachine(Status.SUCCESS);
      } catch (error) {
        setStateMachine(Status.ERROR);
        console.log(error.message);
      }
    }
  }, [filmNameStr, pageStr, setStateMachine]);

  const moviesAmount = movies.length;
  return (
    <MoviePageWrapp>
      <SearchForm onHandleSubmit={handleWriteQuery} />
      {loading && <Loader />}
      {moviesAmount > 0 && succes && (
        <MoviePageList>
          {movies.map(({ poster_path, title, id, release_date, overview }) => (
            <MovieCard
              key={id}
              data={{ poster_path, title, release_date, id, overview }}
            />
          ))}
        </MoviePageList>
      )}
      {succes && moviesAmount === 0 && (
        <ExitMessage>
          Sorry, we haven't any information about film {query}.
        </ExitMessage>
      )}
      {error && <ErrorMessage />}
      {totalPages > 1 && succes && (
        <Pagination
          totalPages={totalPages}
          page={pageStr}
          paginationFunc={handleWriteQuery}
        />
      )}
    </MoviePageWrapp>
  );
};

export default MoviePage;