import { BallTriangle } from 'react-loader-spinner';
// import css from './Loader.module';
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

{/* <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}
/> */}