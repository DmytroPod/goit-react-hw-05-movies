import { useEffect, useState } from 'react';
import { getTrending } from 'Servise/API';
import MoviesList from 'components/MoviesList/MoviesList';

const HomePage = () => {
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    const fetchTrendings = async () => {
      try {
        const response = await getTrending();

        setTrendings(response);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTrendings();
  }, []);

  return <MoviesList movies={trendings} />;
};

export default HomePage;
