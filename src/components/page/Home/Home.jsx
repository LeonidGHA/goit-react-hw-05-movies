import { NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getTrending } from 'components/request-api/tmbdRequestApi';

import css from './Home.module.css';

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
    ({ poster_path, original_title, vote_average, id }) => (
      <li key={id} className={css.item}>
        <NavLink to={`/Movies/${id}`} className={css.item_link}>
          <div>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/original/${poster_path}`
                  : `https://static.vecteezy.com/system/resources/previews/003/393/235/original/error-404-with-the-cute-floppy-disk-mascot-free-vector.jpg`
              }
              alt=""
            />
          </div>

          <p className={css.title}>{original_title}</p>
          <p className={css.rating}>{vote_average.toFixed(2)}</p>
        </NavLink>
      </li>
    )
  );
  return <ul className={css.list}>{renderMovies}</ul>;
};

export default Home;
