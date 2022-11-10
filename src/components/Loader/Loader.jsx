import { BallTriangle } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => (
  <BallTriangle
    height={100}
    width={100}
    radius={5}
    color="red"
    ariaLabel="watch-loading"
    wrapperStyle
     wrapperClass={css.loader}
    visible={true}
  />
);

