import { fetchMovieDetails } from 'services/Api/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Status } from 'services/config/Status';
import { useStateMachine } from 'helpers/hooks/stateMachine';

import { Movie } from 'components/Movie';
import { Loader } from 'components/Loader';
import { ErrorMessage } from 'components/ErrorMessage';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const { success, loading, error, setStateMachine } = useStateMachine(
    Status.IDLE
  );

  useEffect(() => {
    setStateMachine(Status.LOADING);
    get();

    async function get() {
      try {
        const responce = await fetchMovieDetails(movieId);
        setMovie({ ...responce });
        setStateMachine(Status.SUCCESS);
      } catch (error) {
        setStateMachine(Status.ERROR);
        console.log(error.message);
      }
    }
  }, []);

  if (success) return <Movie movie={movie} />;
  if (loading) return <Loader />;
  if (error) return <ErrorMessage />;
};

export default MovieDetails;