import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrending } from 'components/request-api/tmbdRequestApi';

import css from './Home.module.css';

const Home = () => {
  const [filmArr, setFilmArr] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchTrending = async () => {
      await getTrending(page).then(({ results }) => {
        setFilmArr(results);
      });
    };
    fetchTrending();
  }, [page]);

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
  return (
    <>
      <ul className={css.list}>{renderMovies}</ul>
      <div className={css.thumb}>
        {page !== 1 && (
          <button
            className={css.btn}
            type="button"
            onClick={() => setPage(page - 1)}
          >
            Pevios page
          </button>
        )}

        <button
          className={css.btn}
          type="button"
          onClick={() => setPage(page + 1)}
        >
          Next page
        </button>
      </div>
    </>
  );
};

export default Home;
