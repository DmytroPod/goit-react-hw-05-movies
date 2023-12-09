import { getCast } from 'Servise/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  // const { movieId } = useParams();
  // console.log(movieId);
  // const [cast, setCast] = useState([]);
  // useEffect(() => {
  //   const fetchgetCast = async () => {
  //     try {
  //       const castRes = await getCast(movieId);
  //       setCast(castRes.cast);
  //       return castRes;
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchgetCast();
  // }, [movieId]);

  return <div>Cast </div>;
};
export default Cast;
