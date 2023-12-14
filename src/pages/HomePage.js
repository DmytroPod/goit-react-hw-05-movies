import { useEffect, useState } from 'react';
import { getTrending } from 'Servise/API';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

const HomePage = () => {
  const [trendings, setTrendings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchTrendings = async () => {
      try {
        const response = await getTrending();

        setTrendings(response);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrendings();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <MoviesList movies={trendings} />
    </>
  );
};

export default HomePage;
