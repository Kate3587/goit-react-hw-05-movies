import { fetchReview } from 'services/Api/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Status } from 'services/config/Status';
import { useStateMachine } from 'helpers/hooks/stateMachine';
import { Loader } from 'components/Loader';
import { ReviewsItem } from './ReviewsItem';
import { ErrorMessage } from 'components/ErrorMessage';
import { ReviewsContainer, ReviewsList, ExitMessage} from './Reviews.styled';


const Reviews = () => {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();
  const { success, loading, error, setStateMachine } = useStateMachine(
    Status.IDLE
  );

  useEffect(() => {
    setStateMachine(Status.LOADING);
    get();

    async function get() {
      try {
        const { results } = await fetchReview(movieId);
        setReview([...results]);
        setStateMachine(Status.SUCCESS);
      } catch (error) {
        setStateMachine(Status.ERROR);
        console.log(error.message);
      }
    }
  }, []);
  const empty = review.length < 1;

  return (
    <ReviewsContainer>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {empty && (
        <ExitMessage>
          We don't have any reviewsfor this movie.
        </ExitMessage>
      )}
      {success && !empty && (
        <ReviewsList>
          {review.map(item => (
            <ReviewsItem key={item.id} review={item} />
          ))}
        </ReviewsList>
      )}
    </ReviewsContainer>
  );
};

export default Reviews;