import { fetchReview } from 'services/Api/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import css from './Reviews.module.css';
import { Status } from 'services/config/Status';
import { useStateMachine } from 'helpers/hooks/stateMachine';

import { Loader } from 'components/Loader';
// import { ErrorMesage } from 'components/ErrorMesage';
import { ReviewsItem } from './ReviewsItem';

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
    <div className={css.container}>
      {loading && <Loader />}
      {/* {error && <ErrorMesage />} */}
      {empty && (
        <h2 className={css.messageEmpty}>
          There are no reviews for this film yet. :(
        </h2>
      )}
      {success && !empty && (
        <ul className={css.list}>
          {review.map(item => (
            <ReviewsItem key={item.id} review={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;