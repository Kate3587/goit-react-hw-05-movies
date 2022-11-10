import { useEffect, useState } from 'react';
import { fetchMovies } from 'services/Api/Api';
import { Link } from 'react-router-dom';

import { Status } from 'services/config/Status';
import { useStateMachine } from 'helpers/hooks/stateMachine';
import { Loader } from 'components/Loader';
import { ErrorMessage } from 'components/ErrorMessage';
import {
  HomeSection, HomeTitle, HomeList, HomeCard,
  HomeCardLink, Overlay, Wrapp, HomeFilmName
} from './Home.styled';

const Home = () => {
  const [films, setFilms] = useState([]);
  const { success, loading, error, setStateMachine } = useStateMachine(
    Status.IDLE
  );

  useEffect(() => {
    setStateMachine(Status.LOADING);
    get();

    async function get() {
      try {
        const { results } = await fetchMovies();
        setFilms([...results]);
        setStateMachine(Status.SUCCESS);
      } catch (error) {
        setStateMachine(Status.ERROR);
        console.log(error.message);
      }
    }
  }, [setStateMachine]);

  return (
    <HomeSection>
      <HomeTitle>Trending today</HomeTitle>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {success && (
        <HomeList>
          {films.map(({ id, name, title, poster_path }) => {
            return (
              <HomeCard key={id}>
                <HomeCardLink>
                <Link to={`/movies/${id}`}>
                  <Wrapp>
                    <Overlay></Overlay>
                    <img
                      width={'250px'}
                      src={`https://image.tmdb.org/t/p/w400${poster_path}`}
                      alt={name ?? title}
                    />
                  </Wrapp>
                  <HomeFilmName>{name ?? title}</HomeFilmName>
                </Link>
                </HomeCardLink>
                
              </HomeCard>
            );
          })}
        </HomeList>
      )}
    </HomeSection>
  );
};

export default Home;