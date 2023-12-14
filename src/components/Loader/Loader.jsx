import { BallTriangle } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div style={styles.loaderContainer}>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </div>
  );
};
const styles = {
  loaderContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
};

export default Loader;
