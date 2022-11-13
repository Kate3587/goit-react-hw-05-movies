import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { actor } from 'services/config/match';
import { Status } from 'services/config/Status';
import { useStateMachine } from 'helpers/hooks/stateMachine';
import { fetchCast } from 'services/Api/Api';
import { CastItems } from './CastItems';
import { Loader } from '../Loader/Loader';
import { ErrorMessage } from 'components/ErrorMessage';
import { Wrapper, CastList, MessageTitle } from './Cast.styled';


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
    <Wrapper>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {empty && (
        <MessageTitle>
          We don't have any information about actors.
        </MessageTitle>
      )}
      {success && !empty && (
        <CastList>
          {cast.map(item => {
            if (item.known_for_department !== actor) return null;
            return <CastItems key={item.id} item={item} />;
          })}
        </CastList>
      )}
    </Wrapper>
  );
};
export default Cast;