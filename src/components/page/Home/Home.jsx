import { NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getTrending } from 'components/request-api/tmbdRequestApi';

const Home = () => {
  const [filmArr, setFilmArr] = useState([]);

  const firstArr = useRef(filmArr);

  useEffect(() => {
    if (firstArr !== filmArr) {
      const fetchTrending = async () => {
        await getTrending().then(({ results }) => {
          // console.log(results);
          setFilmArr(results);
          firstArr.current = filmArr;
        });
      };
      if (filmArr) {
        fetchTrending();
      }
    }
  }, [filmArr]);
  // console.log(firstArr);
  const renderMovies = filmArr.map(
    ({ backdrop_path, original_title, vote_average, id }) => (
      <li key={id}>
        <NavLink to={`/Movies/${id}`}>
          <img src={`https://image.tmdb.org/t/p/w200${backdrop_path}`} alt="" />
          <p>{original_title}</p>
          <p>{vote_average.toFixed(2)}</p>
        </NavLink>
      </li>
    )
  );
  return <ul>{renderMovies}</ul>;
};

export default Home;
