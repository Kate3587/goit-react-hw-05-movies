import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ACTOR } from 'services/config/match';
import { Status } from 'services/config/Status';
import { useStateMachine } from 'helpers/hooks/stateMachine';

// import css from './Cast.module.css';
import { fetchCast } from 'services/Api/Api';
import { CastItem } from './CastItems';
import { Loader } from '../Loader/Loader';
// import { ErrorMesage } from 'components/ErrorMesage';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const { success, loading, error, setStateMachine } = useStateMachine(
    Status.IDLE
  );

  useEffect(() => {
    setStateMachine(Status.LOADING);
    get();
    async function get() {
      try {
        const { cast } = await fetchCast(movieId);
        setCast([...cast]);
        setStateMachine(Status.SUCCESS);
      } catch (error) {
        setStateMachine(Status.ERROR);
        console.log(error.message);
      }
    }
  }, [movieId, setStateMachine]);
  const empty = cast.length < 1;
  return (
    <div className={css.wraper}>
      {loading && <Loader />}
      {error && <ErrorMesage />}
      {empty && (
        <h2 className={css.messageEmpty}>
          Unfortunately, we do not have information about the actors from this
          film. :(
        </h2>
      )}
      {loading && !empty && (
        <ul className={css.list}>
          {cast.map(item => {
            if (item.known_for_department !== ACTOR) return null;
            return <CastItem key={item.id} item={item} />;
          })}
        </ul>
      )}
    </div>
  );
};
export default Cast;